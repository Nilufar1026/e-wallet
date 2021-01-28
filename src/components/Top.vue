<template>
<div >
    <h1>{{head}}</h1>
    <h2>{{title}}</h2>
</div>
</template>

<script>
export default {
    // components:{Card},
    props:{
        head:String,
        title:String,
    }
}

</script>
<style scoped>
h2{
    font-size: 15px;
    color: #A9A9A9;
    font-weight: 450;
    margin-top: 40px ;
    margin-bottom: 20px;
}
</style>