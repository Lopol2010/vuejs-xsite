<template>
    <div class='row'>
      <div class='col header'>
        <input v-model='query' @keydown.enter='onEnter' type='text' class='search-box' placeholder='Search...'>        
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    onEnter(){
      this.$emit('SearchRequested')
    }
  },
  data () {
    return {
      query: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.header
  text-align: center
  height: 50px
  padding: 0;
  .search-box
    background-color: #0f0f0f
    border: solid 0px #464646
    margin-top: 13px
    border-radius: 5px
    text-align: center
    width: 500px
    height: 28px
    caret-color: white
    text-indent: 8px
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,sans-serif
    color: white
    &::placeholder
      text-indent: 8px
      color: #717171

</style>
