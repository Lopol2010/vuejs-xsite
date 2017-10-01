<template>
  <div class='row justify-content-center'>
    <div class='col-8 tags-list'>
      <div class="tag" @click='toggleClass($event, "active-tag")' v-for='tag in tagsList'>
        <router-link to='/'>{{tag.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { tags } from './../config'
export default {
  data () {
    return {
      tagsList: tags,
    }
  },
  methods: {
    toggleClass(e, c){
      e.currentTarget.classList.toggle(c)
      this.$emit('Changed')
    },
    reset(){
      Array.from(document.querySelectorAll('.active-tag')).forEach( (el, i) => {
        el.classList.remove('active-tag')
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.tags-list
  width: 800px
  padding: 0
  text-align: center
  .tag
    padding: 6px 6px
    display: inline-block
    border: solid 0px #4F4F4F
    border-radius: 1px
    &:hover
      text-decoration: none
      background-color: #858585
      color: black
      cursor: pointer
  .tag, .tag>a
    color: #D2D2D2
    line-height: 6px
    font-size: 13px;
    text-decoration: none
  
  .active-tag
    background-color: #9B9B9B
    color: black
</style>
