import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      pages: [
        {
          id: "3",
          title: "Serviços",
          slug: "servicos",
          content: 'conteúdo da pagina "Serviços"',
          author: "We Are Innov",
          created_at: "31/01/2021 16:26:45",
          updated_at: "31/01/2021 16:26:45",
        },
        {
          id: "2",
          title: "Sobre Nós",
          slug: "sobre-nos",
          content: 'conteúdo da pagina "Sobre Nós"',
          author: "We Are Innov",
          created_at: "29/01/2021 11:45:14",
          updated_at: "29/01/2021 11:45:14",
        },
        {
          id: "1",
          title: "Homepage",
          slug: "homepage",
          content: 'conteúdo da pagina "Homepage"',
          author: "We Are Innov",
          created_at: "29/01/2021 11:36:14",
          updated_at: "29/01/2021 11:36:14",
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
