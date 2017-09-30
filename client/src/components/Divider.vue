<template>
    <div class='row justify-content-center'>
      <div class='col-4 divider'>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.divider
  overflow: hidden
  height: 5px
  &:after
    content: ''
    display: block
    margin: -25px auto 0
    width: 100%
    height: 25px
    border-radius: 125px / 12px
    box-shadow: 0 0 4px rgba(#FFFFFF, 0.2)
</style>
