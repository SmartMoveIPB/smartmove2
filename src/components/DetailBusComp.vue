<template>
    <v-main class="pa-10 main">
        <v-container>
            <div class="back-kendaraan d-flex cursor-pointer" onclick="location.href='/'">
                <v-icon icon="mdi-arrow-left" style="margin-top: 2px;"/> 
                <h3>Back</h3>
            </div>
            
            <!-- Isi dari Bus yakni image dan deskripsi -->
            <div class="bus-trans d-flex pa-6">
                <img src="@/assets/transJakarta.jpg" alt="TransJakarta" class="Bus rounded-xl">
                <div class="Deskripsi mx-5 text-justify">
                    <h2>
                        TransJakarta
                    </h2>
                    <br/>
                    <p>
                        Bus TransJakarta adalah Transportasi Transit dalam kota yang di buatkan oleh Kementerian Perhubungan yang cukup terkenal di Indonesia. Mereka mengoperasikan layanan bus dalam yang terkenal dengan kenyamanan dan keamanannya. Bus TransJakarta juga dikenal memiliki armada yang cukup modern dan terawat dengan baik.
                    </p>
                    <div class="button my-5">
                        <h3 class="font-weight-regular">Detail Kendaraan :</h3>
                        <table>
                                <tr>
                                    <td>Plat Nomor </td>
                                    <td>: B 4596 T0</td>
                                </tr>
                                <tr>
                                    <td>Tahun Operasi </td>
                                    <td>: 2018 - Now</td>
                                </tr>
                                <tr>
                                    <td>Kelayakan Bus</td>
                                    <td>: 96%</td>
                                </tr>
                        </table>
                    </div>
                    <v-btn>Laporkan</v-btn>
                </div>
            </div>
            <div>
                    <div class="back-kendaraan d-flex cursor-pointer my-3" onclick="location.href='/'">
                        <h3>Kendaraan lain</h3>
                        <v-icon icon="mdi-arrow-right" style="margin-top: 2px;" /> 
                    </div>

                    <div class="my-10">
                        <h3 class="text-center">TransJakarta Blok M - PGC</h3>
                        <br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4582.317149560476!2d106.79817100410101!3d-6.242237633610788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11a035ff483%3A0xd8c483ca69a8e81!2sTaman%20Literasi%20Martha%20Christina%20Tiahahu%2C%20Jakarta%20blok%20M!5e0!3m2!1sid!2sid!4v1722406207459!5m2!1sid!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <!-- <div class="detail-bus ">
                        <h3 class="font-weight-regular">Detail Kendaraan :</h3>
                        <table>
                                <tr>
                                    <td>Plat Nomor </td>
                                    <td>: B 4596 T0</td>
                                </tr>
                                <tr>
                                    <td>Tahun Operasi </td>
                                    <td>: 2018 - Now</td>
                                </tr>
                                <tr>
                                    <td>Kelayakan Bus</td>
                                    <td>: 96%</td>
                                </tr>
                        </table>
                    </div> -->
            </div>
        </v-container>
            
           
    </v-main>
</template>

<style>
    .back-kendaraan{
        
    }
    .main{
        min-height: 100vh;
        width: 100%;
    }

    .Bus{
        width: 500px;
    }
</style>

<script>
    export default {
        name: 'DetailBusComp',
    }
</script>

