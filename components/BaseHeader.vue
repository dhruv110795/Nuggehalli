<template>
  <header id="baseHeader" class="bg-white sticky-top header-area">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12">
          <b-navbar toggleable="lg" type="light" class="px-0 py-space-xxs py-lg-space-xs">
            <a href="/" target="_self">
              <img
                class="me3-logo d-lg-block"
                :src="require(`~/assets/images/logo/logo.png`)"
                @click="triggerDLNavbar('me3 logo')"
              />
            </a>
            <button
              v-b-toggle="bCollapseId"
              class="navbar-toggler bg-white border-0 ml-auto take-quiz-btn"
            >
              <span class="when-opened">
                <font-awesome-icon
                  :icon="['fa', 'times']"
                  class="text-dark nfa-toggle-icon"
                  aria-label="navbar-toggle-icon"
                />
              </span>
              <span class="when-closed">
                <font-awesome-icon
                  :icon="['fa', 'bars']"
                  class="text-dark nfa-toggle-icon"
                  aria-label="navbar-toggle-icon"
                />
              </span>
            </button>
            <b-collapse :id="bCollapseId" is-nav>
              <b-navbar-nav class="ml-auto align-items-center mb-space-md mb-lg-0">
                <b-nav-item
                  to="/about-us"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  About Us
                </b-nav-item>
                <b-nav-item
                  to="/events"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  Events
                </b-nav-item>
                <b-nav-item
                  to="/education"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  Education
                </b-nav-item>
                <b-nav-item
                  to="/events"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  News & Events
                </b-nav-item>
                <b-nav-item
                  to="/media"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  Media
                </b-nav-item>
                <b-nav-item
                  to="/gallery"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  Gallery
                </b-nav-item>
                <b-nav-item
                  to="/contact-us"
                  class="mx-space-sm"
                  link-classes="px-0 pt-space-sm text-dark pb-0 py-lg-0 text-medium font-weight-bold"
                >
                  Contact Us
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { BNavbar, BCollapse, BNavbarNav, BNavItem } from "bootstrap-vue";

export default {
  name: "HeaderPartner",
  components: {
    "b-navbar": BNavbar,
    "b-collapse": BCollapse,
    "b-navbar-nav": BNavbarNav,
    "b-nav-item": BNavItem
  },
  data() {
    return {
      bCollapseId: "navbar-fixed-atlas"
    };
  },
  computed: {
    checkRoute() {
      return this.$route.path;
    }
  },
  methods: {
    triggerDLNavbar(text) {
      if (text === "What is me3" || text === "License me3") {
        window.scrollTo({
          top: document.getElementById("sectionHero"),
          left: 0,
          behavior: "smooth"
        });
      }
      this.trackEvent({
        event: "link",
        action: "click",
        name: "onclick",
        type: "internal link",
        region: "navbar",
        section: "main navbar",
        text: text.toLocaleLowerCase()
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#baseHeader {
  box-shadow: 0px 3px 6px #0000001c;
}
.me3-logo {
  max-height: 35px;
  @media only screen and (min-device-width: 769px) {
    max-height: 47px;
  }
}
header {
  box-shadow: 0px 0px 1px black;
}
a:focus,
.take-quiz-btn:focus {
  outline: 0 !important;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
.me3header {
  border-bottom: 3px solid #191919;
  text-decoration: none !important;
}
</style>
