<template>
<div id="">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators display-none-2">
            <!-- <li v-for="po in pos" :key="po.id" :data-target="'#carouselExampleIndicators'" :data-slide-to="po"></li> -->
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div data-aos="zoom-in" class="hero-btn">
            <input type="button" value="REQUEST A QUOTE" @click="openModal('modal-wrap')">
        </div>
        <div class="carousel-inner carousel-inner-hero">
            <div class="carousel-item active">
                <div class="layer-slider"></div>
                <img class="d-block w-100 d-block-hero" src="@/assets/img/slide/slideHero0.png" alt="First slide">
                <div class="carousel-caption  d-md-block">
                   <h1 data-aos="fade-left">{{text1.title}}</h1>
                    <p data-aos="fade-right">{{text1.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider "></div>
                <img class="d-block w-100 d-block-hero" src="@/assets/img/slide/slideHero4.png" alt="Second slide">
                <div data-aos="fade-left" class="carousel-caption  d-md-block">
                    <h1>{{text2.title}}</h1>
                    <p>{{text2.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100 d-block-hero" src="@/assets/img/slide/slideHero5.png" alt="Third slide">
                <div class="carousel-caption  d-md-block">
                    <h1>{{text3.title}}</h1>
                    <p>{{text3.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100 d-block-hero" src="@/assets/img/slide/slideHero8.png" alt="Third slide">
                <div class="carousel-caption  d-md-block">
                    <h1>{{text4.title}}</h1>
                    <!-- <p>{{text4.description}}</p> -->
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100 d-block-hero" src="@/assets/img/slide/slideHero7.png" alt="Third slide">
                <div class="carousel-caption  d-md-block">
                    <h1>{{text5.title}}</h1>
                    <!-- <p>{{text5.description}}</p> -->
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div>
       
      
    </div>
     <!-- <Quote/> -->
</div>

</template>

<script>
import Quote from '../components/Quote'
export default {
  name: 'SlideHome',
  data () {
    return {
      text1: {
          title: "FULL HOME INSPECTIONS",
            description: "SAME DAY OR NEXT DAY APPOINTMENTS AVAILABLE"
          
      },
      text2: {
          title: "40 / 50 YEAR RECERTIFICATION",
            description: "LEADING BUILDING INSPECTION COMPANY"
          
      },
      text3: {
          title: "COMPREHENSIVE INSPECTIONS",
            description: "CALL US FOR YOUR INSPECTIONS NEEDS"
          
      },
      text4: {
          title: "CERTIFICATE OF BALCONY INSPECTIONS",
            
          
      },text5: {
          title: "CERTIFICATES OF USE INSPECTIONS",
      },
  }
},
 methods: {
     scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('to-top-btn').style.display = 'block';
  } else {
      document.getElementById('to-top-btn').style.display = 'none';
  }
},
    openModal(id){
        // alert(id);
      var modal=document.getElementById(id);
      if(modal.classList.contains('modal-display-none'))
        {
            modal.classList.remove('modal-display-none');
            modal.classList.add('modal-display-flex');
        }
    }
  }
}
</script>

