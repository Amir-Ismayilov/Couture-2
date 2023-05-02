<template>
  <div class="main_footer">
    <div class="container">
      <whatsapp-button></whatsapp-button>
      <div class="row">
        <div class="col-xs-6 col-sm-4">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href="#">info@sophiecouture.com</a></li>
            <li><a href="#">Mobile: (+994) 51 313 45 35</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-sm-4">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return & Refund Shipping Policy</a></li>
          </ul>
        </div>

        <div class="col-xs-12 col-sm-4">
          <ul class="icons_group">
            <li><a href="#"><img
                src="https://sophiecouture.com/storage/external_link/icon/gwTVBqLs81q8vJ2nvQztnPEDSdcgcoZ6.svg"
                alt="instagram"></a>
            </li>
            <li><a href="#"><img
                src="https://sophiecouture.com/storage/external_link/icon/BmP4RNjJJTVyQJmeMOgjKMbCUiaFVyOO.svg" alt="icon"></a>
            </li>
            <li><a href="#"><img
                src="https://sophiecouture.com/storage/external_link/icon/Z1rtOw2hQXmV3slkCiAPc0MLRKeO3bIk.svg" alt="youtube"></a>
            </li>
            <li><a href="#">
              <img src="https://sophiecouture.com/storage/external_link/icon/Zy0VdAvM6qUfo8SexTJnJEqjPFxaeNd6.svg"
                   alt="facebook">
            </a>
            </li>
          </ul>
          <div><a href="#">© 2023, Sophie Couture</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhatsappButton from "@/components/Whatsapp-button";
export default {
  name: "Footer-Component",
  components : { WhatsappButton }
}
</script>

<style scoped>
.main_footer {
  padding: 25px 0 30px;
  min-height: 20vh;
  background: #000;
}

h3 {
  color: #fff;
  font-weight: 500;
}

a {
  color: #ffffff !important;
  font-weight: 300;
}

.icons_group {
  display: flex;
  align-items: flex-end;
  gap: 40px;
}

img {
  filter: invert(1);
  width: 24px;
}
</style>