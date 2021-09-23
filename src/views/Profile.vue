<template>
 
    

    

    <main class="app-content">
      <div class="app-page">
        <div>
          <div class="page-title">
            <h3>Профиль</h3>
          </div>




          <form class="form" @submit.prevent="submitHandler">
            <div class="input-field">
              <input v-model="name" id="description" type="text"     :class="{invalid: $v.name.$dirty && !$v.name.required}"/>
              <label for="description">Имя</label>
              <small class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
      >Введите Имя</small>
            </div>

            <div class="switch">
              <label>
                English
                <input type="checkbox">
                <span class="lever"></span>
                Русский
              </label>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Обновить
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </main>

   
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {required} from 'vuelidate/lib/validators'
export default {
  data: ()=>({
    name: ''
  }),
   validations:{
    name:{required}    
  },  
  mounted(){
    this.name = this.info.name
    setTimeout(()=>{
      M.updateTextFields()
    })
    
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    ...mapActions(['updateInfo']),
     async submitHandler(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      
      try {        
        await this.updateInfo({
          name: this.name
        })
      } catch (error) { console.log(error);}            
    }
  }
}
</script>

<style scoped>
.switch{
  margin-bottom: 2rem;
}
</style>
