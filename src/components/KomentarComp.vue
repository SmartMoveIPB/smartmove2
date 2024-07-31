<template>
    <v-main class="main">
        <v-container class="mt-n10 pa-10 container rounded-xl">
            <!-- Gambar Bus -->
            <div class="image border rounded-xl d-flex align-end" >
                <div class="title-1 pa-6">
                    <h4 class="text-white">Bus trasJakarta Blok M - PGC</h4>
                </div>
            </div>

            <!-- Make your comment ! -->
            <div class="mt-5 ml-5">
                <Form>
                    <h2 class="my-4">Tulis Komentar</h2>

            <!-- Drop Down -->
                    <v-menu
                        transition="slide-y-transition"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            style="background-color: #7e52d5; color: white;"
                            v-bind="props"
                            >
                            Kategori Komentar
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <button>Kenyamanan</button>
                            </v-list-item>
                            <v-list-item>
                                <button>Kebersihan</button>
                            </v-list-item>
                            <v-list-item>
                                <button>Keamanan</button>
                            </v-list-item>
                            <v-list-item>
                                <button>Profesionalitas</button>
                            </v-list-item>

                        </v-list>
                    </v-menu>       
                    <v-textarea label="Jelaskan Lebih Detail" class="my-4"></v-textarea>
                    <div class="ratings d-flex">
                        <h3 class="font-weight-regular mr-2">Beri Rating</h3>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                        
                    </div>
                    <v-btn style="background-color: #7e52d5; color: white;" class="my-4 w-100">Kirim</v-btn>
                </Form>
            </div>
            
        </v-container>
    </v-main>
</template>

<style>
    .main{
            min-height: 100vh;
            width: 100%;
            background-image: url(@/assets/background.png); 
            background-size: cover;
    }
    .container{
        background-color: white;
        min-height: 100vh ;
    }

    .image{
        background-image: url(@/assets/transJakarta.jpg );
        background-image: rgba(0, 0, 0, 0.5);
        background-size: cover;
        background-position: center;
        min-height: 400px;
        width: 100%;
    }
</style>

<script>
export default {
    name: 'KomentarComp',
    data: () => ({
      rating : 3
    })
}
</script>