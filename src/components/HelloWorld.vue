<template>
<div class="hello">
    websocket测试
</div>
</template>

<script>
const {
    log
} = console;
export default {
    name: 'HelloWorld',
    data() {
        return {
            socket: null
        }
    },
    props: {
        msg: String
    },
    mounted() {
        this.webSocket.onmessage = (data) => {
            console.log('data', data);
        }
        this.webSocket.readyState = (data) => {
            log('state', data)
        }
    }
}
</script>
