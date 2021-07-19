<template>
  <div class="col-12 d-flex">
    Editar página
    <div class="col-4 d-flex">
      {{ page.title }}
    </div>
    <div class="col-8 d-flex">
      {{ page.created_at }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
};
</script>
