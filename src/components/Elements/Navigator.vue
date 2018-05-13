<template>
  <div class="navigator">
      <div
      :url="this.attr['url']" 
       :style="this.attr['style']">

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