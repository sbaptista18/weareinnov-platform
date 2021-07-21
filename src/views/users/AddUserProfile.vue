<template>
  <div class="row">
    <div class="col-12">
      <h1>Adicionar perfil de utilizador</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input v-model="name" placeholder="Insira aqui o nome do perfil de utilizador">
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
      id: Number(this.$store.state.userProfiles[0].id) + 1,
      name: '',
    };
  },
  methods: {
    addPage: function() {
      const { id, name } = this;
      this.id = id;
      this.name = name;

      this.$store.commit("addUserProfile", { id, name });

      setTimeout(() => {
        this.$router.push('/user-profiles');
      }, 100);
    }
  },
  computed: {
    userProfiles: function() {
      return this.$store.state.userProfiles;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
</style>