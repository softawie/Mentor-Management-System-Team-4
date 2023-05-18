const findFirstExistingProperty = (properties, errorMessage) => {
  const notEmptyProperties = properties.filter(
    (property) => property !== undefined
  );
  if (notEmptyProperties.length === 0) {
    throw new Error(errorMessage);
  }
  return notEmptyProperties[0];
};

const resolveURL = () => {
  return findFirstExistingProperty(
    [import.meta.env.VITE_BASE_URL],
    "Failed to resolve url..."
  );
};

const resolveUserName = () => {
  return findFirstExistingProperty(
    [import.meta.env.VITE_BASIC_USERNAME],
    "Failed to resolve username..."
  );
};

const resolvePass = () => {
  return findFirstExistingProperty(
    [import.meta.env.VITE_BASIC_PASSWORD],
    "Failed to resolve password..."
  );
};

const resolveALUserName = () => {
  return findFirstExistingProperty(
    [import.meta.env.VITE_AL_BASIC_USERNAME],
    "Failed to resolve username..."
  );
};

const resolveALPass = () => {
  return findFirstExistingProperty(
    [import.meta.env.VITE_AL_BASIC_PASSWORD],
    "Failed to resolve password..."
  );
};

export const BASE_URL = resolveURL();
export const BASIC_USERNAME = resolveUserName();
export const BASIC_PASSWORD = resolvePass();
export const AL_BASIC_USERNAME = resolveALUserName();
export const AL_BASIC_PASSWORD = resolveALPass();
