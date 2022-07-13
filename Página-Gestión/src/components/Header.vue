<template>

<div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #000000
;">       
        <th>
          <img :src="mySVG" width="150"/>
          <img src="@/assets/FCIB.png" id="icon" alt="User Icon" width="150"/>
            
        </th>
        
          
        <th v-if="this.roles.includes('Gerente')"> 
          <b-navbar-brand href="http://localhost:8080/gerentePage">
            Gerente
          </b-navbar-brand>
        </th>

        <th v-if="this.roles.includes('Analista')"> 
           <b-navbar-brand href="http://localhost:8080/analistaPage">
            Analista
          </b-navbar-brand>
        </th>

        <th v-if="this.roles.includes('Administrador')"> 
           <b-navbar-brand href="http://localhost:8080/administradorPage">
            Administrador
          </b-navbar-brand>
        </th>

        <th v-if="this.roles.includes('denegado')">
          <b-navbar-brand>
          Acceso denegado
          </b-navbar-brand>
        </th>

        <th v-if="this.roles.includes('generico')">
          <b-navbar-brand>
          Usuario Generico
          </b-navbar-brand>
        </th>


        <th> 
           <b-navbar-brand>
            <div class="derecha"><button class="btn btnbarra" v-on:click="cerrar()">Cerrar sesión</button></div>
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
      mySVG: require('../assets/inniving_logo.svg'),
      roles: JSON.parse(sessionStorage.getItem("rol")),
      a: []
    }
  },
   methods:{
            cerrar(){
                
                this.$confirm("¿Seguro que desea cerrar sesión?", "","warning",{confirmButtonText:"Si",cancelButtonText:"Cancelar"}).then(() => {
                    sessionStorage.clear();
                    this.$router.push('/')
                });
                }
   },
  mounted:function(){
    if(this.roles == null){
      this.roles="denegado"; 
      this.a.push("denegado")
      sessionStorage.setItem("rol", JSON.stringify(this.a));
    }

    if(this.roles.length == 0){
      this.roles="generico"; 
      this.a.push("generico")
      sessionStorage.setItem("rol", JSON.stringify(this.a));
    }

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

    .btnbarra {
    color: #000;
    background-color: #FFA859;
    font-weight: bold;
    }

</style>