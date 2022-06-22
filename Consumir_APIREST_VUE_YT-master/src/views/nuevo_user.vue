<template>
    <div>
        <Header />
            <div class="container">
                

                <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="Nombre" id="Nombre" v-model="form.Nombre">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Apellido</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="Apellido" id="Apellido" v-model="form.Apellido">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Correo</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="correo" id="correo" v-model="form.correo">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">rut</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="RUT" id="RUT" v-model="form.RUT">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                         <div class="col">
                              <label for="" class="control-label col-sm-2">contraseña</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="contraseña" id="contraseña" v-model="form.contraseña">
                              </div>
                        </div>
                    </div>


                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>


            </div>
        <!-- <Footer /> -->

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
            form:{
                "Nombre" : "",
                "Apellido":"",
                "RUT" : "",
                "correo":"",
                "contraseña":""
            }
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        guardar(){
            this.form.token = localStorage.getItem("token");
            axios.post("http://localhost:3001/create",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Usuario creado","success");
                this.$router.push("/gerentP");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/gerentP");
        },
        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>