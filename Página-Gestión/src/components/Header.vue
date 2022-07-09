<template>

<div>
      <b-navbar toggleable="lg" type="light" style="background-color: #000000
;">
          <b-navbar-brand href="http://localhost:8080/gerentePage">
            
            <img :src="mySVG" width="180"/>
          </b-navbar-brand>
          <label class="razor">Usuarios/{{$route.name}}</label>
          <user/>
      </b-navbar>
        <br><br>
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

</style>