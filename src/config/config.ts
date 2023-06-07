import config from './config.json';

const ENV_MAP: any = {
    development: {
        Environment: "development",
        APIServer: "http://localhost:3030",
        Host: "http://localhost:3000",
        Debug: true,
    },
    test: {
        Environment: "test",
        APIServer: "https://testapi.aa.com",
        Host: "https://testaz.aa.com",
        Debug: true,
    },
    production: {
        Environment: "production",
        APIServer: "https://api.aa.com",
        Host: "https://www.aa.com",
        Debug: false,
    }
};

export default ENV_MAP[config.NODE_ENV] || ENV_MAP.development;
