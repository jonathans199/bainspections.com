<template>
<div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators display-none-2">
            <!-- <li v-for="po in pos" :key="po.id" :data-target="'#carouselExampleIndicators'" :data-slide-to="po"></li> -->
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="hero-btn">
            <input type="button" value="REQUEST A QUOTE">
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="layer-slider"></div>
                <img class="d-block w-100" src="@/assets/img/slide/slideHero0.png" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                   <h1>{{text.title}}</h1>
                    <p>{{text.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100" src="@/assets/img/slide/slideHero1.png" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>{{text.title}}</h1>
                    <p>{{text.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100" src="@/assets/img/slide/slideHero2.png" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>{{text.title}}</h1>
                    <p>{{text.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100" src="@/assets/img/slide/slideHero3.png" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>{{text.title}}</h1>
                    <p>{{text.description}}</p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="layer-slider"></div>
                <img class="d-block w-100" src="@/assets/img/slide/slideHero4.png" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>{{text.title}}</h1>
                    <p>{{text.description}}</p>
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
</div>
</template>

<script>
export default {
  name: 'SlideHome',
  data () {
    return {
      text: {
          title: "SOUTH FLORIDA’S",
            description: "LEADING BUILDING INSPECTION COMPANY"
          
      }
  }
}
}
</script>