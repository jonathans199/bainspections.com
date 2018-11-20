<template>
  <div class="wrap-footer">
    <div class="wrap-logo-footer">
      <div class="logo-ba-footer">
        <a  @click="goToByScroll('Home')" href="javascript:void(0)" ><img src="@/assets/img/logos/footerLogo.png"></a>
      </div>
      <div class="nav-menu-footer">
        <ul >
          <li class="nav-item" v-for="items in menu" :key="items.id"><a>{{items.item}}</a></li>
        </ul>
      </div>
    </div>
     <div @click="goToByScroll('Home')" id="to-top-btn">
        <!-- <img src="@/assets/img/toTopIcon.png"> -->
        <button  id="myBtn" title="Go to top">Top</button>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  
  name: 'Header',
  data () {
    return {
    
      menu: [
        {item: "INSPECTIONS"},
        {item: "LICENSES"},
        {item: "ABOUT"},
        {item: "CLIENTS"},
        {item: "CONTACT US"}]
    }
  },
   methods: {
      goToByScroll(id) {
        console.log(id)
        $('html,body').animate(
            { scrollTop: $('#' + id).offset().top },
            'slow'
        )
      },
     scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('to-top-btn').style.display = 'block';
      } else {
          document.getElementById('to-top-btn').style.display = 'none';
      }
    }
}
}
</script>
