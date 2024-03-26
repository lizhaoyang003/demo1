import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
      count1: 0
    };
  },
  actions: {
    increment() {
      this.count = 0;
      this.count1 = 0;
    }
  }
});

export const useNamesStore = defineStore('names', {
  state: () => {
    return { count: '<div>aaaaa</div>' };
  },
  actions: {
    increment(name) {
      this.count = name;
    }
  }
});

export const urlStore = defineStore('url', {
  state: () => {
    return { url: '1' };
  },
  actions: {
    increment(name) {
      this.count = name;
    }
  }
});

export const userIdStore = defineStore('userId', {
  state: () => {
    return { userId: JSON.parse(localStorage.getItem('userId')) };
  }
});
