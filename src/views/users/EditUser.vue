<template>
  <div class="col-12 d-flex">
    Editar utilizador
    <div class="col-4 d-flex">
      {{ user.username }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>
