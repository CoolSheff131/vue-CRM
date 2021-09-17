<template>  
    <component :is="layout"/>          
</template>

<script>
import EmptyLayout from '/src/layouts/EmptyLayout'
import MainLayout from '/src/layouts/MainLayout'
export default {
  computed: {
    layout(){      
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
