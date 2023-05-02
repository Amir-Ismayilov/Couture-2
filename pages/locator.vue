<template>
  <div>
    <Breadcrumb :crumbs="crumbs" @selected="selected"/>
    <div class="container">
      <div class="row">
        <p class="locator_main_text">Sophie Couture flagship stores are located in Azerbaijan, Russia and United Arab
          Emirates. We also sell our
          dresses at some of the world’s most exclusive and luxurious retailers, to ensure you have the
          highest-quality
          experience while searching for your perfect wedding dress. Here you can find the full list of Sophie Couture
          stores.
        </p>

        <div class="cart">
          <div class="container">
            <div class="row">
              <img class="col-xs-12 col-sm-6"
                   src="https://sophiecouture.com/storage/store_locator/address_1/mtuvvPjMJgLspMWdFGBKWGcQ5l1IJ3sx.jpg">
              <div class="col-xs-12 col-sm-6 cart_info">
                <h4>Baku, Azerbaijan</h4>
                <p>Yusif Mammadaliyev 16,
                  2nd Floor</p>
                <p>--</p>
                <p>Mon - Sun: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cart">
          <div class="container">
            <div class="row">
              <img class="col-xs-12 col-sm-6"
                   src="https://sophiecouture.com/storage/store_locator/address_1/mtuvvPjMJgLspMWdFGBKWGcQ5l1IJ3sx.jpg">
              <div class="col-xs-12 col-sm-6 cart_info">
                <h4>Baku, Azerbaijan</h4>
                <p>Yusif Mammadaliyev 16,
                  2nd Floor</p>
                <p>--</p>
                <p>Mon - Sun: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cart">
          <div class="container">
            <div class="row">
              <img class="col-xs-12 col-sm-6"
                   src="https://sophiecouture.com/storage/store_locator/address_1/mtuvvPjMJgLspMWdFGBKWGcQ5l1IJ3sx.jpg">
              <div class="col-xs-12 col-sm-6 cart_info">
                <h4>Baku, Azerbaijan</h4>
                <p>Yusif Mammadaliyev 16,
                  2nd Floor</p>
                <p>--</p>
                <p>Mon - Sun: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../src/components/Breadcrumb';

export default {
  name: "locatorPage",
  components: {
    Breadcrumb
  },
  data() {
    return {
      crumbs: ['Home', 'Locator'],
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
.locator_main_text {
  padding: 0 20px;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 4rem;
}

.cart {
  margin: 25px 0;
}

.cart_info {
  padding-left: 40px;
}

.cart_info > p {
  font-size: 16px;
  line-height: 24px;
}
</style>