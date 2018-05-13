<template>
    <div class="image">
        <img :src="this.attr['src']" :style="this.attr['style']">
    </div>
</template>

<script>

export default {
  name: 'Image',
  props: {
      attr: Object,
      children: Array
  },
  methods: {

  },
  mounted(){
      console.log(this.attr['src']);
  }
}
</script>

<style>
img{
    width:100px
}
</style>
