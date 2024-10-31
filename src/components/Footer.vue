<template>
  <div class="footer-block">
      <div class="container">
          <div class="grid">
              <div class="soc-med">
                  <div class="theme-h2">follow Us</div>
                  <div class="icons">
                      <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                        <img :src="`/assets/images/skype.png`" alt="phone-pic" />
                      </a>
                      <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                        <img :src="`/assets/images/facebook.png`" alt="phone-pic" />
                      </a>
                      <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                        <img :src="`/assets/images/instagram.png`" alt="phone-pic" />
                      </a>
                  </div>
              </div>
              <div class="contact-info">
                  <div class="info theme-h2">Address</div>
                  <div class="text">123,HeroSt.city,AA 9999</div>
                  <div class="info theme-h2">contacts</div>
                  <div class="text">Email: info@gmail.com</div>
                  <div class="text">Phone: +3695451066</div>
                  <div class="text">Fax: +3695451066</div>
              </div>
              <div class="restaurant-hours">
                  <div class="hours theme-h2">Opening Hours</div>
                  <div class="opening">
                    <div class="flex">
                      <span>Monday </span>
                      <span>11:00 - 18:00</span>
                    </div>
                    <div class="flex">
                      <span>Tuesday</span>
                      <span>11:00 - 18:00</span>
                    </div>
                    <div class="flex">
                      <span>Wednesday</span>
                      <span>11:00 - 18:00</span>
                    </div>
                    <div class="flex">
                      <span>Thursday</span>
                      <span>11:00 - 18:00</span>
                    </div>
                    <div class="flex">
                      <span>Friday</span>
                      <span>11:00 - 18:00</span>
                    </div>
                    <div class="flex">
                      <span>Saturday</span>
                      <span>11:00 - 18:00</span>
                    </div>
                    <div class="flex">
                      <span>Sunday</span>
                      <span>closed</span>
                    </div>
                  </div>
              </div>
              <div class="contact-us">
                  <div class="contact-form theme-h2">contact us</div>
                  <form>
                      <div class="input-wrap">
                        <input type="text" id="name" placeholder="Name" required>
                      </div>
                      <div class="input-wrap">
                        <input type="email" id="email"  placeholder="Email" required>
                      </div>
                      <div class="input-wrap">
                        <textarea id="message"  placeholder="Message"></textarea>
                      </div>
                        <div class="cta-container">
                          <button ref="#" type="submit" class="cta">Send</button>
                        </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
// import account from 'public/assets/images/account.png'
// import location from 'public/assets/images/location.png'
// import email from 'public/assets/images/email.png'
// import call from 'public/assets/images/phone.png'
// import skype from 'public/assets/images/skype.png'
// import facebook from 'public/assets/images/facebook.png'
// import instagram from 'public/assets/images/instagram.png'

export default {
    setup() {

        return {
          // account,
          // location,
          // email,
          // call,
          // skype,
          // facebook,
          // instagram
        };
    },
};
</script>
<style lang="scss">
@import "../assets/styles/theme/theme";
@import "../assets/styles/core/reset";
</style>