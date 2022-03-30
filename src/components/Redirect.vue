<template>
    <h1>Redirigiedo...</h1>
</template>

<script>
export default {
    name:"Redirect",
        mounted(){
         
        var searchString = this.$route.params.searchtString;
            this.$router.push('/buscador/'+ searchString)
        }
    }
</script>

