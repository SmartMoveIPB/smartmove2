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
                    <h2 class="my-4">Laporkan Ketidaknyamanan</h2>

            <!-- Drop Down -->
            <v-select
            label="Kategori"
            :items="['Kenyamanan', 'Keamanan', 'Kebersihan', 'Profesionalitas']"
            ></v-select>      
                    <v-text-field label="Email" type="email" class="my-4"></v-text-field>
                    <v-textarea label="Jelaskan Lebih Detail" class="my-4"></v-textarea>
                    <div class="ratings d-flex">
                        <h3 class="font-weight-regular mr-2">Beri Rating</h3>
                        <v-rating

                            size="30"
                            v-model="rating"
                            clearable
                            ></v-rating>
                        
                         <!-- <v-text-field
                        v-model="state.email"
                        :error-messages="v$.email.$errors.map(e => e.$message)"
                        label="Email"
                        required
                        type="email"
                        @blur="v$.email.$touch"
                        @input="v$.email.$touch"
                    ></v-text-field>
                    <v-textarea
                        v-model="state.laporkan"
                        :error-messages="v$.laporkan.$errors.map(e => e.$message)"
                        label="laporkan"
                        required
                        type="laporkan"
                        @blur="v$.laporkan.$touch"
                        @input="v$.laporkan.$touch"
                    ></v-textarea>
                    <div class="ratings d-flex">
                        <h3 class="font-weight-regular mr-2">Beri Rating</h3>
                        <v-rating
                            :error-messages="v$.rating.$errors.map(e => e.$message)"
                            size="30"
                            v-model="state.rating"
                            clearable
                            @blur="v$.rating.$touch"
                            @change="v$.rating.$touch"
                            ></v-rating> -->
                        
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
    name: 'LaporkanComp',
    data: () => ({
      rating : 3
    })
}
</script>

<!-- <script setup>
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { email, required } from '@vuelidate/validators'

    
    const initialState = {
        email : '',
        laporkan: '',
        ratings: null
    }

    const state = reactive({
        ...initialState,
    })


    const rules = {
        email : { required, email },
        laporkan: { required },
        ratings: { required }
        
    }

    const v$ = useVuelidate(rules, state)

    // function clear () {
    //     v$.value.$reset()

    //     for (const [key, value] of Object.entries(initialState)) {
    //     state[key] = value
    //     }
    // }
    
</script> -->