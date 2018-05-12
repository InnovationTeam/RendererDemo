<template>
    <component v-bind:is="elements[this.tag]" :attr="this.attr" :children="this.children"></component>
</template>

<script>
import View from '../Elements/View';
import Image from '../Elements/Image';
import Button from '../Elements/Button';
import Icon from '../Elements/Icon';

export default {
  name: 'Element',
  data(){
      return {
          elements: {
              'view': 'view-elem',
              'image': 'image-elem',
              'button': 'button-elem',
              'icon': 'icon-elem'
          }
      }
  },
  props: {
      tag: String,
      attr: Object,
      children: Array
  },
  components: {
      'view-elem': View,
      'image-elem': Image,
      'button-elem': Button,
      'icon-elem': Icon
  }
}
</script>
