<template>
  <div class='row justify-content-center' :class='{hidden: !this.$route.params.id}'>
    <div class='col'>
      <div class='video-wrapper'>
        <iframe :src='this.pid' frameborder="0" width="608" :height="468" scrolling="no"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    mounted () {
        document.querySelector('.videos-list').appendChild(this.$el)
    },
    computed: {
        pid () {
            return 'https://www.pornhub.com/embed/' + this.$route.params.id
        }
    },
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
.hidden
  display: none
.video-wrapper
  background-color: black
  height: 468px
  width: 100%

</style>
