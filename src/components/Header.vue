<template>
  <div class="main_header">
    <div class="container-fluid">
      <div class="row">
        <div class="main_affix c_flex">Temporarily, online orders are available only through WhatsApp</div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <nav class="custom_nav">
          <router-link to="/"><img class="main_logo" src="../assets/images/logo.svg" alt="main-logo"></router-link>
          <input type="checkbox" id="nav" class="hidden"/>
          <label for="nav" class="nav-open"><i></i><i></i><i></i></label>

          <div class="nav-container">
            <ul class="menu_list">
              <li>
                <router-link to="/shop">SHOP</router-link>
              </li>
              <li>
                <router-link to="/couture">COUTURE</router-link>
              </li>
              <li>
                <router-link to="/wear">READY TO WEAR</router-link>
              </li>
              <li>
                <router-link to="/about">ABOUT US</router-link>
              </li>
              <li>
                <router-link to="/locator">STORE LOCATOR</router-link>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header-Component"
}
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 1px solid #867528;
}

.main_affix {
  /*user-select: none;*/
  font-size: 12px;
  font-weight: 300;
  min-height: 40px;
  background: #0000000d;
}

.main_logo {
  margin-left: 15px;
  width: 150px;
}

.custom_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
}

.menu_list {
  user-select: none;
  display: flex;
  gap: 30px;
}

/*Responsive navbar*/
nav ul {
  float: right;
}

nav ul li {
  display: inline-block;
  float: left;
}

/*nav ul li:not(:first-child) {*/
/*  margin-left: 25px;*/
/*}*/

nav ul li a {
  display: inline-block;
  outline: none;
  color: #1f2227;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 0.04em;
}

nav ul li a:hover {
  color: #808080;
  text-decoration: none;
}

@media screen and (max-width: 992px) {
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: #1f2227;
    opacity: 0;
    transition: all 0.2s ease;
  }

  .nav-container ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .nav-container ul li {
    display: block;
    float: none;
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
  }

  .nav-container ul li:nth-child(1) a {
    transition-delay: 0.2s;
  }

  .nav-container ul li:nth-child(2) a {
    transition-delay: 0.3s;
  }

  .nav-container ul li:nth-child(3) a {
    transition-delay: 0.4s;
  }

  .nav-container ul li:nth-child(4) a {
    transition-delay: 0.5s;
  }

  .nav-container ul li:not(:first-child) {
    margin-left: 0;
  }

  .nav-container ul li a {
    padding: 10px 25px;
    opacity: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    transform: translateY(-20px);
    transition: all 0.2s ease;
  }

  .nav-open {
    right: 10px;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
  }

  .nav-open i {
    display: block;
    width: 20px;
    height: 2px;
    background: #1f2227;
    border-radius: 2px;
    margin-left: 14px;
  }

  .nav-open i:nth-child(1) {
    margin-top: 16px;
  }

  .nav-open i:nth-child(2) {
    margin-top: 4px;
    opacity: 1;
  }

  .nav-open i:nth-child(3) {
    margin-top: 4px;
  }
}

#nav:checked + .nav-open {
  transform: rotate(45deg);
}

#nav:checked + .nav-open i {
  background: #fff;
  transition: transform 0.2s ease;
}

#nav:checked + .nav-open i:nth-child(1) {
  transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-open i:nth-child(2) {
  opacity: 0;
}

#nav:checked + .nav-open i:nth-child(3) {
  transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-container {
  z-index: 9990;
  opacity: 1;
}

#nav:checked ~ .nav-container ul li a {
  opacity: 1;
  transform: translateY(0);
}

.hidden {
  display: none;
}
</style>