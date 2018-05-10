<template>
    <div @dragstart="dragstart_handler($event);" @dragover="dragover_handler($event);" @drop="drop_handler($event);"
        @dragenter="dragenter_handler($event)" @dragleave="dragleave_handler($event)"
        :draggable="true" :elemid="element.elemid" class="draggable" style="opacity: 1;">
        {{GetElemId()}}
    </div>
</template>

<script>
import store from '../../store/layer_data';
var source_node, source_par;
var tag_dict = new Array();

var data = store.state.json;

export default {
    name: 'Layer',
    props: {
        element: Object,
    },
    methods:{
        GetElemId: function(){
            return this.element.elemid;
        },
        dragstart_handler: function(ev){
            ev.dataTransfer.setData("elemID", ev.target.attributes['elemid'].value);
            ev.target.style.opacity = 0.4;

            //直接使用全局变量保存
            source_node = ev.target;
            source_par = ev.target.parentNode;

            ev.dataTransfer.effectAllowed = 'move';
        },
        dragover_handler: function(ev){
            // 使用preventDefault避免对其他事件的处理
            ev.preventDefault();
            // Set the dropEffect to move
            ev.dataTransfer.dropEffect = "move";

            return false;
        },
        drop_handler: function(ev){
            ev.preventDefault();
            // Get the id of the target and add the moved element to the target's DOM
            var id = ev.dataTransfer.getData("elemID");

            //node储存了这个节点里所有的信息
            //若目标节点还是父节点或本身，则不进行操作

            // if(source_par === ev.target || source_node === ev.target 
            //     || ev.target.parentNode === source_node)
            //     return;

            console.log(source_par.nodeName);
            
            
            //若父节点是BODY说明处在最外层，直接删除
            // if(source_par.nodeName === 'BODY')
            //     document.removeChild(source_node);
            // else{
            //     try{
            //         source_par.removeChild(source_node);
            //         console.log(source_par.removeChild);
            //         console.log(source_node);
            //     }
            //     catch(err){
            //         console.log('error');
            //     }

                var source_json = this.findChild_json(id, data);
                this.findParent_json_and_remove(id, data);

                this.find_json_and_insert(ev.target.attributes['elemid'].value, data, source_json);
                
            // }

            // if(ev.target.childElementCount === 0)
            //     ev.target.appendChild(source_node);
            // else
            //     ev.target.insertBefore(source_node, ev.target.children[0]);

            console.log(JSON.stringify(data, null, 4));
        },
        dragenter_handler: function (ev) {
            // ev.target.classList.add('over');
        },
        dragleave_handler: function (ev) {
            // ev.stopPropagation();
            // ev.target.classList.remove('over');
        },

        //找到父节点对应的json对象并删去移动子节点
        findParent_json_and_remove: function (id, data){
            for(var i=0; i<data.children.length; i++) 
            { 
            if(data.children[i]["elemid"] === id){
                data.children.splice(i, 1);
                return data;
            } 
            var t = this.findParent_json_and_remove(id, data.children[i]);
            if(t!==null)
                    return data;
            } 
            return null;
        },
        //找到父节点对应的json对象并且插入
        find_json_and_insert: function (id, data, new_node){
            if(data["elemid"] === id){
                data["children"].push(new_node);
                return data;
            }
            for(var i=0; i<data.children.length; i++) 
            { 
            var t = this.find_json_and_insert(id, data.children[i], new_node);
            if(t!=null && t["elemid"] === id){
                return t;
            } 
            } 
            return null;
        },
        //找到子节点对应的json
        findChild_json: function (id, data){
            if(data["elemid"] === id)
                return data;
            for(var i=0; i<data.children.length; i++) 
            { 
            var t = this.findChild_json(id, data.children[i]);
            if(t!=null && t["elemid"] === id){
                return t;
            } 
            } 
            return null;
        },
        identify_json: function (data){
            if(!tag_dict.hasOwnProperty(data.tag))
                tag_dict[data.tag] = 0
            tag_dict[data.tag] ++;
            if(data.tag)
                data.elemID = data.tag +  tag_dict[data.tag].toString();
            for(var i=0; i<data.children.length; i++) 
            { 
                this.identify_json(data.children[i]);
            } 
        }
    }
}
</script>

<style>
.draggable {
  will-change: transform;
  text-align:left;
  cursor: move;
  transition: all 200ms;
  user-select: none;

  position: relative;
}

.draggable:hover:after {
  opacity: 1;
  transform: translate(0);
}

.over {
  transform: scale(1.1, 1.1);
}
</style>
