<template>
    <v-main class="pa-10 ">
        <v-contaienr >
            <!-- Foto -->
            <v-card :style="cardStyle" style="opacity: 0.5;"></v-card>
            
            <!-- Button bus or Train -->
            <div id="bus" onclick="location.href='/'" class="d-flex mx-auto rounded-pill my-10 " style="width: 250px; height: 50px; background-color: white;" c>
                <button style="width: 125px; height: 50px; background-color: white;" class="border rounded-ts-pill pa-3 rounded-bs-pill">
                    <h4  class="text-black text-center">Bus</h4>
                </button>  
                <button id="train" onclick="location.href='/train'" style="width: 125px; height: 50px; background-color: #E8DEF8;" class="rounded-te-pill pa-3 rounded-be-pill border">
                    <h4  class="text-black text-center">Train</h4>
                </button>
            </div>
            
            <!-- Isi bus -->
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto">
                            <h3>KRL Jakarta Blok M - PGC</h3>
                            <p>KRL jakarta yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Blok M - PGC</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Blok M - PGC</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Blok M - PGC</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Kp.Dukuh - Kp.Melayu</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa PIK - Tj.Priok</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Tj.Barat - Depok</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Depok - Ciawi</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Bogor - Sukabumi</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Bogor-Citayem</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Bogor - Kp. Rambutan</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
                        <v-avatar image="@/assets/argo-dwipangga.png" size="70px" class="mr-5" />
                        <div class="me-auto" onclick="location.href='/detailBus'">
                            <h3>KRL Jawa Kp.Inggris - Malang</h3>
                            <p>KRL Jawa yang berjalur dari halte Blok M hingga halte terakhir PGC</p>
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
        </v-contaienr>
    </v-main>
</template>
<script >
    import ImageKereta from '@/assets/argo-dwipangga.png';

    export default{
        name : 'TrainComp',
        data(){
            return{
                cardStyle : {
                    height : '300px',
                    width : '100%',
                    backgroundImage : `url(${ImageKereta})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                },
                listStyle : {
                    fontSize :'30px'
                }
                ,
                items : [ // props itu untuk nambahkan property kayak icon dsb
                    {
                       Image: '@/assets/argo-dwipangga.png',
                        title : 'Argo Dwipangga',
                        value : '1',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Argo Dwipangga',
                        value : '2',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Argo Dwipangga',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Argo Dwipangga',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Argo Dwipangga',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    }
                    ,
                    {type : 'divider', inset : true},
                    {
                        title : 'Argo Dwipangga',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Argo Dwipangga',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    }
                ],
                rating : 3
                // items: [
                //     {
                //         prependAvatar: '@/assets/tiket-bus-sinar-jaya.jpg',
                //         title: 'Brunch this weekend?',
                //         subtitle: <span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                //         title: 'Summer BBQ',
                //         subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                //         title: 'Oui oui',
                //         subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                //         title: 'Birthday gift',
                //         subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                //         title: 'Recipe to try',
                //         subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                //     },
                // ]
            }
        }
    };
</script>
