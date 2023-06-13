<template>
    <div>
        <div class="div">
            <template v-for="com in arr">
                <ComShow :com="com"></ComShow>
            </template>
        </div>
    </div>
</template> 
<script>
import { del, allConmmunity } from "@/http/communityApi/communityApi"
import ComShow from "@/components/comShow/comShow.vue"
export default {
    mounted() {
        this.all();
    },
    data() {
        return {
            arr: []
        };
    },
    methods: {
        all() {
            allConmmunity().then(resp => {
                console.log("收到回复：" + JSON.stringify(resp.data));
                this.arr = resp.data.communities;
            });
        }
    },
    components: { ComShow }
}
</script>
<style lang="scss" scoped>
.div {
    margin-left: 100px;
    width: 1500px;
    display: grid;
    grid-template-columns: auto auto ;
    grid-row-gap: 30px;
}

</style>
