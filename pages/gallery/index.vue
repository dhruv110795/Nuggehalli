<template>
  <div class="church-about-area section-space--ptb_60">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 ml-auto mr-auto">
          <div class="about-tai-content">
            <div class="section-title-wrap">
              <h3 class="section-title--two left-style mb-30">Gallery</h3>
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
              <slide v-for="slides in gallery" :key="slides">
                <img class="img-fluid" :src="require(`~/assets/images/gallery/${slides}`)" />
              </slide>
            </carousel>
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
      gallery: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg"
      ]
    };
  }
};
</script>

<style></style>
