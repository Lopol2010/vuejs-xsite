<template>
  <div class='row justify-content-center video-wrapper' :style='this.pid ? "display: block" : "display: none"'>
    <div class='col'>
      <iframe :src='this.finalURL' frameborder="0" width="608" :height="468" scrolling="no"></iframe>

    </div>
  </div>
</template>

<script>
export default {

    mounted () {
        document.querySelector('.videos-list').appendChild(this.$el)
        if(this.$route.params.id){
            this.finalURL = 'https://www.pornhub.com/embed/' + this.$route.params.id
        }
    },
    props: ['pid'],
    watch: {
        pid (val) {
            this.finalURL = 'https://www.pornhub.com/embed/' + val
        }
    },
    data () {
        return {
            finalURL: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>


</style>
