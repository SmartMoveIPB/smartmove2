<template>
    <v-container class="w-auto h-auto">
        <v-card class="pa-4">
            <!-- Avatar Div -->
            <div class=" w-auto h-auto" onclick="location.href='/profile'">
                <div class="back d-flex cursor-pointer">
                    <v-icon icon="mdi-arrow-left" class="ml-5" style="margin-top: 2px;"/>
                    <div><h3>Back</h3></div>

                </div>

                <!-- Image -->
                <div class="d-flex justify-center align-center" style="height: 190px; border">
                    <v-avatar size="170px" image="https://th.bing.com/th/id/OIP.7hXuopvF2x82nyw_RvcA1QHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"></v-avatar>
                </div>

                
                <div class="d-flex justify-center align-center">
                    <input type="file" id="chooseFile" class="d-none">
                    <button onclick="document.getElementById('chooseFile').click()">
                        <p class="text-button">Change Avatar</p>
                    </button>
                </div>
                
            </div>

            <!-- Form to Edit Function -->
            <div class="form">
                <form class="mt-5">
                    <v-text-field
                        v-model="state.email"
                        :error-messages="v$.email.$errors.map(e => e.$message)"
                        label="Email"
                        required
                        type="email"
                        @blur="v$.email.$touch"
                        @input="v$.email.$touch"
                    ></v-text-field>
                    
                    <v-text-field
                    clearable
                    v-model="state.username"
                    :counter="50"
                    :error-messages="v$.username.$errors.map(e => e.$message)"
                    label="Username"
                    required
                    @blur="v$.username.$touch"
                    @input="v$.username.$touch"
                    ></v-text-field>

                    <v-text-field
                    clearable
                    :error-messages="v$.password.$errors.map(e => e.$message)"
                    v-model="state.password"
                    :counter="50"
                    label="Password"
                    type="password"
                    required
                    @blur="v$.password.$touch"
                    @input="v$.password.$touch"
                    ></v-text-field>

                    <v-text-field
                    clearable
                    v-model="state.role"
                    :counter="50"
                    :error-messages="v$.role.$errors.map(e => e.$message)"
                    label="Role"
                    required
                    @blur="v$.role.$touch"
                    @input="v$.role.$touch"
                    ></v-text-field>
                    
                    
                    
                    <v-btn
                    @click="v$.$validate" @dbclick="clear" class="button-change text-white my-4 w-100 rounded-pill"
                    >
                        Change Save
                    </v-btn>
                    
                </form>
            </div>
        </v-card>
    </v-container>
</template>


<style>
    .button-change{
        background-color: #414E6E; 
        height: 50px;
    }
</style>


<script>
    export default {
        name: 'ChangeProfileComp',
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