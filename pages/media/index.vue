<template>
  <div class="site-wrapper-reveal">
    <div class="church-about-area section-space--ptb_60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="about-tai-content">
              <div class="section-title-wrap">
                <h3 class="section-title--two left-style mb-30">Media</h3>
                <h5>Karmaveera November 25, 2018</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="container">
            <div class="col-lg-10 ml-auto mr-auto">
              <carousel
                :pagination-enabled="false"
                :per-page="1"
                navigation-next-label=""
                navigation-prev-label=""
                navigationEnabled="true"
                class="custom-carousel"
              >
                <slide v-for="(slides, index) in karmaveera" :key="index">
                  <img :src="require(`~/assets/images/${slides}`)" />
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="church-about-area section-space--ptb_60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="about-tai-content">
              <div class="section-title-wrap">
                <h5>Sri Nrisimha Priya June 2017</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="container">
            <div class="col-lg-10 ml-auto mr-auto">
              <carousel
                :pagination-enabled="false"
                :per-page="1"
                navigation-next-label=""
                navigation-prev-label=""
                navigationEnabled="true"
                class="custom-carousel"
              >
                <slide v-for="nimg in narshima" :key="nimg">
                  <img :src="require(`~/assets/images/${nimg}`)" />
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="church-about-area section-space--ptb_60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="about-tai-content">
              <div class="section-title-wrap">
                <h5>Prajavani - 18th april 2011</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="container">
            <div class="col-lg-10 ml-auto mr-auto">
              <carousel
                :pagination-enabled="false"
                :per-page="1"
                navigation-next-label=""
                navigation-prev-label=""
                navigationEnabled="true"
                class="custom-carousel"
              >
                <slide v-for="(slides, index) in Prajavani" :key="index">
                  <img :src="require(`~/assets/images/${slides}`)" />
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      karmaveera: ["karmaveera-01.jpg", "karmaveera-02.jpg", "karmaveera-03.jpg"],
      narshima: ["nrishima-01.jpg", "nrishima-02.jpg", "nrishima-03.jpg"],
      Prajavani: ["media_1.jpg"]
    };
  }
};
</script>

<style></style>
