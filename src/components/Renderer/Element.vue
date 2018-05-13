<template>
    <component v-bind:is="elements[this.tag]" :attr="this.attr" :children="this.children"></component>
</template>

<script>
import View from '../Elements/View';
import Image from '../Elements/Image';
import Button from '../Elements/Button';
import Icon from '../Elements/Icon';
import Input from '../Elements/Input'
import Map from "../Elements/Map"
import Progress from '../Elements/Progress'
import Radio from '../Elements/Radio'
import Slider from '../Elements/Slider'
import Switch from '../Elements/Switch'
import Video from '../Elements/Video'
import Checkbox from '../Elements/Checkbox'
import Background from '../Elements/Background'
import Form from '../Elements/Form'
import Navigator from '../Elements/Navigator'
import Text from '../Elements/Text'
import Label from '../Elements/Label'

export default {
  name: 'Element',
  data(){
      return {
          elements: {
              'view': 'view-elem',
              'image': 'image-elem',
              'button': 'button-elem',
              'icon': 'icon-elem',
              'input':"input-elem",
              'map':"map-elem",
              'progress':"progress-elem",
              'radio':"radio-elem",
              'slider':'slider-elem',
              'switch':'switch-elem',
              'video':'video-elem',
              'checkbox':'checkbox-elem',
              'background':'background-elem',
              'form':'form-elem',
              'navigator':'navigator-elem',
              'text':'text-elem',
              'label':'label-elem'
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
      'icon-elem': Icon,
      'input-elem':Input,
      'map-elem':Map,
      'progress-elem':Progress,
      'radio-elem':Radio,
      'slider-elem':Slider,
      'switch-wlwm':Switch,
      'video-elem':Video,
      'checkbox-elem':Checkbox,
      'background-elem':Background,
      'form-elem':Form,
      'navigator-elem':Navigator,
      'text-elem':Text,
      'label-elem':Label
  }
}
</script>
