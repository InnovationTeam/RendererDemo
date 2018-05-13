<template>
    <div class="checkbox">
        <input :checked="this.attr['checked']" :disabled="this.attr['disabled']" :value="this.attr['value']" type="checkbox" id="checkbox-1" >
        
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

