<template>
    <div class="button">
        <button :class="this.attr['class']">按钮</button>
    </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
      attr: Object,
      children: Array
  },
  methods: {
      
  }
}
</script>

<style>
button{

	border-radius:5px;
    
    text-align: center;
    text-decoration: none;
    display: inline-block;
    
    cursor: pointer;
}

.button{
	display: inline-block;
}

.button-type-default{
	border: 1px solid #D7D7D7;
    background-color: #f8f8f8;
    color: rgb(49, 44, 44);
}

.button-type-primary{
	border: 1px solid #1AAD19;
    background-color: #1AAD19;
    color: white;
}

.button-type-warn{
	border: 1px solid #E64340;
    background-color: #E64340;
    color: white;
}

.button-size-default{
    min-width:65px;
    min-height:43px;
    font-size: 18px;
    padding-left: 12px; 
    padding-right: 12px;
}

.button-size-mini{
    min-width:65px;
    min-height:30px;
    font-size: 14px;
    padding-left: 12px; 
    padding-right: 12px;
	
}

.button-attr-primary-plain{
	background-color: white !important;
	color: #1AAD19 !important;
}

.button-attr-default-plain{
	background-color: white !important;
	color: rgb(49, 44, 44) !important;
	border-color: rgb(49, 44, 44) !important;
}

.button-attr-warn-plain{
	background-color: white !important;
	color: #E64340 !important;
	
}

.button-attr-loading-default{
	height: 15px;
	padding-right: 3px;
}

.button-attr-loading-mini{
	height: 10px;
	padding-right: 1px;
}
</style>

