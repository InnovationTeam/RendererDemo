<template>
    <div v-if="this.element.type != 'text'"  
        @dragstart="dragstart_handler($event);" @dragover="dragover_handler($event);" @drop="drop_handler($event);"
        @dragenter="dragenter_handler($event)" @dragleave="dragleave_handler($event)" @click="click($event)"
        :draggable="true" :id="this.element.id" class="draggable">

        <template v-if="this.hasChildren">
            <span class="folderIcon"><icon iconType="angle_right"/></span>
        </template>
        
        {{GetID()}}

        <template v-if="this.show">
            <Hierarchy class="children" :children='this.element.children'></Hierarchy>
        </template>
    </div>
</template>

<script>
import store from '../../store/layer_data';
import Icon from '../common/Icon';


export default {
    name: 'Layer',
    data(){
        return{
            show: true
        }
    },
    props: {
        element: Object
    },
    methods:{
        GetID: function(){
            return this.element.id;
        },
        dragstart_handler: function(ev){
            // 防止事件冒泡
            ev.stopPropagation();
            var id = ev.target.attributes['id'].value;
            ev.dataTransfer.setData("id", id);

            this.show = false;
        },
        dragover_handler: function(ev){
            // 防止事件冒泡
            ev.stopPropagation();
            // 使用preventDefault避免对其他事件的处理
            ev.preventDefault();
            ev.dataTransfer.dropEffect = "move";

            return false;
        },
        drop_handler: function(ev){
            // 防止事件冒泡
            ev.stopPropagation();
            // 使用preventDefault避免对其他事件的处理
            ev.preventDefault();
            
            var childId = ev.dataTransfer.getData("id");
            var targetId = ev.target.attributes['id'].value;
            if(childId === targetId){
                return;
            }

            var info = store.state.json.info;
            var childNode = info[childId];
            
            var targetNode = info[targetId];
            var parentNode = info[childNode.fatherID];

            childNode.fatherID = targetId;
            this.removeChild(childId, parentNode.children);
            this.addChild(childId, targetNode.children);
        },
        dragenter_handler: function (ev) {

        },
        dragleave_handler: function (ev) {

        },
        removeChild: function(id, array){
            for(var i = 0; i < array.length; i++){
                if(array[i] === id){
                    array.splice(i, 1);
                }
            }
        },
        addChild: function(child, array){
            if(array.indexOf(child) === -1){
                array.push(child);
            }
        },
        click: function(ev){
            ev.stopPropagation();
            ev.preventDefault();
            this.show = !this.show;
        }
    },
    computed: {
        hasChildren: function(){
            if(this.element.children.length > 1){
                return true;
            }else if(this.element.children.length === 1){
                var info = store.state.json.info;
                if(info[this.element.children[0]].type != 'text'){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    },
    components: {
        'icon': Icon
    }
}
</script>

<style>
.draggable {
    will-change: transform;
    text-align:left;
    /* cursor: move; */
    transition: all 200ms;
    user-select: none;

    position: relative;
    width: 100%;
    font-family: 'Arial';
    font-size: 14px;
    margin-top: 2px;
    margin-bottom: 2px;
}

.draggable:hover:after {
    opacity: 1;
    transform: translate(0);
}

.over {
    transform: scale(1.1, 1.1);
}


.children{
    margin-left: 15px;
}

span.folderIcon {
    margin-right: 3px;
}


.down{
    transform: rotate(90deg);
}
</style>
