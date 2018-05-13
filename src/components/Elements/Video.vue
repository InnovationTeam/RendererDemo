<template>
  <div class="video">
  				<video :style="this.attr['style']" id="wx-video" class="video-js  vjs-big-play-centered" controls preload="auto" poster>
					<source :src="this.attr['src']" type='video/mp4'>
	 			</video>
  			</div>
</template>

<script>
import '../js/video'
export default {
  props:{
      attr:Object,
      children:Array
  },
  mounted(){
      
  }
}
</script>

<style scoped>
@import "../../../static/css/style.css";
</style>
