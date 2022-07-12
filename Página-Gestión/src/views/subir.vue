<template>
  <div id="app">
        {{analiza()}}
        <div v-if="this.acces">
          <h1>Link Valido tiene permitido subir archivos</h1>
          <button type="button" class="btn btn-primary" v-on:click="cicloTerminado()">SUBIR</button>
        </div>
        <div v-else>
          <h1>Lamentablemente el id proporcionado no es valido, o la fecha a caducado</h1>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default{
  data:function(){
    return{
        titulo:'Generador de links de invitacion, con tiempo de expiracion en dias',
        links:[],
        exist:[],
        id:'',
        acces:false,
        form:{
          'id':'',
          'date':''

        }
    }
  },
    
    mounted:function(){
        let direccion = "http://localhost:3001/users/GetLinks";
        axios.get(direccion).then( data =>{
            this.links = data.data;
            
            for (let i in this.links){
              this.exist.push(this.links[i].id);
            }
        
        });
        
  },
      methods:{
        analiza(){
          let date = new Date();
          console.log(date.toLocaleDateString());
          this.links.forEach(element => {
            const expira = new Date(element.expirationDate)
            if(element.id==this.$route.params.id && expira.getTime() >= date.getTime() ){
              this.acces=true;
            }
          });

        },
        cicloTerminado(){

        this.$confirm("¿Seguro que desea subir la información seleccionada?, considere que al aceptar, este link dejara de funcionar, gracias.", "","warning",{confirmButtonText:"Si",cancelButtonText:"Cancelar"}).then(() => {
          axios.delete(`http://localhost:3001/users/link/${this.$route.params.id}`);
          this.acces=false;
          location.reload();
          this.analiza();
                    });

        }
      }

  

}
</script>