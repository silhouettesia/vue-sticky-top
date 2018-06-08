<template>
    <div class="sticky-top" :class="className" :style="getPosition">
        <div class="sticky-wrap">
            <slot></slot>
        </div>
        <div :style="`height:${paddingBtm}px`"></div>
    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            paddingBtm: 0
        }
    },
    computed: {
        getPosition() {
            let position = this.caniuse('position', 'sticky') ? 'sticky' : 'relative';
            return 'position:' + position;
        }
    },
    mounted() {
        this.init();
    },
    deacitivated() {
        if (this.caniuse('position', 'sticky')) return;
        let elWrap = this.$el.querySelector('.sticky-wrap');
        elWrap.style.position = 'relative';
        this.paddingBtm = 0;
    },
    methods: {
        init() {
            if (this.caniuse('position', 'sticky')) return;
            let el = this.$el,
                target = this.$el.parentNode,
                elWrap = this.$el.querySelector('.sticky-wrap'),
                top = Number(/^\-?\d+/.exec(window.getComputedStyle(el).top)[0]),
                height = Number(/^\-?\d+/.exec(elWrap.offsetHeight));
            target.addEventListener('scroll', (e) => {
                if (el.getBoundingClientRect().top <= top) {
                    elWrap.style.position = 'fixed';
                    this.paddingBtm = height;
                }
                if (el.getBoundingClientRect().top > top && elWrap.style.position != 'relative') {
                    elWrap.style.position = 'relative';
                    this.paddingBtm = 0;
                }
            })
        },
        caniuse(attr, value) {
            let ele = document.createElement('div');
            if (attr in ele.style) {
                if (!value) return true;
                ele.style[attr] = value;
                return ele.style[attr] === value;
            }
            return false;
        }
    }
}
</script>


<style lang="less" scoped>
.sticky-top {
    width: 100%;
    .sticky-wrap {
        width: 100%;
        height: inherit;
        top: inherit;
        background: inherit;
    }
}
</style>
