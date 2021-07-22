import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      pages: [
        {
          id: 3,
          title: "Serviços",
          slug: "servicos",
          content: 'conteúdo da pagina "Serviços"',
          author: "We Are Innov",
          created_at: "31/01/2021 16:26:45",
          updated_at: "31/01/2021 16:26:45",
        },
        {
          id: 2,
          title: "Sobre Nós",
          slug: "sobre-nos",
          content: 'conteúdo da pagina "Sobre Nós"',
          author: "We Are Innov",
          created_at: "29/01/2021 11:45:14",
          updated_at: "29/01/2021 11:45:14",
        },
        {
          id: 1,
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
          id: 5,
          username: "user_5",
          name: "Utilizador 5",
          email: "user_5@email.com",
          profile: "Subscritor"
        },
        {
          id: 4,
          username: "user_4",
          name: "Utilizador 4",
          email: "user_4@email.com",
          profile: "Subscritor"
        },
        {
          id: 3,
          username: "user_2",
          name: "Utilizador 2",
          email: "user_2@email.com",
          profile: "Autor"
        },
        {
          id: 2,
          username: "user_1",
          name: "Utilizador 1",
          email: "user_1@email.com",
          profile: "Editor"
        },
        {
          id: 1,
          username: "weareinnov",
          name: "We Are Innov",
          email: "silvia.baptista@weareinnov.pt",
          profile: "Administrador"
        }
      ],
      userProfiles: [
        {
          id: 4,
          name: "Subscritor",
          slug: "subscritor"
        },
        {
          id: 3,
          name: "Editor",
          slug: "editor"
        },
        {
          id: 2,
          name: "Autor",
          slug: "autor"
        },
        {
          id: 1,
          name: "Administrador",
          slug: "administrador"
        }
      ],
      mediaFiles: [
        {
          id: 2,
          file_name: "41457989_10156479403167976_1475897560592809984_n.jpg",
          uploaded_on: '04-06-2021 às 18:03:44',
          file_type: 'image/jpeg',
          file_size: 76,
          title: 'Imagem 2',
          image: ''
        },
        {
          id: 1,
          file_name: "IMG_20210327_162350-scaled.jpg",
          uploaded_on: '04-06-2021 às 18:03:44',
          file_type: 'image/jpeg',
          file_size: 193,
          title: 'Imagem 1',
          image: ''
        }
      ]
    };
  },
  mutations: {
    //files mutations
    addFile(state, item) {
      state.mediaFiles.unshift(item);
    },
    deleteFile(state, item){
      var index = state.mediaFiles.findIndex(file => file.id == item);
      state.mediaFiles.splice(index, 1);
    },
    //pages mutations
    addPage(state, item) {
      state.pages.unshift(item);
    },
    deletePage(state, item){
      var index = state.pages.findIndex(page => page.id == item);
      state.pages.splice(index, 1);
    },
    //users mutations
    addUser(state, item) {
      state.users.unshift(item);
    },
    deleteUser(state, item){
      var index = state.users.findIndex(i => i.id == item);
      state.users.splice(index, 1);
    },
    //user profiles mutations
    addUserProfile(state, item) {
      state.userProfiles.unshift(item);
    },
    deleteUserProfile(state, item){
      var index = state.userProfiles.findIndex(i => i.id == item);
      state.userProfiles.splice(index, 1);
    }
  },
  actions: {},
  modules: {},
  getters: {
    //pages getters
    getFiles(state) {
      return state.mediaFiles;
    },
    filesCount(state) {
      return state.mediaFiles.length;
    },
    //pages getters
    getPages(state) {
      return state.pages;
    },
    pageCount(state) {
      return state.pages.length;
    },
    //users getters
    getUsers(state) {
      return state.users;
    },
    usersCount(state) {
      return state.users.length;
    },
    //user profiles getters
    getUserProfiles(state) {
      return state.userProfiles;
    },
    userProfilesCount(state) {
      return state.userProfiles.length;
    },
  },
});
