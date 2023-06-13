<template>
    <div class="big">
        <div class="right">
            <div class="item name">
                <span>{{ com.name }}</span>
            </div>

            <div class="item addr">
                <span>addr:{{ com.address }}</span>
            </div>

            <div class="item email">
                <span style="color: red;">email:{{ com.email }}</span>
                <span style="color: aqua;">tel:{{ com.mobile }}</span>
            </div>

            <div class="item">
                <span>{{ com.description }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { com: {} },
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.mobile{
    color: aqua;
}

.email{
    // color: red;
    justify-content: space-between;
}

.addr{
    font-size: 15px;
    color: gray;
}
.name{
    font-weight: bold;
    font-size: 20px;
}

.item{
    display: flex;
}

.right{
    width: 700px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 15px;
}
.img{
    width: 400px;
    height: 400px;
    border-radius: 10px;
}
.big{
    width: 700px;
    height: 230px;
    display: flex;
    border-radius: 10px;
    box-shadow: 12px 24px 15px -3px rgba(0,0,0,0.1);
}
</style>
