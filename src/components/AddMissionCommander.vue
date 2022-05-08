<template>
    <div id="form" v-if="!submitted">
        <form>
        <br><label class="create_label" for="name">Nombre</label>
        <input class="create_input"  type="text" id="name" v-model="newMissionCommander.name">
        <br><label class="create_label"  for="username">Username</label>
        <input class="create_input" type="text" id="Username" v-model="newMissionCommander.username">
        <br><label class="create_label"  for="mainStack">MainStack</label>
        <input class="create_input" type="text" id="mainStack" v-model="newMissionCommander.mainStack">     
    </form>
    <div>
        <button @click="createMissionCommander">Agregar</button>
    </div>
    </div>

    <div v-else>
        <h3>Mission Commander Creado</h3>
        <button  @click="newMC">Crear otro Mission Commander</button>

    </div>
</template>
<script>
import { thisExpression } from '@babel/types'
import MissionCommanderService from './../services/MissionCommanderService'

export default{
   name: "AddMissionCommander",
   data(){
       return{
            newMissionCommander:{
                id: null,
                name: "",
                username: "",
                mainStack: "",
            },
            submitted: false
       }
   },
   methods: {
       createMissionCommander(){
           var newdata = {
               name: this.newMissionCommander.name,
               username: this.newMissionCommander.username,
               mainStack: this.newMissionCommander.mainStack,
           }
           MissionCommanderService.create(newdata)
           .then(response => {
               this.newMissionCommander.id=response.data.id
                this.submitted = true;
                console.log(this.submitted)
           })
           .catch(e=>{
               console.log(e)
           })

       },

       newMC(){
           this.submitted=false;
           console.log(this.submitted)
           this.newMissionCommander={};
       }
   }

   
}
</script>
<style>



.create_label{
   display: inline-block;
   font-weight: bold;
    width: 80px;
  
}

.create_input{
    margin: 1%;
    font-size: 15px;
}

button{
    color: #df42d7;
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
    border: none;
    background: none;
    margin-top: 2%;
    
}

</style>
