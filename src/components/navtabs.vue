<template>
<div class="navtabs">
  <div class="wrapper" ref="navtabs">
    <ul>
      <li class="tag" v-for="tag in navlist" :class="{active:tag.active}" @click="clickTag(tag)">{{tag.name}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import IScroll from 'iscroll'

export default {
  created() {
    this.setList()
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll() {
      this.myScroll = new IScroll(this.$refs.navtabs, {
        scrollX: true,
        scrollY: false,
        hScroll: true,
        vScroll: false,
        scrollbars: false,
        snap: true,
        momentum: false,
        click: true,
        mouseWheel: true
      })
      window.x = this.myScroll
    },
    clickTag(tag, e) {
      this.navlist.forEach(n => {
        n.active = false
      })
      tag.active = true
      setTimeout(() => {
        this.myScroll.scrollToElement('.active', 400, true, false)
      }, 10)
      this.$emit('tag-click', tag)
    },
    setList() {
      for (let i = 0; i < 10; i++) {
        this.navlist.push({
          name: 'Tag' + i,
          code: i,
          active: i === 0
        })
      }
    }
  },
  data() {
    return {
      navlist: [],
      myScroll: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.navtabs
  .wrapper
    padding 20px 0
    overflow hidden
    width 100%
    border-bottom 1px solid gray
    ul
      display flex
      width 600px
      .tag
        flex 1
        text-align center
        list-style none
        padding 5px 10px
        &.active
          color red
</style>
