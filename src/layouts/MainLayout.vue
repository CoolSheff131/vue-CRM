<template>
<div> 
  <Loader v-if="loading"/>
  <div class="app-main-layout" v-else>

    <Navbar @click="isOpen = !isOpen"/>

    <SideBar v-model="isOpen" :key="locale"/>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'Создать новую запись'">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
  </div>
</template>


<script>
import Navbar from '../components/app/Navbar.vue'
import SideBar from '../components/app/Sidebar.vue'
import messages from '@/utils/messages'
export default {
  name: 'main-layout',
  data: ()=> ({
    isOpen:true,
    loading: true
  }),
  async mounted(){
    if(!Object.keys(this.$store.getters.info).length){
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
  },
  components: {
    Navbar, SideBar
  },
  computed:{
    error(){
      return this.$store.getters.error
    },
    locale(){
      return this.$store.getters.info.locale
    }   
  },
  watch: {
    // locale(){

    // },
    error(fbError){
      console.log(fbError);
      this.$error(messages[fb.error.code] || 'Что-то пошло не так')
    }
  }
}
</script>
