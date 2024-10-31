<template>
    <div class="form-block">
        <div class="theme-container">
            <div class="theme-h2 description-trans">{{ formData.title }}</div>
            <form @submit.prevent="handleSubmit" action="Modal.vue">
                <div class="form-grid">
                    <div class="left">
                        <div class="form-group" v-for="form in formData.items" :key="form.id">
                          <label :for="form.id">{{ form.label }}</label>
                          <div v-if="form.type === 'textarea'">
                            <textarea :id="form.id" v-model="form[form.id]" :placeholder="form.placeholder" ></textarea>
                          </div>
                          <div v-else>
                            <input :type="form.type" :id="form.id" v-model="form[form.id]" :placeholder="form.placeholder" required/>
                          </div>
                        </div>
                    </div>
                    <div class="right-grid">
                        <div class="date-event">
                          <div class="theme-h3">Selected Time: {{ selectedTime || 'None' }}</div>
                          <div class="time-button">
                            <div class="first-row" v-for="(row, index) in timeSlots" :key="index">
                              <button ref="#" type="submit" class="time" @click="selectTime(time)" v-for="time in row" :key="time">{{ time }}</button>
                            </div>
                          </div>
                        </div>
                      <div class="cta-container">
                        <button class="cta" type="submit" >Reserve Now</button>
                      </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';

export default {
  props: {
    formData: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  setup(props) {
    const form = ref({});

    onMounted(() => {
        form.value = props.formData.items;
    });
    const handleSubmit = () => {
      console.log('Form submitted with data:', form.value);
    };

    const selectedTime = ref('');
    const showMessage = ref(false);

    const timeSlots = [
      ['9:00 AM', '10:00 AM'],
      ['11:00 AM', '12:00 PM'],
      ['1:00 PM', '2:00 PM'],
      ['3:00 PM', '4:00 PM'],
      ['5:00 PM', '6:00 PM'],
    ];

    const selectTime = (time) => {
      selectedTime.value = time;
    };

    const onlineReservation = () => {
      showMessage.value = true;

      setTimeout(() => {
        showMessage.value = false;
      }, 3000);
    };

    onMounted(() => {
      const config = {
        inline: true,
        dateFormat: 'Y-m-d',
        altInput: true,
        altFormat: 'F j, Y',
      };
      flatpickr('input[type=date]', config);
      const elements = document.querySelectorAll('.card , .description-trans');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      );

      elements.forEach((element)  => {
        observer.observe(element);
      });

    });

    return {
      form,
      handleSubmit,
      selectedTime,
      selectTime,
      timeSlots,
      onlineReservation,
      showMessage,
    };
  },
};

</script>

<style lang="scss">
@import "src/assets/styles/blocks/form";
</style>
