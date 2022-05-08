<template>
<div class="container_MCs">
    
    <div id="lista" class="container_datos">
        <h3>Lista | Mission Commanders</h3>
        <ul>
            <li class="container" :class="{ active: index == currentIndex }" v-for="(missionCommander, index) in missionCommanders" :key="index"
            @click="setActiveMissionCommander(missionCommander, index)">
            {{missionCommander.username}}
            
            </li>
        </ul>

    </div>

    <div class="container_datos">

        <div id="dataMC" v-if="currentMissionCommander">
        <h3>Mission Commander</h3>
                <div>
                <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
                <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
                <br><label><strong>MainStack:</strong></label> {{ currentMissionCommander.mainStack}}
                </div>
                <br>
                <router-link id="link_edit" :to="'/missionCommanders/' + currentMissionCommander.id" ><strong>Editar</strong> </router-link>    
            </div>
            <div v-else>
                <br />
                <p> Selecciona un missionCommander.</p>
            </div>
    </div>
  

</div>
    
</template>

<script>
import MissionCommanderService from "./../services/MissionCommanderService";

export default{
    name: "MissionCommanders",
    data() {
        return {
            missionCommanders: [],
            currentMissionCommander: [],
            currentIndex: -1,
        }
    },

    methods: {
        getAllMissionCommanders(){
            MissionCommanderService.getAll()
            .then(response => {
                this.missionCommanders=response.data;
            })
            .catch(e => {
                console.log(e);
            });
            
        },

        setActiveMissionCommander(missionCommander, index) {
            document.getElementById("dataMC").style.display="block"
            this.currentMissionCommander= missionCommander;
            this.currentIndex = missionCommander? index : -1;

         }
    },

    mounted(){
        this.getAllMissionCommanders();
    }


}

</script>

<style>

.container_MCs{
    display: flex;
    flex-direction: row;
    
    
}


.container_datos{
    width: 50%;
    margin: 2%;
}

#lista{
    padding: 0 10% 0 10%;
}


li{
    list-style: none;
}
.container {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  transition: 0.4s;
}

.active, .container:hover {
  background-color: #ccc;
}

#dataMC{
    display: none;
    padding: 8% 60% 0 0;
    text-align: left;

}

#link_edit{
    color: #df42d7
}

</style>