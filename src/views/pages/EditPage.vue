<template>
  <div class="col-12 d-flex">
    Página: {{ page.title }}
    Slug: {{ page.slug }}
  </div>
</template>

<script>
import store from '../../store/index'

export default {
  data(){
    return {
      pageID: this.$route.params.id
    }
  },
  computed: {
    page(){
      return store.state.pages.find(
        page => page.id === this.pageID
      )
    }
  }
}
</script>
