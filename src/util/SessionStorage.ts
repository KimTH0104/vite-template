import jwtDecode from 'jwt-decode';

const isAccessible = (serviceName: string): boolean => {
    return validateToken(serviceName);
}

const decodeAuthToken = (serviceName: string): any => {
    if (getAuthToken(serviceName) === "") { return null; }
    return jwtDecode(getAuthToken(serviceName));
}

const getAuthToken = (serviceName: string): any => {
    const token = window.sessionStorage.getItem(serviceName);
    if (token === null) { return ""; }
    return token;
}

const validateToken = (serviceName: string): boolean => {
    if (decodeAuthToken(serviceName) === null) { return false; }
    if (decodeAuthToken(serviceName).exp * 1000 < new Date().getTime()) {
        return false;
    } else {
        return true;
    }
}

const get = (serviceName: string, key?: string): any => {
    if (validateToken(serviceName) === false) { return null; }
    if (key === undefined) {
        return decodeAuthToken(serviceName);
    } else {
        return decodeAuthToken(serviceName)[key];
    }
}

const save = (serviceName: string, token: string): void => {
    window.sessionStorage.setItem(serviceName, token.trim());
}

const clear = (serviceName: string): void => {
    window.sessionStorage.removeItem(serviceName);
}

const SessionStorage = {
    isAccessible,
    getToken: getAuthToken,
    get,
    save,
    clear,
}

export default SessionStorage;
