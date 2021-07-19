<template>
  <div class="row">
    <div id="topbar" class="container-fluid col-12">
        <div class="row d-flex flex-row full-height">
            <div id="menu" class="col-11">
                <a>
                    <i class="fas fa-fw fa-home"></i>
                    <span>Ver site</span>               
                </a>
            </div>
            <div id="user-menu" class="col-1 full-height">
                <a>
                    <i class="fas fa-fw fa-user"></i>
                    <span>Olá, user</span>               
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  methods: {},
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
