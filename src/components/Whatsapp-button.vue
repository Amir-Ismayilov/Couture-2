<template>
  <div>
    <a class="float-button c_flex" target="_blank" href="#">
      <span>Ask Something Now</span>
      <img class="whatsapp_icon" src="../assets/images/whatsapp.svg" alt="whatsapp_icon">
    </a>
  </div>
</template>

<script>
export default {
  name: "Whatsapp-button"
}
</script>

<style scoped>
.float-button {
  position: fixed;
  padding: 10px;
  bottom: 30px;
  right: 30px;
  color: #fff;
  background-color: #25D366;
  border-radius: 25px 30px 5px 25px;
  z-index: 100;
  font-size: 16px;
  animation: whatsapp-animation 0.5s ease-in-out;
  box-shadow: 1px 2px 5px 2px rgba(30, 30, 30, 0.3);
  transition: all 0.3s ease-out;
}

.float-button:hover {
  background-color: #128C7E;
  color: #fff;
}

.whatsapp_icon {
  width: 40px !important;
  filter: invert(1);
  padding-right: 5px;
  padding-left: 5px;
  margin-left: 10px;
  transform: rotate(265deg);
}

@keyframes whatsapp-animation {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%
  }
}

@media screen and (max-width: 545px) {
  span {
    display: none;
  }

  .float-button {
    padding: 20px;
    right: 20px !important;
    width: 60px !important;
    border-radius: 25px 30px 5px 25px !important;
    box-shadow: 1px 2px 5px 2px rgba(30, 30, 30, 0.3);
    bottom: 15px;
  }

  .whatsapp_icon {
    width: 30px !important;
    padding: 0;
    margin-left: 0;
    transform: rotate(0deg);
  }
}
</style>