<template>
    <div v-if="!submitted">
        <form>
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="newMissionCommander.name">
        <label for="username">Username</label>
        <input type="text" id="Username" v-model="newMissionCommander.username">
        <label for="mainStack">MainStack</label>
        <input type="text" id="mainStack" v-model="newMissionCommander.mainStack">     
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
