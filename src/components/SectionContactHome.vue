 
 <template>
 <!-- SECTION CONTACT -->
  <section class="sec-contact" id='sec-contact'>
      <div class="sec-contact-left">
          
          <form @submit="submitForm" data-aos="flip-left">
              <h1>STAY IN TOUCH</h1>
              <label>E-mail</label>
              <input v-model="form.email" 
                      placeholder="Email Address">
              <label>Name: *</label>
              <input v-model="form.name" placeholder="Complete name"> 
              <label>Phone Number: *</label>
              <input v-model="form.phone" placeholder="(+57)">
              <label>Message: *</label>
              <textarea v-model="form.message"  placeholder="Type" ></textarea>
              <button type="submit">SEND</button>
          </form>
      </div>
      <div class="sec-contact-right">
      <div data-aos="flip-right" class="wrap-sec-contact-right">
          <div class="sec-contact-item">
              <div class="wrap-sec-contact-item">
                  <img src="./../assets/img/icons/iphonIconB.png">
                  <h2>Phone</h2>
              </div>
              <p>Tel: 786-473-5813</p>
              
          </div>
          <div class="sec-contact-item">
              <div class="wrap-sec-contact-item">
                  <img src="./../assets/img/icons/emailIconB.png">
                  <h2>Mailing Address</h2>
              </div>
              <p>15053 SW 57th street, Miami, FL 33193</p>
          </div>
          <div class="sec-contact-item">
              <div class="wrap-sec-contact-item">
                  <img src="./../assets/img/icons/iphonIconB.png">
                  <h2>Email</h2>
              </div>
              <a href="mailto:rbarreiro.pe@gmail.com">rbarreiro.pe@gmail.com</a>
              
          </div>
          <div class="sec-contact-item">
              <div class="wrap-sec-contact-item">
                  <img src="./../assets/img/icons/iphonIconB.png">
                  <h2>Web Address</h2>
              </div>
              <a href="mailto:rbarreiro.pe@gmail.com">www.bainspections.com</a>
              
          </div>
          <div class="sec-contact-item">
            <div class="teIR">
              <div class="wrap-sec-contact-img">
                <a href="tel:7864735813" class="socialmedia-link"><img src="./../assets/img/icons/iphonIconB.png" ></a>
                <a href="https://www.facebook.com" class="socialmedia-link" target="_blank"><img src="./../assets/img/icons/faceIconB.png"></a>
                <a href="mailto:rbarreiro.pe@gmail.com" class="socialmedia-link"><img src="./../assets/img/icons/emailIconB.png"></a>
              </div>
            </div>
          </div>
      </div>
      </div>
  </section>

</template>
<script>
    import * as config from '@/config/settings'
    import axios from 'axios'
    
    export default {
        data() {
            return {
                form: {}
            }
        },
        methods: {
            submitForm(evt) {
                evt.preventDefault()
                if (this.form.email || this.form.name) {
                    this.loading = true
                    axios.post(config.defaultURL + config.storeUUID + '/client/forms?type=contact', this.form)
                        .then(response => {
                            if (response.status == 200) {
                                this.loading = false
                                this.form = {}
                                this.$toasted.show('Contact sent', {
                                    position: 'top-right',
                                    duration: 5000,
                                    type: 'success',
                                    closeOnSwipe: true
                                })
                            }
                        })
                        .catch((error) => {
                            this.loading = false
                            error.response.data.map((m, index) => {
                                this.$toasted.show(m, {
                                    position: 'top-right',
                                    duration: 5000,
                                    type: 'error',
                                    closeOnSwipe: true
                                })
                            })
                        })
                } else {
                    this.$toasted.show('Missing fields', {
                        position: 'top-right',
                        duration: 5000,
                        type: 'error',
                        closeOnSwipe: true
                    })
                }
    
            }
        }
    
    }
</script>
