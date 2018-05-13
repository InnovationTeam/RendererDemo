<template>
  <div class="progress">
			<div class="progress-like">
				<span :style="this.attr['style']"></span>
			</div>
	</div>
</template>


<script>
export default {
  props:{
      attr:Object,
      children:Array
  }
}
</script>

<style scoped>
@import "../../../static/css/style.css";
</style>


