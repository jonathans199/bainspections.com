<template>
  <div class="wrap-footer">
    <div class="wrap-logo-footer">
      <div class="logo-ba">
        <img src="@/assets/img/logos/footerLogo.png">
      </div>
      <div class="nav-menu-footer">
        <ul>
          <li class="nav-item" v-for="items in menu" :key="items.id"><a>{{items.item}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'Header',
  data () {
    return {
    
      menu: [
        {item: "ABAUT"},
        {item: "OUR STORY"},
        {item: "WHY CHOOSE ALLIED?"},
        {item: "TESTIMONIALS"},
        {item: "CLIENTS"},
        {item: "HONORS"},
        {item: "CHARITIES"},
        {item: "LICENSES"},
        {item: "CONTACT US"}]
    }
  }
}

</script>
