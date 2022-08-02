import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAt, faPhone, faMap } from "@fortawesome/free-solid-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(faAt, faPhone, faMap);

// Register the component globally
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
