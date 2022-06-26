<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo Usuario</button>
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
export default {
    name:"Dashboard",
    data(){
        return {
            Listapusuarios:null,

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
                axios.delete(`http://localhost:3001/users/u/"${id}"`);
                location.reload();
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
    .izquierda{
        text-align: left;
    }
</style>