<template>
        <div>
          <Header />
            <div class="container">
                    
                        <b-form-checkbox-group
                            v-model="selected"
                            :options="options"
                        ></b-form-checkbox-group>
                        <p> IDs seleccionadas: {{selected}}</p>
                    
            </div>

            <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
            </div> 
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
  name:"editRoles",
  components:{
    Header,
  },
  data:function(){
    return {
        selected: [],
        options: [],
        form:{
            "rut":"",
            "roles":[]
        }
    }
  },
  methods:{
      editar(){
        this.form.roles = this.selected;
        console.log(this.form);
          axios.post(`http://localhost:3001/users/changeRol`,this.form)
          .then( data =>{
              console.log(data);
          })
      },
      salir(){
        this.$router.push("/gerentePage");
      }
  },
  mounted:function(){
      this.form.rut = this.$route.params.id;
      axios.get(`http://localhost:3001/users/getuserrol/"${this.form.rut}"`)
      .then( datos => {
        for (let j of datos.data){
        this.selected.push(j.id_rol);
      }
    }
    )
    axios.get(`http://localhost:3001/users/getroles`).
    then(data => {
        for (let i of data.data){
            this.options.push({text: `${i.name}`, value: i.id});
        }
    })
    
  }  
}
</script>
<style scoped>
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>