<template>
  <div class="hello">
    <countDown :countTime="countTime"></countDown>
  </div>
</template>

<script>
import countDown from "./countDown";

const { log } = console;
export default {
  name: "HelloWorld",
  data() {
    return {
      socket: null,
      countTime: {
        minute: 12,
        second: 11
      }
    };
  },
  components: {
    countDown
  },
  props: {
    msg: String
  },
  mounted() {
    this.webSocket.onmessage = data => {
      console.log("data", data);
    };
    this.webSocket.readyState = data => {
      log("state", data);
    };
  }
};
</script>
<style lang="less" scoped>
.hello {
  width: 100%;
  height: 100%;
}
</style>
