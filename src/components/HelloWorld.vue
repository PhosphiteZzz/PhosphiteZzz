<template>
  <div class="hello">
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>
  </div>
</template>

<script>
const { log } = console;
export default {
  name: "HelloWorld",
  data() {
    return {
      socket: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    this.webSocket.onmessage = (data) => {
      console.log("data", data);
    };
    this.webSocket.readyState = (data) => {
      log("state", data);
    };
  },
};
</script>
