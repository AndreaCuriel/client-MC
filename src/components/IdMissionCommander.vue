<template>
<div v-if="currentMissionCommander">
    <form>
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="currentMissionCommander.name">
        <label for="username">Username</label>
        <input type="text" id="Username" v-model="currentMissionCommander.username">
        <label for="mainStack">MainStack</label>
        <input type="text" id="mainStack" v-model="currentMissionCommander.mainStack">     
    </form>
    <section>
        <button @click="updateMC">Actualizar</button>
        <button @click="deleteMC">Eliminar</button>  
        <p>{{message}}</p>
    </section>
    
</div>
<div v-else>
    <br />
    <p> Selecciona un Mission Commander. </p>
  </div>
    
</template>
<script>
import MissionCommanderService from "./../services/MissionCommanderService";

export default{
    name:"IdMissionCommander",
    data(){
        return{
            currentMissionCommander: null,
            message: ''
        }
    },

    methods:{
        getMissionCommander(id) {
            console.log(id)
            MissionCommanderService.get(id)
            .then(response => {
             this.currentMissionCommander= response.data;
             console.log(this.currentMissionCommander)
             console.log(this.currentMissionCommander.name)
            })
            .catch(e => {
            console.log(e);
        });
        },

        updateMC(){
            MissionCommanderService.update(this.currentMissionCommander.id, this.currentMissionCommander)
            .then(response =>{
                console.log(response.data)
                this.message='Actualización exitosa'
            })
            .catch(e =>{
                console.log(e)

            })
        },

        deleteMC(){
            MissionCommanderService.delete(this.currentMissionCommander.id)
            .then(response =>{
                console.log(response.data)
                this.$router.push({name: "missionCommanders"})
            })
            .catch(e =>{
                console.log(e)

            })
        }

        

        
    },
     mounted() {
    this.message = '';
    this.getMissionCommander(this.$route.params.id);
  }
   
}
</script>