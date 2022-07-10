<template>
    <div>
        <Header/>

        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #F5F5F5;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">


            <li class="nav-item">
              <a class="nav-link" href="#">
                <button class="btn btnbarra" v-on:click="texto('mostrar1')">Home</button>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <button class="btn btnbarra" v-on:click="texto('mostrar2')">Opción 2</button>
              </a>
            </li>
            

        </ul>  
        </div>
    </nav>

    
    <label v-if="this.a['mostrar2']==true">
    <br><br>
        Coloque aquí funcionalidades
    </label>

<br><br>
            
            <div  v-if="this.a['mostrar1']==true" class="container izquierda">
            
                <button class="btn btn-primary" v-on:click="nuevo()" >Añadir nuevo usuario</button>
                <br><br>

                <table class="table table-hover">
                <thead>
                    <tr>

                        <th scope="col"></th>
                        <th scope="col">RUT</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">CORREO</th>
                        <th scope="col">ROLES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in Listapusuarios" :key="usuario.rut">
                        <td><button type="button" class="btn btn-primary" v-on:click="editar(usuario.rut)">Editar</button> <button type="button" class="btn btn-danger margen" v-on:click="eliminar(usuario.rut)">Eliminar</button></td>
                        <th scope="row">{{ usuario.rut}}</th>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.apellido }}</td>
                        <td>{{ usuario.correo }}</td>
                        <td>{{ usuario.roles }}</td>
                        
                    </tr>
            
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

export default {
    name:"Dashboard",
    data(){
        return {
            Listapusuarios:null,
            mostrar:false,
            mostrar2:false,
            a:{"mostrar1" : false, "mostrar2":false},

            pagina:1
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
            editar(id){
                this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/newUser');
            },
            eliminar(id){
                this.$confirm("¿Seguro que desea eliminar a este usuario?", "","warning",{confirmButtonText:"Si",cancelButtonText:"Cancelar"}).then(() => {
                        console.log(id);
                        axios.delete(`http://localhost:3001/users/u/"${id}"`);
                        location.reload();
                    });
            },
            texto(b){
                if(this.a[b] == true){
                    this.a[b] = false;
                }
                else{
                    for(let i in this.a){
                        this.a[i]=false;
                    }
                    this.a[b] = true;
                }
            }
            
    },
    mounted:function(){
        let direccion = "http://localhost:3001/users/all";
        axios.get(direccion).then( data =>{
            console.log(data);
            this.Listapusuarios = data.data;
        });
    }
}
</script>
<style  scoped>
    .btnbarra {
    color: #000;
    background-color: #FAD786;
    font-weight: bold;
    }
    .izquierda{
        text-align: left;
    }
    .derecha{ 
        text-align: right;
    }
</style>