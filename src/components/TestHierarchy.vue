<template>
        <!-- <Renderer :children="msg.children"></Renderer> -->
      <hierarchy :children="this.children"></hierarchy>
</template>

<script>
import Hierarchy from './Hierarchy/Hierarchy';
import store from '../store/layer_data';
console.log(store.state.json.children);

export default {
  name: 'TestHierarchy',
  data () {
    return {
      children: store.state.json.children
    }
  },
  computed:{
    message: function(){
      console.log(this.children);
    }
  },
  components:{
      'hierarchy' : Hierarchy
  }
}
</script>
