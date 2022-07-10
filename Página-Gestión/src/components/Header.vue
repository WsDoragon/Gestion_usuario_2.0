<template>

<div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #000000
;">       
        <th>
          <img :src="mySVG" width="180"/>
        </th>
          
        <th> 
          <b-navbar-brand href="http://localhost:8080/gerentePage">
            Gerente
          </b-navbar-brand>
        </th>

        <th> 
           <b-navbar-brand href="http://localhost:8080/analistaPage">
            Analista
          </b-navbar-brand>
        </th>

        <th> 
           <b-navbar-brand href="http://localhost:8080/administradorPage">
            Administrador
          </b-navbar-brand>
        </th>

        <th> 
           <b-navbar-brand>
            <div class="derecha"><button class="btn btn-warning" v-on:click="cerrar()">Cerrar sesión</button></div>
          </b-navbar-brand>
        </th>

          
          <user/>
      </b-navbar>
        
</div>
    
</template>


<script>
export default {
  
  name: 'App',
  data(){
    return {
      mySVG: require('../assets/inniving_logo.svg')
      
    }
  },
   methods:{
            cerrar(){
                
                this.$confirm("¿Seguro que desea cerrar sesión?", "","warning",{confirmButtonText:"Si",cancelButtonText:"Cancelar"}).then(() => {
                    this.$router.push('/')
                });
                }
   },
  mounted:function(){

  }
}

</script>

<style  scoped>
b-navbar-brand {
    
    height: 50px;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
}

.razor{
  font-family: 'raptor v3 Black';
  font-weight: bold;
  font-size:x-large;
  color: white;
}

th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}

.derecha{ 
        text-align: right;
    }

</style>