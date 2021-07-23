<template>
  <div id="content-wrapper" class="col-lg-10 col-sm-9 col-xs-9 full-height" :class="{'col-lg-12 col-sm-12 col-xs-12': !nav}">
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      nav: true
    };
  },
  watch: {
    '$route' () {
      if (this.$route.path === '/signin' || this.$route.path === '/signup') {
        this.nav = false
      } else {
        this.nav = true
      }  
    }
  }
};
</script>

<style scoped>
#content-wrapper {
  background-color: #c2fbff;
}

#content-wrapper.col-lg-11 {
  width: 96.666667%;
}
</style>
