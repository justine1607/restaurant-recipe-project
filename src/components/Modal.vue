<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <div class="close-button" @click="closeModal">X</div>
      </div>
      <div class="modal-content">
        <form action="">
          <div class="form-group flex-group">
            <div class="flex-item">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Juan">
            </div>
            <div class="flex-item">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Dela Cru">
            </div>
          </div>
          <div class="form-group flex-group">
            <div class="flex-item">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="example@example.com">
            </div>
            <div class="flex-item">
              <label for="phone">Phone Number</label>
              <input type="tel" id="Phone" placeholder="63+">
            </div>
          </div>
          <div class="form-group">
            <label for="guests">Number of Guests</label>
            <input type="number" id="guests" placeholder="1">
          </div>
        </form>

        <div class="reservation">
          <div class="reservation-header">
            <h2>Reservation</h2>
            <div class="date-field">
              <input type="date" id="reservationDateTime">
            </div>
          </div>
          <div class="date-event">
            <h2>Select Time {{ flatpickr }}</h2>
            <div class="time-button">
              <div class="first-row">
                <button class="time">9:00 AM</button>
                <button class="time">9:00 AM</button>
              </div>
              <div class="first-row">
                <button class="time">9:00 AM</button>
                <button class="time">9:00 AM</button>
              </div>
              <div class="first-row">
                <button class="time">9:00 AM</button>
                <button class="time">9:00 AM</button>
              </div>
            </div>
            <div class="cta-container">
              <button class="modal-button" type="submit" >Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="scss">
@import "../assets/styles/blocks/modal";
</style>
<script>
import {computed, onMounted, ref } from 'vue';
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";

export default {
  props: {
    header: {
      type: Object,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    example:{
      type: Object,
    }
  },
  setup(props, {emit}) {
    const closeModal = () => {
    emit('close')
  }
    const fullname = computed(() => {
      return `${props.firstname}`
    })

    onMounted(()=> {
      const config = {
        inline: true,
        disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9) ],
        dateFormat: "Y-m-d",
        altInput: true,
        altFormat: "F j, Y",
      };
      flatpickr("input[type=date]" ,config);
    })
    return {
      closeModal,fullname
    }
  }
}
</script>