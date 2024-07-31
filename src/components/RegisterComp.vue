<template>
     <main :style="LoginStyle" class="pa-10 lg:w-auto w-">
        <v-img 
        src="@/assets/logo-Smart-move.png"
        style="height: 150px;"
        >

        </v-img>
        <div :style="FormStyle" class="d-flex justify-center align-center mt-2">
            <v-card style="height: 650px; width: 400px; background-color: white;" class="rounded-xl pa-7 text-black lg:w-[550px]" >
                <h1 class="text-center mt-3">Welcome Back!</h1>
                <p class="text-center text-subtitle-2 font-weight-light">We wait you so long to comeback! hurry to login!</p>

                <!-- form -->
                <!-- <form>
                    <v-text-field  v-model="Username" type="text" label="Username" name="Username" clearable class="text-black mt-6 rounded-pill" :counter="50"  ></v-text-field>
                    <v-text-field v-model="Password" type="password" label="Password" name="Password" clearable class="text-black  rounded-pill"></v-text-field>
                    <v-checkbox label="Remember Me" class="mt-n5 mb-n5" />

                    <a href="#register" class="ml-2 text-decoration-none text-black font-weight-light ">Forgot your password?</a>
                    <v-btn class=" rounded-pill" style="background-color: #414E6E;"  block @click="validate">Login</v-btn>
                </form> -->
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
                    
                    <v-checkbox
                    class="mt-n4 mb-n5"
                    v-model="state.checkbox"
                    :error-messages="v$.checkbox.$errors.map(e => e.$message)"
                    label="Remember me"
                    @blur="v$.checkbox.$touch"
                    @change="v$.checkbox.$touch"
                    ></v-checkbox>
                    
                    <div class="mb-1 ml-2">
                        <a href="#forgot" class="text-decoration-none text-black font-weight-light" style="font-size: 15px; " >Forgot your password?</a>
                    </div>
                    
                    <v-btn
                    @click="v$.$validate" @dbclick="clear" style="background-color: #414E6E;" class="text-white my-1 w-100 rounded-pill"
                    >
                        login
                    </v-btn>
                    
                    <div class="d-flex justify-center">
                        <a href="#register" class="text-decoration-none text-black font-weight-light" style="font-size: 15px;"> <span class="text-red" >Don't </span> have any account? <span class="text-red">Create </span> one!</a>
                    </div>
                    

                    <div class="or d-flex justify-center mt-2 ga-3">
                        <hr style="width: 30%;" class="my-3">
                        <p class="text-center"> OR</p>
                        <hr style="width: 30%;" class="my-3">
                    </div>

                    <v-btn
                    @click="v$.$validate" @dbclick="clear" style="background-color: #414E6E;" class="text-white my-2 w-100 rounded-pill" prepend-icon="mdi-google"
                    >
                        login with google
                    </v-btn>    
                </form>
            </v-card>
        </div>
        
    </main>
</template>

<script>
    import logo from '@/assets/logo-Smart-move.png'
    import ImageWeb from '@/assets/background.png'
    export default{
        
        name : 'RegisterComp',
        
        data(){
            return{
                valid : false,
                Username : '',
                Password :'',
                // UsernameRules : [
                //     v => !!v || 'Username is required!',
                //     v => (v && v.length <=50) || 'Username must be less than 50 characters!'
                // ],
                LoginStyle : [
                    {
                        backgroundImage : `url(${ImageWeb})`,
                        backgroundSize : 'cover',
                        backgroundPosition : 'center',
                        minHeight : '100vh',
                        width : '100%'
                    }
                ]
                    ,
                FormStyle : [
                    {
                        height : '80vh',
                        width : 'auto',
                        
                    }
                ]
                    ,
                logSmart : [
                    {
                        backgroundImage : `url(${logo})`,
                        
                    }
                ]
              
            }
        }
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