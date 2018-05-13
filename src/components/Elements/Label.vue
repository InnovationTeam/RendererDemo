<template>
  <div class="label">
      <label :for="this.attr['for']" :style="this.attr['style']"></label>
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