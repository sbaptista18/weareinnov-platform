<template>
  <div class="pages">
    <div class="row">
      <div class="col-6">
        <h1>Páginas</h1>
      </div>
      <div class="col-6 d-flex flex-row-reverse align-items-center">
        <button><router-link to="/add-page">Adicionar página</router-link></button>
      </div>
    </div>
    <div class="row">
      <table class="table table-hover table-bordered" id="pages-list">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="page in pages" :key="page.id">
            <td>{{ page.title }}</td>
            <td>{{ page.author }}</td>
            <td>Publicado em: {{ page.created_at }}</td>
            <td>
              <button class="edit">
                <router-link :to="{ name: 'EditPage', params: {id: page.id} }"
                  >Editar</router-link
                ></button
              ><button @click="deletePage(page.id)" class="delete">Apagar</button>
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
    $("#pages-list").DataTable({
      order: [[2, "desc"]],
      language: {
        url: '/datatables_pt-PT.json'
      }
    });

    $("#pages-list tbody").on("click", ".delete", function() {
      var table = $("#pages-list").DataTable();
      table
        .row($(this).parents("tr"))
        .remove()
        .draw();
    });
  },
  methods: {
    deletePage(page) {
        this.$store.commit('deletePage', page);
    }
  },
  computed: {
    pages() {
      return this.$store.getters.getPages;
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
