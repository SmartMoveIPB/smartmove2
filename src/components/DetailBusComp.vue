<template>
    <v-main class="pa-10 main">
        <v-container>
            <div class="back-kendaraan d-flex">
                <v-icon icon="mdi-arrow-left" /> 
                <h3>Back</h3>
            </div>
            
            <!-- Isi dari Bus yakni image dan deskripsi -->
            <div class="bus-trans d-flex pa-6">
                <img src="@/assets/transJakarta.jpg" alt="TransJakarta" class="Bus rounded-xl">
            </div>
        </v-container>
            
           
    </v-main>
</template>

<style>
    .main{
        min-height: 100vh;
        width: 100%;
    }

    .Bus{
        width: 500px;
    }
</style>

<script>
    export default {
        name: 'DetailBusComp',
    }
</script>

