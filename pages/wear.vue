<template>
  <div>
    <Breadcrumb :crumbs="crumbs" @selected="selected"/>

  </div>
</template>

<script>
import Breadcrumb from '../src/components/Breadcrumb';

export default {
  name: "wearPage",
  components: {
    Breadcrumb
  },
  data() {
    return {
      crumbs: ['Home', 'Ready-to-wear'],
    }
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
}
</script>