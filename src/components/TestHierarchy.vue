<template>
    <!-- <Renderer :children="msg.children"></Renderer> -->
    <hierarchy :jsonData="data"></hierarchy>
</template>

<script>
import Hierarchy from './Hierarchy/Hierarchy';
import store from '../store/layer_data';
export default {
  name: 'TestHierarchy',
  data () {
    return {
      data: store.state.json
    }
  },
  components:{
      'hierarchy' : Hierarchy
  }
}
</script>
