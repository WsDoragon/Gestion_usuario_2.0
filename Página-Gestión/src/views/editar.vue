<template>
        <div>
          <Header />
          <br><br>
            <div v-if="this.roles.includes('Gerente')" class="container">
                <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-9">
                          <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.Nombre">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Apellido</label>
                       <div class="col-sm-9">
                          <input type="text" class="form-control" name="Apellido" id="Apellido" v-model="form.Apellido">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Correo</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" name="correo" id="correo" v-model="form.correo">
                            </div>
                        </div>
                    </div>
                    <div class="form-group left row">
                          <div class="col">
                              <label for="" class="control-label col-sm-2">Contraseña</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="contraseña" id="contraseña" v-model="form.contraseña">
                              </div>
                          </div>
                         <div class="col">
                            <label for="" class="control-label col-sm-7">RUT (sin puntos, con guión)</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="rut" id="rut" v-model="form.rut">
                            </div>
                          </div>
                         
                    </div>
                    <br>Roles:<br>
                    <b-form-checkbox-group
                    v-model="rolSelect"
                    :options="rolOptions"
                ></b-form-checkbox-group>
                <br><br>


                    <div class="form-group flex pad">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        rolSelect : [],
          rolOptions:[],
          roles: JSON.parse(sessionStorage.getItem("rol")),
          form:{
              "Nombre" : "",
              "Apellido" :"",
              "rut" : "",
              "correo" :"",
              "contraseña" :"",
              "roles" : []
        }
    }
  },
  methods:{
      sleep(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
      },
      editar(){
        this.form.roles = this.rolSelect;
          axios.put(`http://localhost:3001/users/"${this.form.lastRut}"`,this.form)
          .then( data =>{
              this.makeToast("Hecho","Usuario guardado","info");
              console.log(data);
              this.sleep(2000).then(() => { this.$router.push("/gerentePage"); });
          })
      },
      makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            toaster: "b-toaster-top-center",
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        },
      salir(){
        this.$router.push("/gerentePage");
      }
      
  },
  mounted:function(){
      this.form.lastRut = this.$route.params.id;
      axios.get(`http://localhost:3001/users/u/"${this.form.lastRut}"`)
      .then( datos => {
        
        this.form.Nombre = datos.data[0].nombre;
        this.form.Apellido = datos.data[0].apellido;
        this.form.rut = datos.data[0].rut;
        this.form.correo = datos.data[0].correo;
        this.form.contraseña = datos.data[0].contraseña;
        console.log(this.form);

    })
    axios.get(`http://localhost:3001/users/getroles`).
          then(data => {
              for (let i of data.data){
                this.rolOptions.push({text: `${i.name}`, value: i.id});
              }
        })
    this.form.rut = this.$route.params.id;
      axios.get(`http://localhost:3001/users/getuserrol/"${this.form.rut}"`)
      .then( datos => {
        for (let j of datos.data){
        this.rolSelect.push(j.id_rol);
      }
    }
    )
    
  }  
}
</script>
<style scoped>
.btn{
  margin-left :5px
}
 .left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 50px;;
 }
 .pad{
  padding:10px;
  padding-block-end: 10px;
 }

 
</style>