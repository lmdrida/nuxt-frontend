import { defineStore } from "pinia";

export const useCounterStore = defineStore("activity", {
  state: () => ({ 
    count: 0
 }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
