<template>
  <!-- SECTION F -->
    <section class="sec-f" id="sec-f">
      
   
    <b-modal v-model="modalShow" >
      
        <img v-if="selectImg == 1" src="./../assets/img/content/license01.png" class="modal-i">
        <img v-if="selectImg == 2" src="./../assets/img/content/license02.png" class="modal-i">
       
    </b-modal>

      <!-- <b-modal v-model="modalShow" >
      
        <img  src="./../assets/img/content/license02.png" class="modal-i">
       
    </b-modal> -->
<!--   
        <div class="modal-ins-left modal-sec-f ">
          <img @click="openTest()" src="./../assets/img/content/license01.png" class="img-responsive img-left">
        </div>
         <div class="modal-ins-rigth modal-sec-f">
          <img @click="openTest()" src="./../assets/img/content/license01.png" class="img-responsive img-right">
        </div> -->
        <div  class="sec-f-top">
            <div data-aos="fade-down" class="sec-f-top-title">
                <h1>LICENSES</h1> 
            </div>
            <div data-aos="fade-down" class="sec-f-top-content">
              <div class="sec-f-top-content-item">
              <b-button value="1" @click="modalShow = !modalShow ; selectImg = '1' ">
                <img id="img-left"  src="./../assets/img/content/licenseThumb01.png">
              </b-button>
              </div>
              <div class="sec-f-top-content-item">
                <b-button value="2" @click="modalShow = !modalShow ; selectImg = '2'">
                  <img id="img-left"  src="./../assets/img/content/licenseThumb02.png">
                </b-button>              </div>
            </div>
        </div>
        <div class="sec-f-bottom">
            <div data-aos="flip-left" class="sec-f-bottom-left">
                <div class="sec-f-layer"></div>
                <h1>TEAM WORK</h1>
            </div>
            <div data-aos="flip-right" class="sec-f-bottom-right">
                <div class="sec-f-bottom-right-content">
                    <p>At B&A we are commited to work with developers where teamwork is an essential part of workplace success. Everyone at B&A works together to accomplish goals, everyone achieves more.</p>
                    <ul>
                        <li>We've partnered up with - www.floridarealtors.org</li>
                        <!-- <li>Greater Miami Fellowship of Christian Athletes - www.miamifca.org</li>
                        <li>Catholic Charities of the Archdiocese of Miami - www.ccadm.org</li> -->
                    </ul>
                    <p>Service to others is one of our company’s guiding principles. We thank you for allowing us to serve you, and through your patronage</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      selectImg: '1',
      modalShow: false
    }
  },
   methods: {
     openTest(a){
       
       alert(idImg);

      var modal = document.getElementsByClassName('')
     }
   }
}
</script>

<style>

</style>

