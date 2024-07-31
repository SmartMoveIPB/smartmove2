<template>
    <!-- Kita pake slider group untuk sliding imagena -->
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
            <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                <v-icon
                    v-if="isSelected"
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


        <section class="pa-10" style="width: 100%; min-height: 100vh;">
            <div class="w-auto border pa-5 d-flex justify-space-between" style="height: 80px;">
                <div class="d-flex ml-6">
                    <h2>News</h2>
                    <v-icon icon="mdi-arrow-right mx-3" style="margin-top: 6px;" ></v-icon>
                </div>
               
                <div class="show-all">
                    <button>
                        <h2>Show All</h2>
                    </button>
                </div>
            </div>

            <v-list :items="items" class="List pa-2" lines="three" items-props>
            </v-list>
        </section>

</template>

<script>
    export default {
        name: 'NewsComp',
        data: () => ({
            model: null,
            
                items : [ // props itu untuk nambahkan property kayak icon dsb
                    {
                        prependAvatar : 'https://th.bing.com/th/id/OIP.0knG318bl0K7VkNsNTxtqQHaEf?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                        title : 'Bus Sinar Jaya',
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
                ]
        }),
    }
</script>

<style>
    .List items-title {
        font-size: 25px;
        
    }
</style>