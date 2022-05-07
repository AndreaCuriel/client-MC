<template>
<div>
    <h3>Mission Commanders</h3>
    <div>
        <ul>
            <li class="container" :class="{ active: index == currentIndex }" v-for="(missionCommander, index) in missionCommanders" :key="index"
            @click="setActiveMissionCommander(missionCommander, index)">
            {{missionCommander.username}}
            
            </li>
        </ul>

    </div>

    <div>

        <div id="dataMC" v-if="currentMissionCommander">
        <h3>Mission Commander</h3>
                <div>
                <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
                <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
                <br><label><strong>MainStack:</strong></label> {{ currentMissionCommander.mainStack}}
                </div>
                <router-link :to="'/missionCommanders/' + currentMissionCommander.id" > Editar</router-link>    
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
li{
    list-style: none;
}
.container {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .container:hover {
  background-color: #ccc;
}

#dataMC{
    display: none;
}

</style>