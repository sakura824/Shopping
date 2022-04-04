<template>
  <div class="wrapper" ref="aaa">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    commponts:{
        BScroll
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.aaa,{
            probeType: this.probeType,
            pullUpLoad: true,
            click: true,
            observeDom: true,
            observeImage: true
        })

        this.scroll.on('scroll',(position) => {
           this.$emit('scroll',position)
        })

        this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        })
    }
}
</script>

<style>

</style>