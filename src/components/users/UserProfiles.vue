<template>
  <div class="pages">
    <div class="row">
      <div class="col-6">
        <h1>Perfis de utilizador</h1>
      </div>
      <div class="col-6 d-flex flex-row-reverse align-items-center">
        <button><router-link to="/add-user-profile">Adicionar perfil</router-link></button>
      </div>
    </div>
    <div class="row">
      <table class="table table-hover table-bordered" id="user-profiles">
        <thead>
          <tr>
            <th>Perfil</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profile in profiles" :key="profile.id">
            <td>{{ profile.name }}</td>
            <td>
              <button class="edit">
                <router-link :to="{ path: '/edit-user-profile', query: { id: profile.id } }"
                  >Editar</router-link
                ></button
              ><button class="delete">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Profiles from '../../../static/user_profiles.json'

export default {
  mounted() {
    $("#user-profiles").DataTable({
      order: [[0, "asc"]],
      language: {
        url: '/datatables_pt-PT.json'
      }
    });

    $("#user-profiles tbody").on("click", ".delete", function() {
      var table = $("#user-profiles").DataTable();
      table
        .row($(this).parents("tr"))
        .remove()
        .draw();
    });
  },
  data() {
    return {
      profiles: Profiles
    };
  },
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
