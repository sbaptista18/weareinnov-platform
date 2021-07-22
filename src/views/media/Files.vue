<template>
  <div class="pages">
    <div class="row">
      <div class="col-6">
        <h1>Biblioteca de ficheiros</h1>
      </div>
      <div class="col-6 d-flex flex-row-reverse align-items-center">
        <button><router-link to="/add-file">Adicionar</router-link></button>
      </div>
    </div>
    <div class="row">
      <table class="table table-hover table-bordered" id="files-list">
        <thead>
          <tr>
            <th style="width: 100px;">Imagem</th>
            <th style="width: 100px;">Nome</th>
            <th>Título</th>
            <th>Data de upload</th>
            <th>Tipo de ficheiro</th>
            <th>Tamanho (KB)</th>
            <th>Dimensões</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in files" :key="file.id">
            <td style="width: 100px;"><img style="width: 100%;" :src="file.image" alt="" srcset=""></td>
            <td style="width: 100px;">{{ file.file_name }}</td>
            <td>{{ file.title }}</td>
            <td>{{ file.uploaded_on }}</td>
            <td>{{ file.file_type }}</td>
            <td>{{ file.file_size }}</td>
            <td>{{ file.dimensions }}</td>
            <td>
              <button @click="deleteFile(file.id)" class="delete">Apagar</button>
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
    $("#files-list").DataTable({
      order: [[2, "desc"]],
      language: {
        url: '/datatables_pt-PT.json'
      }
    });

    $("#files-list tbody").on("click", ".delete", function() {
      var table = $("#files-list").DataTable();
      table
        .row($(this).parents("tr"))
        .remove()
        .draw();
    });
  },
  methods: {
    deleteFile(file) {
        this.$store.commit('deleteFile', file);
    }
  },
  computed: {
    files() {
      return this.$store.getters.getFiles;
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
