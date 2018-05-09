<template>
    <div class="list">
        <template v-if="children && children.length">

            <layer :element="jsonData"></layer>

            <div class="children">
                <template v-for="child in children">
                    <Hierarchy :jsonData="child" :key="child.id"></Hierarchy>
                </template>
            </div>
        </template>
        <template v-else>
            <layer :element="jsonData"></layer>
        </template>
    </div>
</template>

<script>
import Layer from './Layer';

export default {
  name: 'Hierarchy',
  props: {
      jsonData: Object
  },
  computed:{
      children() {
          return this.jsonData.children
      }
  },
  components: {
      'layer': Layer
  }
}
</script>


<style>
.list {
  padding: 0px;
  width: 300px;
}

.children{
    margin-left: 10px;
}
</style>
