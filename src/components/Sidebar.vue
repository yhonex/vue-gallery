<template>
    <aside id="sidebar">
                <div id="nav-blog" class="sidebar-item">
                    <h3>deseas crear un nuevo articulo </h3>
                    <router-link to="/crear-articulo" class="btn btn-success">Crear artículo</router-link >
                </div>

                <div id="search" class="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form @submit.prevent="Gosearch">
                            <input type="text" name="search" v-model="searchString" />
                            <input type="submit" name="submit" value="Buscar" class="btn" />
                        </form>
                </div>
            </aside>

</template>


<script>
export default {
    name:'Sidebar',
    data(){
        return{
            searchString: null
        }
    },
    methods:{
        Gosearch(){
           
            this.$router.push('/redirect/'+ this.searchString);
        },
    },
}
</script>