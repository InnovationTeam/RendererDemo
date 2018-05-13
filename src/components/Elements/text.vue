<template>
  <div class="text">
      <span :style="this.attr['style']"></span>
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