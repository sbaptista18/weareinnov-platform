<template>
  <div class="painel">
    <img alt="logo" :src="logo">
    <WelcomeMsg msg="Bem vindo à Plataforma de Gestão de Conteúdos da We Are Innov"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/assets/logo-black.svg";
import WelcomeMsg from '@/views/WelcomeMsg.vue'

export default {
  data() {
    return {
      logo: Logo
    };
  },
  name: 'Painel',
  components: {
    WelcomeMsg
  }
}
</script>
