<template>
  <div>
        <img :src="attr['src']" :class="attr['class']">
        {{GetStr()}}
  </div>
</template>

<script>

export default {
  name: 'Img',
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
          return `<img ${this.GetAttrStr()}>`;
      }
  }
}
</script>

