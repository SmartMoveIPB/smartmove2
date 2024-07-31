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
                    <br>
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

