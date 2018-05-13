<template>
  <div class="radio">
			<input type="radio" id="radio-1" name="radio" :style="this.attr['style']">
			<label for="radio-1" class="radio-like">✔</label>
			<span>标签名</span>
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