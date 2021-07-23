<template>
  <div class="row">
    <div id="topbar" class="container-fluid col-12">
        <div class="row d-flex flex-row full-height">
            <div id="menu" class="col-9">
              <div class="col-2">
                <router-link to="/" v-if="auth">
                    <i class="fas fa-fw fa-home"></i>
                    <span>Ver site</span>               
                </router-link>
              </div>
              <div class="col-2" v-if="!auth">
                <router-link to="/signin">
                    <i class="fas fa-fw fa-home"></i>
                    <span>Login</span>               
                </router-link>
              </div>
              <div class="col-2" v-if="!auth">
                <router-link to="/signup">
                    <i class="fas fa-fw fa-home"></i>
                    <span>Registar</span>               
                </router-link>
              </div>
              <div class="col-2" v-if="auth">
                <button @click="onLogout">Logout</button>
              </div>
            </div>
            <div id="user-menu" class="col-3 full-height" v-if="auth">
                <a>
                    <i class="fas fa-fw fa-user"></i>
                    <span>Olá, {{ name }}</span>               
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created(){
    this.$store.dispatch('fetchUser')
  },
  computed: {
    name(){
      return !this.$store.getters.user ? false : this.$store.getters.user.name
    },
    auth(){
      return this.$store.getters.isAuth
    }
  },
  methods: {
    onLogout: function(){
      this.$store.dispatch('logout')
    }
  }
};
</script>

<style scoped>
#topbar {
  background-color: #262626;
  height: 35px;
  color: #fff;
  text-align: left;
}

#menu {
    display: flex;
    align-items: center;
}

#topbar a {
  color: #fff;
  text-align: left;
}

#user-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>
