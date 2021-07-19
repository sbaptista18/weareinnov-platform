import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      pages: [
        {
          id: "3",
          title: "Serviços",
          slug: "servicos",
          author: "We Are Innov",
          created_at: "2021-01-31 16:26:45",
          updated_at: "2021-01-31 16:26:45",
        },
        {
          id: "2",
          title: "Sobre Nós",
          slug: "sobre-nos",
          author: "We Are Innov",
          created_at: "2021-01-29 11:45:14",
          updated_at: "2021-01-29 11:45:14",
        },
        {
          id: "1",
          title: "Homepage",
          slug: "homepage",
          author: "We Are Innov",
          created_at: "2021-01-29 11:36:14",
          updated_at: "2021-01-29 11:36:14",
        },
      ],
    };
  },
  mutations: {
    addPage(state, item) {
      state.pages.unshift(item);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getPages(state) {
      return state.pages;
    },
    pageCount(state) {
      return state.pages.length;
    },
  },
});
