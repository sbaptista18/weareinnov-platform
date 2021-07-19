<template>
  <div class="col-12 d-flex">
    Editar perfil de utilizador
    <div class="col-4 d-flex">
      {{ profile.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile"],
};
</script>
