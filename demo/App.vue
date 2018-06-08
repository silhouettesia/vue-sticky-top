<template>
    <div class="main">
        <div style="background: pink">hello world</div>
        <sticky-top :className="'custom-sticky'">
            sticky top
        </sticky-top>
        <div style="background: skyblue; height: 2000px">bye universe</div>
    </div>
</template>
<script>
import stickyTop from '../src/stickyTop.vue';

export default {
    components: {
        stickyTop
    }
}
</script>
<style lang="less">
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
.main {
    height: 100%;
    overflow: auto;
    .custom-sticky {
        top: 0px;
        background: white;
    }
}
</style>
