<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  min-width: 1440px;
  min-height: 900px;
}
// #nprogress .bar {
//   background: red !important; //自定义nprogress颜色
// }
</style>
