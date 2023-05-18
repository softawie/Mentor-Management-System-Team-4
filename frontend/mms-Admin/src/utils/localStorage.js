const getStoredItem = (key) => {
  return localStorage.getItem(key);
};

const storeItem = (key, value) => {
  localStorage.setItem(key, value);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

const storageKeys = {
  msg: "MSG",
  vid: "vid",
  type: "type",
  IS_LOGIN: "IS_LOGIN",
  token: "token",
};

export { getStoredItem, storeItem, removeItem, storageKeys };
