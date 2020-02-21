<template>
  <div class="wrap-nav" id="Home">
    <div class="wrap-nav-info">
      <div class="nav-info-item">
        <h2 v-for="info in contactInfo" :key="info.id" >{{info.contact}}<span></span> </h2>
        <!-- <select v-model="selected" value="ENGLISH">
          <option value="en">ENGLISH</option>
          <option value="sp">ESPAÑOL</option>
        </select> -->
      </div>
      <div class="nav-info-icons">
        <a v-for="pic in mediaPics" :key="pic.id" :href="pic.link"><img :src="pic.media"></a>
      </div>
    </div>
    <div class="wrap-logo-menu">
      <div class="logo-ba">
        <img data-aos="flip-left" src="@/assets/img/logos/logoBA.png">
      </div>
      <div class="burger-menu display-burger" @click="showMenu('nav-me')">
        <input id="input-burger" type="checkbox" >
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div class="nav-menu display-none" id="nav-me">
        <ul data-aos="fade-left">
          <li class="nav-item" v-if="selected == 'sp'"  v-for="items in menuSp" :key="items.id">
            <a @click="goToByScroll(items.aTag)" class="nav-link" href="javascript:void(0)" :target="items.target">{{items.item}}</a>
          </li>
          <li class="nav-item" v-if="selected =='en'" v-for="items in menuEn" :key="items.id">
            <a @click="goToByScroll(items.aTag)" class="nav-link-header" href="javascript:void(0)">{{items.item}}</a>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</template>

<script>
import $ from 'jquery'
import mediaPhone from '@/assets/img/icons/mediaPhone.png'
import mediaFace from '@/assets/img/icons/mediaFace.png'
import mediaEmail from '@/assets/img/icons/mediaEmail.png'
export default {
  name: 'Header',
  data () {
    return {
      selected: 'en',
      contactInfo: [ 
        {contact: 'TEL:786-473-5813'},
        {contact: 'rbarreiro.pe@gmail.com'}
      ],
      mediaPics: [  
        {media: mediaPhone, link: 'tel: 7864735813', target: ''},
        {media: mediaFace, link: 'https://www.facebook.com', target: ''},
        {media: mediaEmail, link: 'mailto:rbarreiro.pe@gmail.com', target: '_blank'}
      ],
      menuEn : [
        {item: "INSPECTIONS",
        aTag: "sec-b"},
        // {item: "TESTIMONIAL",
        // aTag: "sec-d"},
        {item: "LICENSES",
        aTag: "sec-f"},
        // {item: "CLIENTS",
        // aTag: "sec-n"},
        {item: "ABOUT",
        aTag: "sec-a"},
        {item: "CONTACT US",
        aTag: "sec-contact"}],
      menuSp: [
        {item: "INSPECCIONES", aTag: "sec-insp"},
        {item: "TESTIMONIOS", aTag: "sec-d"},
        {item: "CLIENTES", aTag: "sec-n"},
        {item: "LICENCIAS", aTag: "sec-f"},
        {item: "NOSOTROS", aTag: "sec-a"},
        {item: "CONTACTANOS", aTag: "sec-contact"}],
      sectionsName: [
        {item: "sec-insp"},
        {item: "sec-a"},
        {item: "sec-b"},
        {item: "sec-c"},
        {item: "sec-e"},
        {item: "sec-contact"}]
      }
    },
    
    mounted(){
      let section = this.$route.query.section
      if(!section) section = 'Home'
      this.goToByScroll(section)   
    },

    methods: {
      goToByScroll(id) {
        console.log(id)
        $('html,body').animate(
            { scrollTop: $('#' + id).offset().top },
            'slow'
        )
      },

      showMenu(id){
        var ele= document.getElementById(id)
        if(ele.classList.contains('display-none')){
          ele.className = ele.className.replace(/\bdisplay-none\b/g, "display-fl");
        }else if(!ele.classList.contains('display-none')){
          ele.className = ele.className.replace(/\bdisplay-fl\b/g, "display-none");
        }
      }
  }
}
</script>
