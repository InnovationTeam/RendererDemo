<template>
  <div class="form" >
      <form :style="this.attr['style']"></form>
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