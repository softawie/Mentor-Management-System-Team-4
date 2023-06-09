const prod = true

export const serverHost = prod ? 'https://mms-team4.onrender.com' : 'http://127.0.0.1:3000';

const basePath = `${serverHost}/api`;

const apiVersion = '/v1';

const apiPath = basePath + apiVersion;

const appName = 'MMS Team4';

export const userCookie = 'YzY1MzUzNWUtNjM2OS';

export const defaultCookieExpires = 1; // in days

const appConfig = {
  basePath, apiVersion, apiPath, appName,
};

export default appConfig;

export const CLOUDINARY_NAME = 'dhojciv8g';
export const CLOUDINARY_PRESET = 'ocabiwp6';
export const editorApiKey = 'az4jjuya0r8mednk47zpgjbwm2ei0a135vje7duq24twmomo';
