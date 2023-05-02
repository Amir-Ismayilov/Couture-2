<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- One structure product cart -->
        <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(product,index) in products" :key="index">
          <ProductBox :product="product" :index="index"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import { data } from "../../data/product.json";
import ProductBox from "@/components/product-box/ProductBox";

export default {
  name: "shopPage",
  components: {ProductBox},
  data() {
    return {
      products: data
    }
  },
}
</script>

<style>
.list_item {
  padding: 10px 5px;
  border: 2px solid black;
}
</style>