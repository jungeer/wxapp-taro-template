import { TABBAR_PAGE } from "./constants/tabbar";

export default defineAppConfig({
  pages: ["pages/tabbar/index/index", "pages/tabbar/my/index"],
  tabBar: {
    color: "#8c8c8c",
    selectedColor: "#fa2c19",
    borderStyle: "black",
    list: [
      {
        pagePath: TABBAR_PAGE.index,
        text: "首页",
        iconPath: "./assets/images/tabbar/index.png",
        selectedIconPath: "./assets/images/tabbar/index-light.png",
      },
      {
        pagePath: TABBAR_PAGE.my,
        text: "我的",
        iconPath: "./assets/images/tabbar/my.png",
        selectedIconPath: "./assets/images/tabbar/my-light.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "小程序项目模板",
    navigationBarTextStyle: "black",
  },
  subpackages: [
    {
      root: "pages/index",
      name: "首页",
      pages: ["index-page/index"],
    },
    {
      root: "pages/my",
      name: "我的",
      pages: ["my-page/index"],
    },
  ],
});
