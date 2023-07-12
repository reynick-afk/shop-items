<template>
    
  <div>
    <div v-if="showTimer" class="timer_wrapper">
      <h3>Таймер: {{ timer }}</h3>
      <button class="button_main_timer" @click="stopTimer">Остановить</button>
    </div>
    <button class="button_main_timer" v-else @click="startTimer">Старт таймера</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTimer: false,
      timer: '24:00:00',
      intervalId: null
    };
  },
  methods: {
    startTimer() {
      this.showTimer = true;
      this.intervalId = setInterval(() => {
        const timeArray = this.timer.split(':');
        let hours = parseInt(timeArray[0]);
        let minutes = parseInt(timeArray[1]);
        let seconds = parseInt(timeArray[2]);

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              this.stopTimer();
            }
          }
        }

        this.timer = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
      }, 1000);
    },
    stopTimer() {
      this.showTimer = false;
      clearInterval(this.intervalId);
    },
    formatTime(value) {
      return value.toString().padStart(2, '0');
    }
  }
};
</script>

<style>
.timer_wrapper{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}


.button_main_timer{
    margin-top: 20px;
    
    height: 50px;
    background: #0c3eaaec;
    border-radius: 6px;
    color: whitesmoke;
    cursor: pointer;
}

</style>