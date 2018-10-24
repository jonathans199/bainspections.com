<template>
  <div class="wrap-nav">
    <div class="wrap-nav-info">
      <div class="nav-info-item">
        <h2 v-for="info in contactInfo" :key="info.id" >{{info.contact}}<span>/</span> </h2>
        <select v-model="selected" value="ENGLISH">
          <option value="en">ENGLISH</option>
          <option value="sp">ESPAÑOL</option>
        </select>
      </div>
      <div class="nav-info-icons">
        <img v-for="pic in mediaPics" :key="pic.id" :src="pic.media">
      </div>
    </div>
    <div class="wrap-logo-menu">
      <div class="logo-ba">
        <img src="@/assets/img/logos/logoBA.png">
      </div>
      <div class="burger-menu display-burger" @click="showMenu('nav-me')">
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div class="nav-menu display-none" id="nav-me">
        <ul>
          <li class="nav-item" v-if="selected == 'sp'"  v-for="items in menuSp" :key="items.id"><a>{{items.item}}</a></li>
          <li class="nav-item" v-if="selected =='en'" v-for="items in menuEn" :key="items.id"><a>{{items.item}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mediaPhone from '@/assets/img/icons/mediaPhone.png'
import mediaFace from '@/assets/img/icons/mediaFace.png'
import mediaEmail from '@/assets/img/icons/mediaEmail.png'
export default {
  name: 'Header',
  data () {
    return {
      selected: 'en',
      contactInfo: [ 
        {contact: 'TEL:305-345-3456'},
        {contact: 'INFO@BAINSPECTIONS.COM'}
      ],
      mediaPics: [  
        {media: mediaPhone},
        {media: mediaFace},
        {media: mediaEmail}
      ],
      menuEn : [
        {item: "INSPECTIONS"},
        {item: "TESTIMONIAL"},
        {item: "CLIENTS"},
        {item: "LICENSES"},
        {item: "ABOUT"},
        {item: "CONTACT US"}],
      menuSp: [
        {item: "INSPECCIONES"},
        {item: "TESTIMONIOS"},
        {item: "CLIENTES"},
        {item: "LICENCIAS"},
        {item: "NOSOTROS"},
        {item: "CONTACTANOS"}]
    }
    
    },
    methods: {
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


