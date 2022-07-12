<template>
    <div>
        
        <Header/>
        <nav v-if="this.roles.includes('generico') || this.roles.length == 0" class="navbar navbar-expand-lg navbar-light" style="background-color: #F5F5F5;">
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

    <label v-if="this.a['mostrar1']==true && this.roles.includes('generico') || this.roles.length == 0">
    <br><br>
        Inserte aquí el home de usuario generico
    </label>

    <label v-if="this.a['mostrar2']==true">
    <br><br>
        Coloque aquí funcionalidades de usuario generico
    </label>

        

        <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    name:"Dashboard",
    data(){
        return {
            Listapusuarios:null,
            pagina:1,
            roles: JSON.parse(sessionStorage.getItem("rol")),
            a:{"mostrar1" : true, "mostrar2":false}
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        sleep(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
        },
            editar(id){
                this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
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
        this.sleep(5000);
    }
}
</script>
<style  scoped>
    .centro{
            text-align: center;
            
        }

    .btnbarra {
    color: #000;
    background-color: #9EA3E6;
    font-weight: bold;
    }

    .izquierda{
        text-align: left;
        
    }

    #nav nav {
    display: inline-block;
    }
</style>