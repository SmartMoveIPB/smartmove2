<style>
    .transJakarta{
        background-image: url(@/assets/transJakarta.jpg);
        background-size: cover;
    }
</style>

<template>
    <v-sheet
        class="mx-auto"
        elevation="5"
        max-width="100%"
    >
        <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
        >
        <v-slide-group-item
            v-for="n in 10"
            :key="n"
            v-slot="{ isSelected, toggle }"
        >
            <v-card
            :color="isSelected ? 'primary' : 'grey-lighten-1'"
            class="ma-5"
            style="width: 300px;"
            height="200px"
            @click="toggle"
            >
            <div class="d-flex fill-height align-center justify-center transJakarta">
            </div>
            <div class="d-flex fill-height align-center justify-center" v-if="isSelected">
                <v-scale-transition>
                <v-icon
                    
                    color="white"
                    icon="mdi-close-circle-outline"
                    size="42"
                ></v-icon>
                </v-scale-transition>
            </div>
            </v-card>
        </v-slide-group-item>
        </v-slide-group>
    </v-sheet>

    <div id="bus"  class="d-flex mx-auto rounded-pill my-10 " style="width: 250px; height: 50px; background-color: white;">
        <button  onclick="location.href='/'" style="width: 125px; height: 50px; background-color: #E8DEF8;" class="rounded-ts-pill pa-3 rounded-bs-pill border">
            <h4  class="text-black text-center ">Bus</h4>
        </button>  
        <button  onclick="location.href='/'" style="width: 125px; height: 50px; background-color: white;" class="pa-3  border">
            <h4  class="text-black text-center ">Kereta</h4>
        </button>  
        <button id="train" onclick="location.href='/train'" style="width: 125px; height: 50px; background-color: white;" class="rounded-te-pill pa-3 rounded-be-pill border">
            <h4  class="text-black text-center ">Angkot</h4>
        </button>
    </div>

        <section class="pa-10" style="width: 100%; min-height: 100vh;">
            <div class="w-auto  pa-5 d-flex justify-space-between" style="height: 80px;">
                <div class="d-flex ml-6">
                    <h3>Detail Kendaraan</h3   >
                    <v-icon icon="mdi-arrow-right mx-3" style="margin-top: 2px;" ></v-icon>
                </div>
               
                <div class="show-all mr-6">
                    <button>
                        <h3>Show All</h3   >
                    </button>
                </div>
            </div>

            <v-list class="List pa-2"  lines="three" items-props >
                <v-list-item class="cursor-pointer" onclick="location.href='/detailBus'">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto">
                            <h3>TransJakarta Blok M - PGC</h3>
                            <p>Transjakarta yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>
                
                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Blok M - PGC</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Blok M - PGC</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Blok M - PGC</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>


                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Kp.Dukuh - Kp.Melayu</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa PIK - Tj.Priok</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Tj.Barat - Depok</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Depok - Ciawi</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Bogor - Sukabumi</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Bogor-Citayem</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>


                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Bogor - Kp. Rambutan</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item class="cursor-pointer">
                    <div class="d-flex">
                        <v-avatar image="@/assets/transJakarta.jpg" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>TransJawa Kp.Inggris - Malang</h3>
                            <p>TransJawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
                        </div>
                        <v-rating
                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                    </div>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
        </section>
</template>

<script>
 export default {
        name: 'DetailKendaraanBusComp',
        data: () => ({
            model: null,
            
                items : [ // props itu untuk nambahkan property kayak icon dsb
                    {
                        title : 'Bus TransJakarta blok M - PGC',
                        value : '1',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        value : '2',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    }
                    ,
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    }
                ],
                rating : 3
        
        }),
    }
</script>

<script setup>

</script>