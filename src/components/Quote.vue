<template>
<div id="modal-wrap" class="modal-display-none modal-position column-center">
  <div class="wrap-modal-form column-start">
    <div class="position-absolute width-10 close-x">
          <span @click="closeModal('modal-wrap')" class="width-10 position-relative">x</span>
    </div>
      <div class="modal-form-title width-100 row-center">
        <h3 class="width-30">REQUEST QUOTE</h3> 
      </div>
      <div class="modal-form width-100 padding-left-right ">
        <form @submit="submitForm" class="">
          <div class="row-left-top width-100 ">
            <div class="wrap-item column-left  width-25">
              
              <div class="modal-form-item width-100 column-left"> 
                <h3 class="width-100" for="">Inspection Date</h3>
                <input v-model="form.date" type="date" class="input-date">
              </div>
              <div class="modal-form-item width-100  column-left ">
                <h3>Property Type</h3>
                <div class="form-item row-left width-30 ">
                  <input v-model="form.residencial" type="checkbox" name="" id="">
                  <label for="">RESIDENTIAL</label>
                </div>
                <div class="form-item row-left  width-100 ">
                  <input v-model="form.commercial"  type="checkbox" name="" id="">
                  <label for="">COMMERCIAL</label>
                </div>
                <div class="form-item row-left width-100">
                  <input v-model="form.consulting"  type="checkbox" name="" id="">
                  <label for="">CONSULTING</label>
                </div>
              </div>
            </div>
            <div class="column-left width-25 ">
              <h3>Contact Information</h3>
              <div class="form-item row-left  width-100 display-flex">
                <!-- <label for="">Name</label> -->
                <input v-model="form.name"  type="text" value="" placeholder="Name">
              </div>
              <div class="form-item row-left  width-100 display-flex">
                <!-- <label for="">Last Name</label> -->
                <input v-model="form.email"  type="text" value="" placeholder="Email">
              </div>
              <div class="form-item row-left  width-100 display-flex">
                <!-- <label for="">Last Name</label> -->
                <input v-model="form.phone"  type="text" value="" placeholder="Phone Number">
              </div>
            </div>
            <div class="column-left width-50 ">
              <h3>Address of property to be Inspected</h3>
              <div class="row-left width-100">
                <div class="column-left width-50">
                  <div class="form-item row-left  width-100 display-flex">
                    <!-- <label for="">Last Name</label> -->
                    <input v-model="form.address1"  type="text" value="" placeholder="Address">
                  </div>
                  <div class="form-item row-left  width-100 display-flex">
                    <!-- <label for="">Last Name</label> -->
                    <input v-model="form.address2"  type="text" value="" placeholder="Address">
                  </div>
                  <div class="form-item row-left  width-100 display-flex">
                    <!-- <label for="">Last Name</label> -->
                    <input v-model="form.zipcode"  type="text" value="" placeholder="zip-code">
                  </div>
                </div>
                <div class="row-left width-50">
                    <textarea v-model="form.additionalinfo" type="text" value="" placeholder="Additional Information"></textarea>
                </div>
              </div> 
            </div>
          </div>
          <div class="row-left width-100">
            <div class="modal-form-item column-center width-100 ">
              <div class="modal-form-title row-center "><h3>INSPECTION DETAILS</h3></div>
             <hr>
              <div class="row-left width-100 flex-space-around">
                  <div class="form-item column-left display-flex width-30">
                    <h3>RESIDENTIAL</h3>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.houseinsp"  type="checkbox" name="" id="">
                      <label for="">House Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.townhouseinsp"  type="checkbox" name="" id="">
                      <label for="">Townhouse Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.insuranceinsp"  type="checkbox" name="" id="">
                      <label for="">Insurance Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.newconstructioninsp"  type="checkbox" name="" id="">
                      <label for="">New Construction Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.roofinsp"  type="checkbox" name="" id="">
                      <label for="">Roof Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.consprogressinsp"  type="checkbox" name="" id="">
                      <label for="">Construction Progress Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                      <input v-model="form.certifiuse"  type="checkbox" name="" id="">
                      <label for="">Certificate Of Use</label>
                    </div>
                  </div>
                  <div class="form-item column-left display-flex- width-30">
                    <h3>COMMERTIAL</h3>
                    <div class="form-item row-left  width-100 display-flex">
                    <input v-model="form.fortyyearinspresidential"  type="checkbox" name="" id="">
                    <label for="">40 Year Commercial "Residential" Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                    <input v-model="form.fortyyearinspcomercial"  type="checkbox" name="" id="">
                    <label for="">40 Year Commercial Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                    <input v-model="form.fortyyearreinsp"  type="checkbox" name="" id="">
                    <label for="">40 Year Reinspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                    <input v-model="form.illumiinsp"  type="checkbox" name="" id="">
                    <label for="">Illumination Ispection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                    <input v-model="form.commercialinspe"  type="checkbox" name="" id="">
                    <label for="">Commercial Inspection</label>
                    </div>
                    <div class="form-item row-left  width-100 display-flex">
                    <input v-model="form.resrvestudy"  type="checkbox" name="" id="">
                    <label for="">Reserve Study</label>
                    </div>
                  </div>
                  <div class="column-left width-30">
                    <div class="form-item column-left display-flex width-100">
                      <h3>GENERAL CONSULTING</h3>
                      <div class="form-item row-left  width-100 display-flex">
                        <input v-model="form.expertconsultan"  type="checkbox" name="" id="">
                        <label for="">Expert Witness consulting</label>
                      </div>
                      <div class="form-item row-left  width-100 display-flex">
                        <input v-model="form.profconsultan"  type="checkbox" name="" id="">
                        <label for="">Profesional Consulting Service</label>
                      </div>
                    </div>
                    <div class="form-item column-left display-flex width-100">
                      <h3>RESIDENTIAL CONSULTING</h3>
                      <div class="form-item row-left  width-100 display-flex">
                        <input v-model="form.expertwitconsultan"  type="checkbox" name="" id="">
                        <label for="">Expert Witness consulting</label>
                      </div>
                      <div class="form-item row-left  width-100 display-flex">
                        <input v-model="form.profconsultan"  type="checkbox" name="" id="">
                        <label for="">Profesional Consulting Service</label>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="btn-send row-center padding-top">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
</div>
</div>

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
        closeModal(id){
          var modal=document.getElementById(id);
          if(modal.classList.contains('modal-display-flex'))
            {
              modal.classList.remove('modal-display-flex');
              modal.classList.add('modal-display-none');
            }
        },
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