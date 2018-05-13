<template>
  <div class="switch">
			<label>
				<input class="switch-like" type="checkbox" :style="this.attr['style']">
			</label>
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