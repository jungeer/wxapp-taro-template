<template>
  <view class="index">
    <text>{{ userStore.getNickname }}</text>
    {{ formattedTime }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick">
        点我跳转二级页面
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import { Dongdong } from "@nutui/icons-vue-taro";

import Taro, { useDidShow } from "@tarojs/taro";

import { useNow, useDateFormat } from "@vueuse/core";

import { useUserStore } from "@/store";

const userStore = useUserStore();

const formattedTime = useDateFormat(useNow(), "YYYY年MM月DD日 HH:mm:ss");

useDidShow(() => console.log("onShow"));

const handleClick = () => {
  Taro.navigateTo({
    url: "/pages/index/index-page/index",
  });
};
</script>
