<template>
    <div>
        <button @click="swicth">
            解析
        </button>

        <test-hierarchy v-if="this.show"></test-hierarchy>
    </div>
</template>

<script>
import TestHierarchy from './TestHierarchy';
import layerData from '../store/layer_data';

var wxml = `
<view class="section">
  <view class="section__title">flex-direction: row</view>
  <view class="flex-wrp" style="flex-direction:row;">
    <view class="flex-item bc_green">1</view>
    <view class="flex-item bc_red">2</view>
    <view class="flex-item bc_blue">3</view>
  </view>
</view>`;

var wxml22json = require('../assets/javascripts/wxml22json');
var wxml2json = wxml22json.wxml2json;

export default {
  name: 'TestSwitch',
  data(){
      return {
          show: false
      }
  },
  methods:{
      swicth: function () {
          var json = wxml2json(wxml);
          layerData.commit('setJson', {'json': json});

        
          if(layerData.state.json){
              this.show = true;
          }
      }
  },
  components:{
      'test-hierarchy' : TestHierarchy
  }
}
</script>
