<template>
    <v-container class="w-auto h-auto">
        <v-card class="pa-4">
            <!-- Avatar Div -->
            <div class=" w-auto h-auto ">
                <!-- Image -->
                <div class="d-flex justify-center align-center" style="height: 190px; border">
                    <v-avatar size="170px" image="https://th.bing.com/th/id/OIP.7hXuopvF2x82nyw_RvcA1QHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"></v-avatar>
                </div>

                
                <div class="d-flex justify-center align-center">
                    <button onclick="location.href='/changeProfile'">
                        <p class="text-button">Edit Profile</p>
                    </button>
                </div>
                
                <div class="pa-4 text-center">
                    <h3>
                        EMAIL
                    </h3>
                    <p>
                        IrfanGaming@gmail.com
                    </p>
                </div>
                <div class="pa-4 text-center">
                    <h3>
                        NAMA
                    </h3>
                    <p>
                        MAULANA IRFAN
                    </p>
                </div>
                <div class="pa-4 text-center">
                    <h3>
                        PASSWORD
                    </h3>
                    <p>
                        ***********
                    </p>
                </div>
                <div class="pa-4 text-center">
                    <h3>
                        ROLE
                    </h3>
                    <p>
                        CHIEF TECH OFFICER 
                    </p>
                </div>
            </div>

            <!-- Form to Edit Function -->
            <div class="form">
                
            </div>
        </v-card>
    </v-container>
</template>

<style>
   
</style>

<script>
    export default {
        name: 'ProfileComp',
    }
    
</script>


<script setup>
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { email, required } from '@vuelidate/validators'

    
    const initialState = {
        email : '',
        username: '',
        password: '',
        checkbox: null,
        role : ''
    }

    const state = reactive({
        ...initialState,
    })


    const rules = {
        email : { required, email },
        username: { required },
        password: { required },
        checkbox: { required },
        role : {required}
    }

    const v$ = useVuelidate(rules, state)

    // function clear () {
    //     v$.value.$reset()

    //     for (const [key, value] of Object.entries(initialState)) {
    //     state[key] = value
    //     }
    // }
    
</script>