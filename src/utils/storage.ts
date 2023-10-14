import Taro from "@tarojs/taro";

export const setStorage = (key, value) => {
  Taro.setStorageSync(key, value);
  return { key, value };
};

export const getStorage = key => {
  return Taro.getStorageSync(key);
};

export const removeStorage = key => {
  Taro.removeStorageSync(key);
  return { key, value: getStorage(key) };
};

export const clearStorage = () => {
  Taro.clearStorage();
};
