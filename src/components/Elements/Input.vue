<template>
  <div class="input">
      <input :password="this.attr['password']" :value="this.attr['value']" :type="this.attr['type']" :style="this.attr['style']">
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

