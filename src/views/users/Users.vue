<template>
  <div class="pages">
    <div class="row">
      <div class="col-6">
        <h1>Utilizadores</h1>
      </div>
      <div class="col-6 d-flex flex-row-reverse align-items-center">
        <button><router-link to="/add-user">Adicionar utilizador</router-link></button>
      </div>
    </div>
    <div class="row">
      <table class="table table-hover table-bordered" id="users-list">
        <thead>
          <tr>
            <th>Nome de utilizador</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Perfil</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.profile }}</td>
            <td>
              <button class="edit">
                <router-link :to="{ name: 'EditUser', params: { id: user.id } }"
                  >Editar</router-link
                ></button
              ><button @click="deleteUser(user.id)" class="delete">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    $("#users-list").DataTable({
      order: [[0, "asc"]],
      language: {
        url: '/datatables_pt-PT.json'
      }
    });

    $("#users-list tbody").on("click", ".delete", function() {
      var table = $("#users-list").DataTable();
      table
        .row($(this).parents("tr"))
        .remove()
        .draw();
    });
  },
  methods: {
    deleteUser(user) {
        this.$store.commit('deleteUser', user);
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: left;
}

button {
  height: 40px;
}
</style>
