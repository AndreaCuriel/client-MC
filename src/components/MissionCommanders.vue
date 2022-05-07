<template>
<div>
    <h3>Mission Commanders</h3>
    <div>
        <ul>
            <li :class="{ active: index == currentIndex }" v-for="(missionCommander, index) in missionCommanders" :key="index">
            {{missionCommander.username}}

            </li>
        </ul>

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
            
        }
    },

    mounted(){
        this.getAllMissionCommanders();
    }


}

</script>