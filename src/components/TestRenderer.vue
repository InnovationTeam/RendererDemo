<template>
    <Renderer :children="this.jsonData.children"></Renderer>
</template>

<script>
// import Renderer from './Renderer/Renderer';

export default {
  name: 'TestRenderer',
  data () {
    return {
      jsonData: {
		"type": "root",
        "children": [
            {
                "type": "element",
                "tag": "view",
                "attr": {
                    "style": "height:10rpx;width:20rpx;" //这里的解析有待debug，下面有讲
                },
                "children": [
                    {
                        "type": "element",
                        "tag": "button",
                        "attr": {
                            "class": ["button-type-primary", "button-size-default"]
                        }
                    }
                ]
            }
        ]
      }
    }
  }
//   ,
//   components:{
//       'renderer' : Renderer
//   }
}
</script>
