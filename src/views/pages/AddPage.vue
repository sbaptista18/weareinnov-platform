<template>
  <div class="page">
    <h1>Adicionar nova página</h1>
    <form @submit.prevent="addPage">
      <input
        type="text"
        placeholder="Nova página"
        v-model="page"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "",
      id: 0
    };
  },
  methods: {
    addPage: function() {
      const { id, page } = this;
      this.$store.commit("addPage", { id, page });
      this.id++;
      this.page = "";
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
</style>