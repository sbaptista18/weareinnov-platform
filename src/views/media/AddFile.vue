<template>
  <div class="row">
    <div class="col-12">
      <h1>Adicionar ficheiro</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input type="text" v-model="title" placeholder="Insira o título da imagem">
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input type="file" @change="onFileChange">
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <button @click="saveImage" class="btn btn-success">Guardar</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      id: Number(this.$store.state.mediaFiles[0].id) + 1,
      file_name: String(),
      uploaded_on: Number(),
      file_type: String(),
      file_size: Number(),
      title: String(),
      image: String()
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);

      var date = new Date();
      var day = "0" + date.getDay();
      var month = "0" + date.getMonth();
      var year = date.getFullYear();
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var formattedTime = day.substr(-2) + '-' + month.substr(-2) + '-' + year + ' às ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      var imgTitle = this.title == '' ? file.name.split('.')[0] : this.title;

      this.file_name = file.name;
      this.title = imgTitle;
      this.file_size = file.size;
      this.file_type = file.type;
      this.uploaded_on = formattedTime;      
    },
    saveImage: function(){
      this.$store.commit("addFile", this.$data);
      // this.base64ImageToBlob(this.image);

      setTimeout(() => {
        this.$router.push('/files');
      }, 100);
    },
    // base64ImageToBlob: function (str) {
    //   // extract content type and base64 payload from original string
    //   var pos = str.indexOf(';base64,');
    //   var type = str.substring(5, pos);
    //   var b64 = str.substr(pos + 8);

    //   // decode base64
    //   var imageContent = atob(b64);

    //   // create an ArrayBuffer and a view (as unsigned 8-bit)
    //   var buffer = new ArrayBuffer(imageContent.length);
    //   var view = new Uint8Array(buffer);

    //   // fill the view, using the decoded base64
    //   for(var n = 0; n < imageContent.length; n++) {
    //     view[n] = imageContent.charCodeAt(n);
    //   }

    //   // convert ArrayBuffer to Blob
    //   var blob = new Blob([buffer], { type: type });

    //   return blob;
    // }
  },
  computed: {
    mediaFiles: function() {
      return this.$store.state.mediaFiles;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
</style>