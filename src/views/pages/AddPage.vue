<template>
  <div class="row">
    <div class="col-12">
      <h1>Adicionar página</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input v-model="title" placeholder="Insira aqui o nome da página">
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <textarea v-model="content" name="" id="" cols="30" rows="10" placeholder="Insira aqui o conteúdo da página"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <button @click="addPage" class="btn btn-success">Guardar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: String(Number(this.$store.state.pages[0].id) + 1),
      title: '',
      slug: '',
      content: '',
      author: '',
      created_at: '',
      updated_at: ''
    };
  },
  methods: {
    addPage: function() {
      const { id, title, slug, content, author, created_at, updated_at } = this;
      this.id = id;
      this.title = title;
      this.content = content;
      this.$store.commit("addPage", { id, title, slug, content, author, created_at, updated_at });

      setTimeout(() => {
        this.$router.push('/pages');
      }, 100);
    }
  },
  computed: {
    pages: function() { // computed property will be updated when async call resolves
      return this.$store.state.pages;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
</style>