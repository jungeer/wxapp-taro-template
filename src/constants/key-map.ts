export const STORAGE_KEY_MAP = {
  TOKEN: "TOKEN", // 鉴权 Token
  USERNAME: "USERNAME", // 登录账户
  PASSWORD: "PASSWORD", // 登录密码
  USERINFO: "USERINFO", // 用户信息
};

/**
 * 用户 手动退出登录/403 时需要被清空的缓存值
 */
export const NEED_TO_CLEAR_STORAGE_KEY_MAP = {
  TOKEN: "TOKEN", // 鉴权 Token
  USERINFO: "USERINFO", // 用户信息
};

export const GOODS_PARAM_KEY_MAP = {
  FQ: "innerCategoryFirst", // 一级分区（分区）
  E_FQ: "innerCategorySecond", // 二级分区
  PL: "firstCategory", // 一级品类
  E_PL: "categorySecond", // 二级品类
};

export const ALL = "ALL";
