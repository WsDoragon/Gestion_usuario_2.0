<template>
    <div>
        <Denegado/>

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
                    <tr v-for="usuario in Listapusuarios" :key="usuario.rut_usuario">
                        <th scope="row">{{ usuario.rut_usuario}}</th>
                        <td>{{ usuario.nombre_usuario }}</td>
                        <td>{{ usuario.apellido_usuario }}</td>
                        <td>{{ usuario.rol_usuario }}</td>
                        <td>{{ usuario.correo_usuario }}</td>
                    </tr>
            
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>
<script>
import Denegado from '@/components/Denegado.vue';
import Footer from '@/components/Footer.vue';
//import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            Listapusuarios:null,
            pagina:1
        }
    },
    components:{
        Denegado,
        Footer
    },
    methods:{
            editar(id){
                this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
            }
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>