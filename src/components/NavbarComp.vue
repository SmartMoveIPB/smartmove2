<template>

  <v-card>
    <v-app-bar
        style="background-color: #7e52d5;"

        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="text-white"></v-app-bar-nav-icon>

        <v-spacer>  </v-spacer>

        <v-btn class="rounded-pill shadow-lg text-white" style="width: 100px; background-color: #3735c0;" onclick="location.href='/login'"><h3>Login</h3></v-btn>

        <v-btn icon="mdi-dots-vertical" class="mx-5 text-white" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        style="background: rgb(81,65,124); background: linear-gradient(180deg, rgba(81,65,124,1) 0%, rgba(92,73,140,1) 35%, rgba(112,89,171,1) 69%, rgba(148,118,226,1) 100%);; color :white; width: 120px;"
        v-model="drawer"
      
        :location="$vuetify.display.mobile ? 'left' : undefined"
        temporary
      >
        <v-list
          
        >
          <v-list-item class="items2">
            <div class="d-flex justify-center mb-8 mt-4">
              <img src="@/assets/logo-Smart-move.png" style="width: 70px;" alt="logo" onclick="location.href='/'">
            </div>
            
            <button class=" button-item " onclick="location.href='/detailKendaraan'" >
              <v-icon icon="mdi-bus" style="font-size: 25px;"></v-icon>
              
              <h3 class="font-weight-regular" style="font-size: 15px;">Detail<br>Transportasi</h3>
            </button>

            <button class=" button-item my-6" >
              <v-icon icon="mdi-newspaper" style="font-size: 25px;"></v-icon>
              
              <h3 class="font-weight-regular" onclick="location.href='/news'" style="font-size: 15px;">Berita</h3>
            </button>
            
            <!-- <button class=" button-item " >
              <v-icon icon="mdi-comment"  style="font-size: 25px;"></v-icon>
              
              <h3 class="font-weight-regular" style="font-size: 15px;">Komentar</h3>
            </button> -->
            
            <button class=" button-item mb-6 " >
              <v-icon icon="mdi-google-maps" style="font-size: 30px;" ></v-icon>
              
              <h3 class="font-weight-regular" style="font-size: 15px;">Rute</h3>
            </button>
            
            <button class=" button-item" onclick="location.href='/profile'">
              <v-icon icon="mdi-account" style="font-size: 30px;" ></v-icon>
              
              <h3 class="font-weight-regular" style="font-size: 15px;">Profil</h3>
            </button>
          
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    
  </v-card>
</template> 

<script>
    // import BusComp from '@/components/BusComp.vue';
    export default{
        name : 'NavbarComp',
        data: () => ({
            drawer: false,
            group: null,
            items: [
                {
                  props: {
                    prependIcon: 'mdi-star-circle-outline',
                    title: 'Dashboard'
                  },
                subtitle: 'Subtitle',
                value: 'foo',
                },
                {
                title: 'Bar',
                value: 'bar',
                },
                {
                title: 'Fizz',
                value: 'fizz',
                },
                {
                title: 'Buzz',
                value: 'buzz',
                },
            ],
        }),

            watch: {
                group () {
                    this.drawer = false
                },
            },
        
    }
</script>

<style>
  .button-item{
    width: 100%;
  }

</style>
