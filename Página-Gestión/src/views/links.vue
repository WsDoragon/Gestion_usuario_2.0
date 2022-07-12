<template>
  <div id="app">
        <h3>Ingrese fecha de caducidad del enlace</h3>
        <input type="date" v-model= "form.date">
        <br><br>
        <input type="button" value="Generar enlace" v-on:click="generarLink">
        <ul title="links generados">
            <li v-for="link in links" :key="link.id">{{`http://localhost:8080/subir/${link.id}`}}, {{link.expirationDate.toString().substring(0,10)}}</li>
        </ul>
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
        form:{
          'id':'',
          'date':''

        }
    }
  },
  methods:{
        generarLink() {
          if(this.form.date!==''){
            let id=parseInt(Math.random() * (100000 - 0 + 1)).toString();
            while(this.exist.includes(id)){
                id=parseInt(Math.random() * (100000 - 0 + 1)).toString();
            }
            this.form.id= id
            this.exist.push(id)
            

             axios.post("http://localhost:3001/users/nuevoLink", this.form)
            .then(data =>{
                //this.makeToast("Hecho","Usuario creado","info");
                console.log(data);
                //this.sleep(2000).then(() => { this.$router.push("/gerentePage"); });


            }).catch( e =>{
                console.log(e);
                 //this.makeToast("Error","Este usuario ya se encuentra registrado","error");
            })
            this.links.push({
                            "id": this.form.id,
                            "expirationDate": this.form.date
                            })
            //window.location.reload();
          }
          else{
            alert('no se ha seleccionado fecha')
          }

        }
    },
    
    mounted:function(){
        let direccion = "http://localhost:3001/users/GetLinks";
        axios.get(direccion).then( data =>{
            console.log(data.data);
            this.links = data.data;
        });
        for (let i in this.links){
          this.exist.push(i.id)
        }
  }
}
</script>
