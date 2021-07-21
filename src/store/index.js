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
      users: [
        {
          id: 1,
          username: "weareinnov",
          name: "We Are Innov",
          email: "silvia.baptista@weareinnov.pt",
          profile: "Administrador"
        },
        {
          id: 2,
          username: "user_1",
          name: "Utilizador 1",
          email: "user_1@email.com",
          profile: "Editor"
        },
        {
          id: 3,
          username: "user_2",
          name: "Utilizador 2",
          email: "user_2@email.com",
          profile: "Autor"
        },
        {
          id: 4,
          username: "user_4",
          name: "Utilizador 4",
          email: "user_4@email.com",
          profile: "Subscritor"
        },
        {
          id: 5,
          username: "user_5",
          name: "Utilizador 5",
          email: "user_5@email.com",
          profile: "Subscritor"
        }
      ]
    };
  },
  mutations: {
    addPage(state, item) {
      state.pages.unshift(item);
    },
    addUser(state, item) {
      state.users.unshift(item);
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
    getUSers(state) {
      return state.users;
    },
    usersCount(state) {
      return state.users.length;
    },
  },
});
