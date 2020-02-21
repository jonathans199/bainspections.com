<template>
<!-- SEC-B -->

  <div class="sec-b" id="sec-b">
    <div id="wrap-carousel-sec-b">
        <div id="carouselControls" class="carousel margin-top-0 slide" data-ride="carousel">
            
            <div class="carousel-inner">
                <div class="carousel-item carousel-content active">
                    <img class="d-block w-100" src="./../assets/img/slideContent/slideContent07.png" alt="First slide">
                    <div class="carousel-caption text-center-ir  d-md-block">
                        <h1>{{textSlider2[0].title}}</h1>
                        <p>{{textSlider2[0].text}}</p>
                    </div>
                </div>
                <div class="carousel-item carousel-content">
                    <div class="layer-slider-content"></div>
                    <img class="d-block w-100" src="./../assets/img/slideContent/slideContent4.jpg" alt="Second slide">
                    <div class="carousel-caption text-center-ir  d-md-block">
                        <h1>{{textSlider2[1].title}}</h1>
                        <p>{{textSlider2[1].text}}</p>
                    </div>
                </div>
                <div class="carousel-item carousel-content">
                    <img class="d-block w-100" src="./../assets/img/slideContent/slideContent5.jpg" alt="Third slide">
                    <div class="carousel-caption text-center-ir  d-md-block">
                        <h1>{{textSlider2[2].title}}</h1>
                        <p>{{textSlider2[2].text}}</p>
                    </div>
                </div>
                <div class="carousel-item carousel-content">
                    <div class="layer-slider-content"></div>
                    <img class="d-block w-100" src="./../assets/img/slideContent/slideContent6.jpg" alt="Third slide">
                    <div class="carousel-caption text-center-ir  d-md-block">
                        <h1>{{textSlider2[3].title}}</h1>
                        <!-- <p>{{textSlider2[0].text}}</p> -->
                    </div>
                </div>
            
            </div>
            <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- <div class="wrap-sec-b-bottom">
            <div class="sec-b-bottom-left">
                <div class="wrap-sec-b-text">
                    <div class="width-80">
                        <h2 data-aos="fade-down">Journey out of wreckage of Hurricane Andrew enters <strong class="strong-red"> 24th year of serving South Florida</strong></h2>
                        <p>It’s was 2:45AM on August 24, 1992, 
                            and John Micali was hunkered down 
                            straining to listen to updates on
                              a battery-powered radio in his south 
                              Miami condo. He could barely hear over
                              the whistling sounds of electrical outlets, 
                              roaring wind and thunder claps. Flashes of lightning pierced 
                              through the darkness and the building shook. Outside, 140 mph 
                              winds devastated the landscape. Micali recalls “When the wind stopped 
                              and the sun came up, I opened the door, and everything was destroyed.
                                I could see for miles. I knew life would never be the same.”</p>
                        <p>Nothing from his University of Florida education, 
                            nor his construction experience could have prepared
                              Micali for the devastation he would soon encounter. 
                              By December, he found himself inspecting and rebuilding
                              damaged homes in Country Walk. The evolution that 
                              transpired afterwards has taken Micali down a career
                                path that has spanned over 2 decades. 
                                “I found myself assessing buildings and writing 
                                reports on the damages found as part of the bidding 
                                and contracting process. The clients used my reports 
                                to collect on insurance and determine the scope of the 
                                repairs they needed. </p>
                        <div data-aos="zoom-in" class="sec-b-left-btn">
                            <input type="button" value="READ MORE" >
                        </div>
                    </div>
                </div>
            
                <div class="sec-b-bottom-right">
                    <img src="./../assets/img/content/contentPic1.png" alt="">
                </div>
            </div>

        </div> -->
    </div>
  </div>
</template>
<script>
import Inspections from '../components/Inspections'
export default {
    name: 'Content',
    components: {
        Inspections
    },
  data () {
    return {
        clientsA: [ 
            "Adorno & Yoss ",
            "Air Jamaica",
            "Anthony Abraham Chevrolet",
            "Archdiocese of Miami",
            "Assurant",
            "AutoNation",
            "Avatar Real Estate",
            "BB&T",
            "Bank of America",
            "Banyan Productions", 
            "Barry University", 
            "Burn Notice", 
            "Capital Rental Agency",
            "Coinco", 
            "Coldwell Banker", 
            "Country Club of Miami",
            "EWM Realtors", 
            "Episcopal Diocese of South Florida",
            "EquityOne", ],
        
        clientsB: [
            "Federated Department Stores",
            "1st National Bank of South Florida",
            "Gator Investments",
            "Gibraltar Private Bank",
            "Greenberg Traurig Law",
            "HGTV",
            "Habitat For Humanity",
            "Holland and Knight",
            "lsriel Ponzoli Keller",
            "Jones Lang Lasalle",
            "Katsikos Group",
            "Keller & Simpson",
            "Keller Williams",
            "Keyes Realtors",
            "Landmark Bank",
            "Lean Medical Centers",
            "Macy’s",
            "Marcus & Millichap",
            "Mas Tec"
        ],
        clientsC: [
            "McDonalds",
            "Miami Beach Housing Authority",
            "Miami Police Benevolent Association",
            "Norwegian Cruise Lines",
            "Ocean Bank",
            "REMAX",
            "Royal Caribbean Cruises",
            "Seaside Bank & Trust",
            "Shuns & Bowen",
            "South Beach Condos for Sale",
            "TECO Energy",
            "Terranova",
            "The American Legion",
            "US Century Bank",
            "United Cerebral Palsy",
            "University of Miami",
            "Velda Farms" 
        ],
        textSlider2: [
           { title: "COMMERCIAL & RESIDENTIAL",
            text: "BUILDING INSPECTION SERVICES" },
            { title: "B&A ENGINEERING INSPECTION SERVICES",
            text: "HAS BEEN FEATURED ON NUMEROUS TELEVISION SHOWS ON THE HGTV NETWORK" },
            { title: "THE LEADER IN SOUTH FLORIDA HOME INSPECTIONS"}

        ]
    }
  }
}

</script>
