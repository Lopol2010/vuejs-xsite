<template>
  <footer class='row'>
    <div class='col-12 footer-links'>
      <a href="#">About</a>
      <a href="#">Donate</a>
      <a href="#">Random</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'videos-list',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
footer
  height: 35px
  position: relative
  padding-top: 6px
  .footer-links
    font-size: 14px
    text-align: center
    a
      text-decoration: none
      color: #163964 //#1F5289
      margin-left: 15px
</style>
