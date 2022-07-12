<template>
    <div>
        <Header />
        <br><br>
            <div v-if="this.roles.includes('Gerente')" class="container">

                <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-9">
                          <input type="text" class="form-control" name="Nombre" id="Nombre" v-model="form.Nombre">
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



                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                      <label> </label>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div>
                    
                
                    
                </form>

                


            </div>
        <!-- <Footer /> -->

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
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
    components:{
        Header,
        //Footer
    },
    methods:{
        sleep(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        guardar(){
            this.form.roles = this.rolSelect;
            axios.post("http://localhost:3001/users/create",this.form)
            .then(data =>{
                this.makeToast("Hecho","Usuario creado","info");
                console.log(data);
                this.sleep(2000).then(() => { this.$router.push("/gerentePage"); });
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Este usuario ya se encuentra registrado","error");
            })
        },
        salir(){
            this.$router.push("/gerentePage");
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
        }
        
    },
        mounted:function(){
            axios.get(`http://localhost:3001/users/getroles`).
            then(data => {
                for (let i of data.data){
                    this.rolOptions.push({text: `${i.name}`, value: i.id});
                }
        })
    }
}
</script>
<style scoped>
.btn{
  margin-left :5px
}
.left{
    text-align:  left;
}
</style>