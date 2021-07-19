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
                <router-link :to="{ path: '/edit-page', query: { id: page.id } }"
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
  data() {
    return {
      pages: [
        {
          id: "3",
          title: "Serviços",
          author: "We Are Innov",
          created_at: "31-01-2021 16:26:45",
          updated_at: "31-01-202 16:26:45",
        },
        {
          id: "2",
          title: "Sobre Nós",
          author: "We Are Innov",
          created_at: "29-01-2021 11:45:14",
          updated_at: "29-01-2021 11:45:14",
        },
        {
          id: "1",
          title: "Homepage",
          author: "We Are Innov",
          created_at: "29-01-2021 11:36:14",
          updated_at: "29-01-2021 11:36:14",
        },
      ],
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
