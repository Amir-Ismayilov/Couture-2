<template>
  <div>
    <Breadcrumb :crumbs="crumbs" @selected="selected"/>
    <div class="container-fluid">
      <div class="row">
        <div class="img_container">
          <img src="../src/assets/images/main_img_about.jpg" alt="img_about">
        </div>
      </div>
    </div>

    <div class="container-fluid main_container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 img_founder">
            <img src="../src/assets/images/img_founder.jpg" alt="img_founder">
          </div>

          <div class="col-xs-12 col-sm-6 col-md-8 main_container_info">
            <h1>Gunel Babayeva</h1>
            <h5>Creative Director Of Sophie Couture</h5>

            <h5 class="about_couter">About Couture</h5>
            <p>Ms. Gunel Babayeva, a native of Azerbaijan born in 1990 on August 8, has accomplished what most could
              only
              dream of before the age of 30.<br><br>

              As a wife and a mother to two young daughters, she has built upon an established background of educational
              and professional excellence in the fields of economics and finance to become what she is now—a globally
              renowned couturier and fashion dynamo.<br><br>

              Among her many notable roles, the young distinguished fashion designer is perhaps most famously known as
              the
              Founder and Creative Director of Sophie Couture, a fashion powerhouse in the realm of women’s evening and
              bridal gowns with ateliers in Baku, Azerbaijan and Dubai, United Arab Emirates.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="second_section">
          <h2>SOPHIE COUTURE</h2>
          <p>Sophie Couture was founded in 2015. The young brand captured the hearts of customers by not only unique and
            sophisticated designs, but also by feminine and elegant silhouettes. Every dress is an embodiment of mastery
            and pure beauty that occurred from devoted work and imaginative vision.</p>
          <hr>
          <h4>Seen on</h4>
          <p>Sophie Coture is known for designing dresses for more than a few celebrities, including Mickey Guyton,
            Barbara Palvin , Meagan Good, Ani Lorak, Regina Todarenko and etc.</p>
        </div>
      </div>
    </div>
    <carousel></carousel>
  </div>
</template>

<script>
import carousel from "@/components/Carousel";
import Breadcrumb from '../src/components/Breadcrumb';

export default {
  name: "aboutPage",
  components: {
    carousel,
    Breadcrumb
  },
  data() {
    return {
      crumbs: ['Home', 'About us'],
    }
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
}
</script>

<style scoped>
.main_container {
  background: #f2f2f2;
  padding: 6rem 0;
}

.about_couter {
  margin-top: 6rem;
}

.img_container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5);
}

.img_founder img {
  max-width: 290px;
}

.second_section {
  padding: 3rem 0;
}

.second_section > p {
  padding-bottom: 20px;
}
</style>