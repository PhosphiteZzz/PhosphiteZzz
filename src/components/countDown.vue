<template>
  <div class="CountDown">
    <p>{{ minute }}:{{ second }}</p>
  </div>
</template>
    
    <script type="text/ecmascript-6">
export default {
  name: "CountDown",
  data() {
    return {
      minutes: 10,
      seconds: 10,
    };
  },
  props: {
    countTime: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.add();
  },
  methods: {
    num: function (n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function () {
      var _this = this;
      var time = window.setInterval(function () {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
  },
  watch: {
    countTime: {
      deep: true,
      immediate: true,
      handler: function (newVal) {
        this.minutes = newVal.minute;
        this.seconds = newVal.second;
      },
    },
    second: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  computed: {
    second: function () {
      return this.num(this.seconds);
    },
    minute: function () {
      return this.num(this.minutes);
    },
  },
};
</script>
    
<style lang="less" scoped>
.CountDown {
  color: #1f2124;
  p{
    font-size: 72px;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 0 5px 5px #ccc;
  }
}
</style>