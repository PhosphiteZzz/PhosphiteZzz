<template>
  <!-- 全屏容器 -->
  <div
    ref="pageDiv"
    @mousemove="demo_move"
    @mouseup="demo_up"
    :class="{ zlevelTop: mouseDownState }"
    style="position: absolute; top: 0; height: 100%; width: 100%"
  >
    <!-- 点击蒙版 -->
    <div
      v-if="menuOpen"
      @click.stop="closeOpenModal"
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 998;
      "
    ></div>
    <!-- 多功能菜单 -->
    <div
      :class="{
        'six-more-modal-btn': menuOpen,
        moreModal: !menuOpen,
        'more-tran-animate': !mouseDownState,
      }"
      ref="actionMgr"
      :style="position"
      @mousedown="demo_down"
    >
      <!-- 触发器 -->
      <div v-if="!menuOpen" @click="demo_click" class="imgMore">
        <img class="more-img" src="" alt="" title="多功能菜单" />
      </div>
      <!-- 菜单 -->
      <div v-else></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeDragbtn",
  props: {
    position: {
      type: Object,
      default: function () {
        return { top: "32.25rem", left: "0" };
      },
    },
  },
  data() {
    return { menuOpen: false, curMoveIndex: 0 };
  },
  methods: {
    demo_down(event) {
      if (this.menuOpen) {
        this.mouseDownState = false;
        return;
      }
      console.log("demo_down", event);
      /* 此处判断 pc 或 移动端 得到 event 事件 */ var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      let { clientX, clientY } = touch;
      this.iX = clientX - this.$refs.actionMgr.offsetLeft;
      this.iY = clientY - this.$refs.actionMgr.offsetTop;
      this.mouseDownState = true;
    },
    demo_move(event) {
      if (this.mouseDownState) {
        console.log("demo_move", event);
        /* 此处判断 pc 或 移动端 得到 event 事件 */ var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        let { clientX, clientY } = touch;
        let {
          clientHeight: pageDivY,
          clientWidth: pageDivX,
        } = this.$refs.pageDiv;
        /* 鼠标坐标 - 鼠标与拖拽按钮的 间距坐标 得到 拖拽按钮的 左上角 x轴y轴坐标 */ let [
          x,
          y,
        ] = [clientX - this.iX, clientY - this.iY];
        let {
          clientHeight: actionMgrY,
          clientWidth: actionMgrX,
          style: actionMgrStyle,
        } = this.$refs.actionMgr;
        /* 此处判断 拖拽按钮 如果超出 屏幕宽高 或者 小于 设置 屏幕最大 x=全局容器x y=全局容器y 否则 设置 为 x=0 y=0 */ if (
          x >
          pageDivX - actionMgrX
        )
          x = pageDivX - actionMgrX;
        else if (x < 0) x = 0;
        if (y > pageDivY - actionMgrY) y = pageDivY - actionMgrY;
        else if (y < 0) y = 0;
        this.dX = x;
        this.dY = y;
        actionMgrStyle.left = `${x}px`;
        actionMgrStyle.top = `${y}px`;
        actionMgrStyle.bottom = "auto";
        actionMgrStyle.right = "auto";
        this.lastMoveIndex++;
        event.preventDefault();
      }
    },
    demo_up(event) {
      console.log("demo_up", event);
      let {
        clientHeight: windowHeight,
        clientWidth: windowWidth,
      } = document.documentElement;
      console.log("全局容器:", windowWidth, windowHeight);
      let {
        clientHeight: actionMgrY,
        clientWidth: actionMgrX,
        style: actionMgrStyle,
      } = this.$refs.actionMgr;
      console.log("拖拽按钮", actionMgrY, actionMgrX, actionMgrStyle);
      if (this.dY > 0 && this.dY < windowHeight - 50) {
        if (this.dX <= windowWidth / 2) {
          actionMgrStyle.left = 0;
          actionMgrStyle.right = "auto";
        } else {
          actionMgrStyle.left = "auto";
          actionMgrStyle.right = 0;
        }
        if (this.dY >= windowHeight / 2) {
          actionMgrStyle.top = "auto";
          actionMgrStyle.bottom = windowHeight - this.dY - 50 + "px";
        }
      } else {
        if (this.dY === 0) {
          actionMgrStyle.top = 0;
          actionMgrStyle.bottom = "auto";
        } else if (this.dY === windowHeight - 50) {
          actionMgrStyle.bottom = 0;
          actionMgrStyle.top = "auto";
        }
        if (this.dX >= windowWidth / 2) {
          actionMgrStyle.left = "auto";
          actionMgrStyle.right = windowWidth - this.dX - 50 + "px";
        }
      }
      this.mouseDownState = false;
    },
    demo_click() {
      console.log(
        "demo_click|moveIndex:",
        this.lastMoveIndex,
        this.curMoveIndex
      );
      if (this.lastMoveIndex - this.curMoveIndex <= 10) {
        this.menuOpen = !this.menuOpen;
        // if (this.menuOpen) {
        // }
      }
      this.curMoveIndex = this.lastMoveIndex;
    },
    closeOpenModal() {},
  },
};
</script>
<style lang="less" scoped>
.zlevelTop {
  z-index: 9999;
}
.more-tran-animate {
  transition: 0.5s;
}
.moreModal {
  /* 如果碰到滑动问题，1.3 请检查 z-index。z-index需比web大一级*/
  z-index: 9999;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #337ab7;
  line-height: 40px;
  text-align: center;
  color: #fff;
  opacity: 0.6;
}
.moreModal:hover {
  opacity: 1;
}
.six-more-modal-btn {
  position: fixed;
  z-index: 9999;
  width: 14rem;
  height: 14rem;
  border-radius: 5px;
  background: #1a1a1a;
  color: #fff;
}
.imgMore {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>