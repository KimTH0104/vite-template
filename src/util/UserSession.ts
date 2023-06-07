import jwtDecode from 'jwt-decode';

const AUTH_TOKEN = "at";
const LATEST_WORKSPACE = "lw";

const isLoggedIn = (): boolean => {
    return validateToken();
}

const decodeAuthToken = (): any => {
    if (getAuthToken() === "") { return null; }
    return jwtDecode(getAuthToken());
}

const getAuthToken = (): any => {
    const token = window.localStorage.getItem(AUTH_TOKEN);
    if (token === null) { return ""; }
    return token;
}

const validateToken = (): boolean => {
    if (decodeAuthToken() === null) { return false; }
    if (decodeAuthToken().exp * 1000 < new Date().getTime()) {
        window.localStorage.removeItem(AUTH_TOKEN)
        return false;
    } else {
        return true;
    }
}

const get = (key?: string): any => {
    if (validateToken() === false) { return null; }
    if (key === undefined) {
        return decodeAuthToken();
    } else {
        return decodeAuthToken()[key];
    }
}

const save = (token: string): void => {
    window.localStorage.setItem(AUTH_TOKEN, token.trim());
}

const clear = (): void => {
    window.localStorage.removeItem(AUTH_TOKEN);
}

const setLatestWorkspace = (id: string): void => {
    window.localStorage.setItem(LATEST_WORKSPACE, id);
}

const getLatestWorkspace = (): string | null => {
    return window.localStorage.getItem(LATEST_WORKSPACE);
}

const UserSession = {
    isLoggedIn,
    getToken: getAuthToken,
    get,
    save,
    clear,
    setLatestWorkspace,
    getLatestWorkspace,
}

export default UserSession;
