<template>
  <div class="slider">
			<input type="range" :value="this.attr['value']" :style="this.attr['style']">
    </div>
</template>


<script>
import '../js/support'
export default {
  props:{
      attr:Object,
      children:[]
  },
  mounted(){
      var change = function($input) {
			/*内容可自行定义*/
			console.log($input.value);
		}

		$('input').RangeSlider({ min: 0,   max: 100,  step: 1,  callback: change});
  }
}
</script>

<style scoped>
@import "../../../static/css/style.css";
</style>