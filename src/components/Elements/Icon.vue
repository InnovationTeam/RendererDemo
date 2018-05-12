<template>
    <div class="icon">
        <div :class="this.classList" :style="this.styles">
            <span>
				{{this.symbol}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Icon',
	data () {
		return  {
			symbols: {
				'success': '✔',
                'success_no_circle': '✔',
                'info': 'i',
                'warn': '!',
                'waiting': '┕',
                'cancel': '✖',
                'download': '⇩',
                'clear': '✖',
                'search': '▷' 
			}
		}
	},
    props: {
        attr: Object,
        children: Array
    },
    computed:{
		type: function(){
			return this.attr['type'];
		},
        classList: function(){
			var classlist = this.attr['class'];

			if(!classlist){
				classlist = new Array();
			}

			classlist.push('icon-like');
			classlist.push('icon-type-' + this.type);
			if(this.type === 'success_no_circle' || this.type === 'search'){
				classlist.push('icon-like-special');
			}else{
				classlist.push('icon-like-common');
			}

			return classlist;
        },
        symbol: function() {
            if(this.type){
                return this.symbols[this.type];
            }
		},
		styles: function(){
			var styleObject = new Object();
			var size = parseInt(this.attr['size']);
			var color = this.attr['color'];

			if(this.type === 'success_no_circle' || this.type === 'search'){
				if(size){
					styleObject['font-size'] = size + 'px';
				}
				if(color){
					styleObject['color'] = color + ' !important';
				}
			}else{
				if(size){
					styleObject['width'] = size + 'px';
					styleObject['height'] = size + 'px';
					styleObject['font-size'] = (16 / 23 * size) + 'px';
					styleObject['border-radius'] = size + 'px';
					styleObject['border'] = '0.5px solid';
				}

				if(color){
					styleObject['background-color'] = color + ' !important';
					styleObject['border-color'] = color + ' !important';
				}
			}

			return styleObject;
		}
    }
}
</script>


<style>
.icon{
	display: inline-block;
}

.icon-like{
	display: inline-block;
	cursor: pointer;
	vertical-align: middle;
}

.icon-like-common{
	display: inline-block;
	cursor: pointer;
	vertical-align: middle;
	/* 这四个属性相关的，同时相应改变 */
	width:22px;
	height: 22px;
	font-size: 14px;
	border-radius: 15px;
	border: 0.5px solid;
}

.icon-like-special{
	display: inline-block;
	cursor: pointer;
	vertical-align: middle;
	/*响应尺寸改变*/
	font-size: 23px;
}



.icon-type-success{
	background-color: #1AAD19;
	border-color: #1AAD19;
	color: #ffffff;
	
}

.icon-type-success_no_circle{
	color: #1AAD19;
}

.icon-type-info{
	background-color: #10AEFF;
	border-color: #10AEFF;
	color: #ffffff;
}

.icon-type-warn{
	background-color: #F76260;
	border-color: #F76260;
	color: #ffffff;
}

.icon-type-waiting{
	background-color: #10AEFF;
	border-color: #10AEFF;
	color: #ffffff;
}

.icon-type-cancel{
	background-color: #ffffff;
	color: #F76260;
	border-color: #F76260;
}

.icon-type-download{
	background-color: #1AAD19;
	border-color: #1AAD19;
	color: #ffffff;
}

.icon-type-search{
	color: #B2B2B2;
}

.icon-type-clear{
	background-color: #B2B2B2;
	border-color: #B2B2B2;
	color: #ffffff;
}
</style>
