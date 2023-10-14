import Taro, { request, showToast } from "@tarojs/taro";
import { BASE_URL, TIME_OUT, CODE } from "@/constants/request";
import {
  STORAGE_KEY_MAP,
  NEED_TO_CLEAR_STORAGE_KEY_MAP,
} from "@/constants/key-map";
import { getStorage, removeStorage } from "@/utils/storage";

export const http = (url, method, data, options) => {
  const defaultHeader = {
    appName: "BATAR_SUPPLY_SCM",
  };
  return new Promise((resolve, reject) => {
    const token = getStorage(STORAGE_KEY_MAP.TOKEN);
    if (token) {
      defaultHeader["accessToken"] = token;
    }

    let formatData = {};
    try {
      formatData = JSON.parse(JSON.stringify(data), (key, value) => {
        if (value === null || value === "") return undefined;
        return value;
      });
    } catch (err) {
      formatData = { ...data };
      console.error("request.ts 请求参数 Format 错误：", err);
    }
    request({
      url: `${BASE_URL}${url}`,
      method,
      data: formatData,
      timeout: TIME_OUT,
      ...options,
      header: {
        ...defaultHeader,
        ...options.header,
      },
    }).then(response => {
      const { data: responseData, statusCode } = response;
      if (statusCode !== CODE.SUCCESS) {
        showToast({
          title: responseData,
          icon: "error",
        });
        if (statusCode === 403) {
          Object.keys(NEED_TO_CLEAR_STORAGE_KEY_MAP).forEach(key => {
            removeStorage(key);
          });
          Taro.redirectTo({
            url: "/pages/packageA/login/index",
          });
        }
        reject(response);
        return;
      }
      resolve(responseData);
    });
  });
};

export const get = (url, data, options = {}) => {
  return new Promise((resolve, reject) => {
    http(url, "GET", data, options)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const post = (
  url,
  data,
  options = {
    header: {
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  }
) => {
  return new Promise((resolve, reject) => {
    http(url, "POST", data, options)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const postJson = (
  url,
  data,
  options = {
    header: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
) => {
  return new Promise((resolve, reject) => {
    http(url, "POST", data, options)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
