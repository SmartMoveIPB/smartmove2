<template>
    <v-main style="min-height: 100vh; width: 100%;">
        <v-container>
            <v-card class="d-flex">
                <div>
                    <h2 class="text-center">Rute Jakarta Bogor</h2>
                    <div class="rute-1 d-flex justify-center align-center">
                        <img src="@/assets/rute-1.png" style="width: 250px;" alt="">
                    </div>
                </div>
                
                <div class="mx-auto">
                    <h2 class="text-center">Rute Jakarta Cikarang</h2>
                    <div class="rute-1 d-flex justify-center align-center">
                        <img src="@/assets/rute-2.png" style="width: 250px; height: 290px;" alt="">
                    </div>
                </div>
                
                <div>
                    <h2 class="text-center">Rute Nambo Bogor</h2>
                    <div class="rute-1 d-flex justify-center align-center">
                        <img src="@/assets/rute-3.png" style="width: 250px; height: 290px; " alt="">
                    </div>
                </div>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: 'ruteComp',
    }
</script>