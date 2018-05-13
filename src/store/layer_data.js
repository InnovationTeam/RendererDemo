import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        
    },
    state: {
        json: {
            "type": "root",
            "elemid": 'root',
            "children": [
                {
                    "type": "element",
                    "tag": "view",
                    "elemid": 'view1',
                    "attr": {
                        "class": "container"
                    },
                    "children": [
                        {
                            "type": "element",
                            "tag": "button",
                            "elemid": 'button2',
                            "attr": {
                                "type": "primary",
                                "size": "default"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "text": "按钮"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "tag": "button",
                            "elemid": 'button3',
                            "attr": {
                                "type": "warn",
                                "size": "default"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "text": "按钮"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "tag": "button",
                            "elemid": 'button4',
                            "attr": {
                                "type": "default",
                                "size": "default"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "text": "按钮"
                                }
                            ]
                        },
                        {
                            "type": "element",
                            "tag": "icon",
                            "elemid": 'icon5',
                            "attr": {
                                "type": "success",
                                "size": "40",
                                "color": 'red'
                            }
                        },
                        {
                            "type": "element",
                            "tag": "icon",
                            "elemid": 'icon6',
                            "attr": {
                                "type": "search",
                                "color": 'blue'
                            }
                        },
                        {
                            "type": "element",
                            "tag": "icon",
                            "elemid": 'icon7',
                            "attr": {
                                "type": "success_no_circle",
                                "size": '30',
                                "color": 'yellow'
                            }
                        },
                        {
                            "type":"element",
                            "tag":"image",
                            "elemid":"image1",
                            "attr":{
                                "src":"../../../static/images/1.jpg",
                                "style":"width:100%;height:50px"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"input",
                            "elemid":"input1",
                            "attr":{
                                "value":"value1",
                                "type":"text",
                                "password":false,
                                "style":"width:100%;height:50px"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"checkbox",
                            "elemid":"checkbox1",
                            "attr":{
                                "value":"value1",
                                "disabled":false,
                                "checked":false,
                                "color":"yellow",
                                "style":"width:100%;height:50px"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"map",
                            "elemid":"map1",
                            "attr":{
                                "style":"width:100%;height:500px"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"progress",
                            "elemid":"progress1",
                            "attr":{
                                "style":"width:100%;height:50px"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"radio",
                            "elemid":"radio1",
                            "attr":{
                                "style":"display:none"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"slider",
                            "elemid":"slider1",
                            "attr":{
                                "value":80,
                                "style":"width:100%;height:50px"
                            }
                        },
                        {
                            "type":"element",
                            "tag":"video",
                            "elemid":"video1",
                            "attr":{
                                "src":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                                "style":"width:100%;height:500px"
                            }
                        }
                    ]
                }
            ]
        }        
    },
    mutations: {
    
    }
}) 