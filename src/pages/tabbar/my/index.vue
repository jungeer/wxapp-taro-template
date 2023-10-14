<template>
  <view>
    <nut-button type="primary" @click="onChangeNickname">
      修改 store nickname
    </nut-button>
    <nut-button type="primary" @click="handleClick">
      点我跳转二级页面
    </nut-button>
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";

import { useUserStore } from "@/store";

const userStore = useUserStore();

const onChangeNickname = () => {
  userStore.setUserinfo("nickname change");
};

const handleClick = () => {
  Taro.navigateTo({
    url: "/pages/my/my-page/index",
  });
};
</script>

<style lang="scss" scoped></style>
