<template>
    <div>
        <Header/>

            <div class="container izquierda">

                
                <br><br>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">RUT</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">ROL</th>
                        <th scope="col">CORREO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in Listapusuarios" :key="usuario.rut">
                        <th scope="row">{{ usuario.rut}}</th>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.apellido }}</td>
                        <td>{{ usuario.rol }}</td>
                        <td>{{ usuario.correo }}</td>
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
                this.$router.push('/nuevo');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:3001/all";
        axios.post(direccion).then( data =>{
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