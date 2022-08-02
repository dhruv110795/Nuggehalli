<template>
  <main>
    <div class="header-area header-area--default">
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 d-flex align-items-center">
              <div class="header__logo">
                <div class="logo">
                  <nuxt-link to="/"><img src="~/assets/images/logo/logo.png" alt="" /></nuxt-link>
                </div>
              </div>
              <div class="header-right">
                <div class="header__navigation menu-style-three d-none d-lg-block">
                  <nav class="navigation-menu">
                    <ul>
                      <li class="has-children">
                        <nuxt-link to="/about-us"><span>About</span></nuxt-link>
                      </li>
                      <li class="has-children">
                        <nuxt-link to="/events"><span>News & Events</span></nuxt-link>
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <nuxt-link to="/education"><span>Education</span></nuxt-link>
                      </li>
                      <li class="has-children">
                        <nuxt-link to="/media">Media</nuxt-link>
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <nuxt-link to="/gallery">Gallery</nuxt-link>
                      </li>
                      <li class="has-children">
                        <nuxt-link to="/contact-us">Contact</nuxt-link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div
                  class="mobile-navigation-icon d-block d-lg-none"
                  id="mobile-menu-trigger"
                  @click="mobileViewNavBar('open')"
                >
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!--====================  mobile menu overlay ====================-->
    <div class="mobile-menu-overlay" id="mobile-menu-overlay">
      <div class="mobile-menu-overlay__inner">
        <div class="mobile-menu-overlay__header">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6 col-8">
                <!-- logo -->
                <div class="logo">
                  <nuxt-link to="/">
                    <img src="~/assets/images/logo/logo.png" class="img-fluid" alt="" />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-md-6 col-4">
                <!-- mobile menu content -->
                <div class="mobile-menu-content text-right">
                  <span
                    class="mobile-navigation-close-icon"
                    id="mobile-menu-close-trigger"
                    @click="mobileViewNavBar('close')"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-overlay__body">
          <nav class="offcanvas-navigation">
            <ul>
              <li class="has-children">
                <nuxt-link to="/"><span>Home</span></nuxt-link>
              </li>
              <li class="has-children">
                <nuxt-link to="/about-us"><span>About</span></nuxt-link>
              </li>
              <li class="has-children">
                <nuxt-link to="/events"><span>News & Events</span></nuxt-link>
              </li>
              <li class="has-children">
                <nuxt-link to="/education"><span>Education</span></nuxt-link>
              </li>
              <li class="has-children">
                <nuxt-link to="/media"><span>Media</span></nuxt-link>
              </li>
              <li class="has-children">
                <nuxt-link to="/gallery"><span>Gallery</span></nuxt-link>
              </li>
              <li class="has-children">
                <nuxt-link to="/contact-us"><span>Contact Us</span></nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!--====================  End of mobile menu overlay  ====================-->
    <Nuxt></Nuxt>
    <!--========== Footer Area Start ==========-->
    <footer class="footer-area bg-footer">
      <div class="footer-bottom-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="copy-right-box">
                <p class="text-white">
                  Copyright &copy; 2022 Nuggehalli S L N Seva Samithi, All Rights Reserved
                </p>
                <p class="text-white">
                  Powered By -
                  <a href="https://www.oneorigin.us/" target="_blank"
                    ><img src="../assets/images/OneOrigin.png" class="poweredby" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--==========// Footer Area End ==========-->
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    mobileViewNavBar(text) {
      if (text == "open") {
        console.log("Open");
        document.getElementById("mobile-menu-overlay").classList.add("active");
      } else {
        console.log("Close");
        document.getElementById("mobile-menu-overlay").classList.remove("active");
      }
    }
  }
};
</script>

<style></style>
