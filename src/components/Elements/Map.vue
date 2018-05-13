<template>
    <div class="map">
        <div :style="this.attr['style']" id="map"></div>
    </div>
</template>
<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp"></script>
<script>
import {TMap} from '../js/TMap'
export default {
    props:{
        attr:Object,
        children:Array
    },
    methods:{
    },
    mounted(){
        TMap('申请的key').then(qq => {
            var map = new qq.maps.Map(document.getElementById("map"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527, 116.397128),
                 zoom: 8
            });
        });
    }
  
}
</script>


<style scoped>
@import "../../../static/css/style.css";
</style>