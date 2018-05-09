<template>
    <!-- <Renderer :children="msg.children"></Renderer> -->
    <hierarchy :jsonData="data"></hierarchy>
</template>

<script>
import Hierarchy from './Hierarchy/Hierarchy';

export default {
  name: 'TestHierarchy',
  data () {
    return {
      data: {
		"type": "root",
		"elemid": 'root',
        "children": [
          {
            "type": "element",
            "tag": "div",
			"elemid": 'div1',
			"children": [
                {
                    "type": "element",
                    "tag": "p",
                    "elemid": 'p2',
                    "children": []
                },
                {
                    "type": "element",
                    "tag": "div",
                    "elemid": 'div3',
                    "children": [
                        {
                            "type": "element",
                            "tag": "p",
                            "elemid": 'p4',
                            "children": []
                        }
                    ]
                }
            ]
          }
        ]
      }
    }
  },
  components:{
      'hierarchy' : Hierarchy
  }
}
</script>
