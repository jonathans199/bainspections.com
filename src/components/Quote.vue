<template>
<div @click="closeModal('modal-wrap')" id="modal-wrap" class="modal-display-none modal-position">
  <h1 class="modal-title">MODAL</h1>
</div>
</template>
  

<script>
export default {
  methods: {
    closeModal(id){
      var modal=document.getElementById(id);
    if(modal.classList.contains('modal-display-flex'))
        {
            modal.classList.remove('modal-display-flex');
            modal.classList.add('modal-display-none');
        }
    }
  }
}
</script>
