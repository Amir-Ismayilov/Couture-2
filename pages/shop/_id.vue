<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
    </section>

    <!-- Product Single Area -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="common_banner_text">
            <h2 style="margin-top: 30px">Новости</h2>
            <!--              <b-breadcrumb-->
            <!--                  :items="breadcrumbItems"-->
            <!--                  class="bg-transparent"-->
            <!--              ></b-breadcrumb>-->
          </div>
        </div>
      </div>
    </div>

    <section id="main_section_news">

      <div class="container">
        <h1 v-html="getNews.title" class="bashliq"></h1>
        <div v-html="getNews.created_at" class="custom_date"></div>


        <div style="position: relative">
          <img src="@/assets/img/left-quote.png" class="custom_quote_left">
          <div v-html="getNews.citation" class="citation"></div>
          <img src="@/assets/img/right-quote-sign.png" class="custom_quote_right">
        </div>
      </div>


      <div class="main_info">
        <div class="container">
          <div v-html="getNews.description" class="description"></div>
          <div style="display: flex;justify-content: space-between; align-items: center;margin-bottom: 30px">

            <nuxt-link v-if="current_index!==0" :to="/news/+this.news[this.current_index-1].id" class="btn_work"
            >
              < НАЗАД
            </nuxt-link>

            <a v-else href="javascript:void(0)"
               class="btn_not_work"
               disabled="disabled"> < НАЗАД
            </a>

            <nuxt-link v-if="current_index!==this.news.length-1" :to="/news/+this.news[this.current_index+1].id"
                       style="padding: 5px 15px;border: 1px solid gray;border-radius: 10px" class="btn_work">
              СЛЕДУЮЩИЙ >
            </nuxt-link>

            <a v-else href="javascript:void(0)"
               class="btn_not_work"
               disabled="disabled">СЛЕДУЮЩИЙ >
            </a>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import blogItem1 from "@/components/blog/BlogItem1";
import news from "@/pages/news/index";
import {mapState} from "vuex";

export default {
  components: {
    blogItem1
  },
  data() {
    return {
      current_index: 0,
      variation_product: {
        id: 0,
        variation_id: 0,
        variation_name: "",
        created_at: "",
        updated_at: "",
        image: null,
      },
      productId: "",
      // Breadcrumb Items Data
      // breadcrumbItems: [
      //   {
      //     text: "Новости",
      //     to: "/",
      //   },
      //   {
      //     text: "Новости",
      //     to: "/news",
      //   },
      // ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,
      cartProduct: {},
      compareProduct: {},
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },

    };
  },
  computed: {
    ...mapState({news: state => state.productsNew.news}),
    ...mapState({blogLoadStatus: state => state.productsNew.loading}),
  },
  mounted() {
    // console.log(this.variation_product)
    // For scroll page top for every Route
    // this.current_index= this.news.map(function(x) {return x.id; }).indexOf(this.$route.params.id);
    this.current_index = this.news.findIndex(item => item.id === parseInt(this.$route.params.id));

    console.log(this.current_index)
    console.log(this.$route.params.id)
    console.log(this.news.length)
    console.log(this.news[this.current_index - 1])
    window.scrollTo(0, 0);
  },
  async asyncData({store, route}) {
    await store.dispatch('productsNew/getNews')
    let response = await store.dispatch('productsNew/getNewsByIdApi', route.params.id)
    return {getNews: response}
  },
}
</script>

<style scoped>

</style>