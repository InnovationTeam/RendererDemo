<template>
  <div :style="attr['style']">
    <Renderer :children="this.children"></Renderer>      
  </div>
</template>

<script>
// import Renderer from '../Renderer/Renderer';
// console.log(Renderer);

export default {
    name: 'View',
    props: {
        attr: Object,
        children: Array
    },
    methods: {
        GetKey: function(){
            return Object.keys(this.attr);
        },
        GetAttrStr: function(){
            var attrKeys = this.GetKey();
            var str = '';
            attrKeys.forEach(element => {
                str = str + element + '=\"' + this.attr[element] + '\" ';
            });
            return str;
        },
        GetStr: function(){
            return `<div ${this.GetAttrStr()}></div>`;
        }
    }
    // ,
    // components:{
    //     'renderer' : Renderer
    // }
}
</script>

