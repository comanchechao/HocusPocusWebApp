import { defineStore } from "pinia";
export const useCommentsStore = defineStore("commentsStore", {
  state: () => ({
    stateChange: false,
    videoState: false,
  }),
  actions: {
    setStateChange() {
      this.stateChange = !this.stateChange;
    },
    setVideoState() {
      this.videoState = !this.videoState;
    },
  },
});
