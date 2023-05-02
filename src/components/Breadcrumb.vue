<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="breadcrumb_container">
        <div class="container">
          <div class="row">
            <ol class="breadcrumb">
              <li
                  v-for="(crumb, ci) in crumbs"
                  :key="ci"
                  class="breadcrumb-item align-items-center"
              >
          <span class="btn btn-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
            {{ crumb }}
          </span>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Breadcrumb",
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit('selected', crumb);
    },
  },
};
</script>

<style scoped>
.btn-link {
  color: black !important;
}

.breadcrumb_container {
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 3.25rem;
  background: #e2e2e2;
}

nav {
  align-items: center;
}

ol {
  padding: 0;
}

.breadcrumb {
  background: none;
  margin: 0px !important;
}

span:hover {
  text-decoration: none;
}
</style>