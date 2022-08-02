<template>
  <div class="site-wrapper-reveal">
    <div class="contact-page-wrapper section-space--pt_120">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="single-contact-info">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fa', 'map']" />
                <!-- <i class="flaticon-placeholder"></i> -->
              </div>
              <div class="contact-info">
                <h4>Address</h4>
                <p>
                  Narasimha Nilaya, 19/2, 4th Main Road<br />
                  Malleshwaram, Bangalore - 560003, India
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-contact-info">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fa', 'phone']" />
              </div>
              <div class="contact-info">
                <h4>Phone</h4>
                <p><a href="tel:+91 80 2334 6901">+91 80 2334 6901 </a><br /></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-contact-info">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fa', 'at']" />
              </div>
              <div class="contact-info">
                <h4>Mail</h4>
                <p>
                  <a href="mailto:mail@nuggehalli.org"> mail@nuggehalli.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-area section-space--ptb_120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.291586891126!2d77.5682777!3d12.999147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x835feb80e21bf4c2!2sNuggehalli%20S%20L%20N%20Swamy%20Seva%20Samithi!5e0!3m2!1sen!2sin!4v1659439235621!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="col-lg-6">
              <div class="contact-form-wrap ml-lg-5">
                <h3 class="title mb-40">Contact Form</h3>
                <form id="contact-form" action="https://hasthemes.com/file/mail.php" method="post">
                  <div class="contact-form__one">
                    <div class="contact-input">
                      <label for="Name">Name</label>
                      <div class="contact-inner">
                        <input name="con_name" type="text" placeholder="Enter you name" />
                      </div>
                    </div>

                    <div class="contact-input">
                      <label for="Phone">Phone</label>
                      <div class="contact-inner">
                        <input name="con_phone" type="text" placeholder="Your Phone Number" />
                      </div>
                    </div>

                    <div class="contact-input">
                      <label for="Email">Email</label>
                      <div class="contact-inner">
                        <input name="con_email" type="email" placeholder="Your Email Address " />
                      </div>
                    </div>
                    <div class="submit-input">
                      <button class="submit-btn" type="submit">Submit</button>
                      <p class="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
