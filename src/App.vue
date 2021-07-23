<template>
  <topbar></topbar>
  <div id="content" class="row">
    <sidebar></sidebar>
    <content-wrapper></content-wrapper>
  </div>
</template>

<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import Topbar from "./components/includes/Topbar";
import Sidebar from "./components/includes/Sidebar";
import Content from "./components/includes/Content";

export default {
  components: {
    topbar: Topbar,
    sidebar: Sidebar,
    contentWrapper: Content,
  },
  created(){
    this.$store.dispatch('tryAutoLogin')
  }
};
</script>

<style>
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#content {
  height: 100%;
}

.full-height {
  height: 100%;
}
</style>
