<template>
    <div>
        <button @click="swicth">
            解析
        </button>
        <button @click="getText">
            组装
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
</view>
<view class="section">
  <view class="section__title">flex-direction: row</view>
  <view class="flex-wrp" style="flex-direction:row;">
    <view class="flex-item bc_green">1</view>
    <view class="flex-item bc_red">2</view>
    <view class="flex-item bc_blue">3</view>
  </view>
</view>`;

var jsonData = `
{
    "children":["31"],
    "info":{
        "31":{
            "id":"31",
            "cfgData":{
                "domClass":["class1", "class2"],
                "domID":"",
                "domStyle":{},
                "size":0,
                "type":1,
                "plain":false,
                "disabled":false,
                "loading":false,
                "text":"Hello"
            },
            "tagName":"button",
            "children":[],
            "fatherID":"main",
            "type": "element"
        }
    }
}
`;

var wxml22json = require('../assets/javascripts/wxml22json');
var wxml2json = wxml22json.wxml2json;
var json2wxml = wxml22json.json2wxml;

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
          console.log(layerData.state.json);


          if(layerData.state.json){
              this.show = true;
              console.log('show');
          }
      },
      getText: function(){
        //   var text = json2wxml(layerData.state.json);
        var text = json2wxml(JSON.parse(jsonData));
          console.log(text);
      }
  },
  components:{
      'test-hierarchy' : TestHierarchy
  }
}
</script>
