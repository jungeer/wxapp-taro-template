import { defineStore } from "pinia";

const useUserStore = defineStore("userStore", {
  state: () => ({
    nickname: "jungeer",
    avatar: "",
  }),
  getters: {
    getNickname(state) {
      return state.nickname;
    },
  },
  actions: {
    setUserinfo(nickname) {
      this.nickname = nickname;
    },
  },
});

export default useUserStore;
