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
                        }
                    ]
                }
            ]
        }        
    },
    mutations: {
    
    }
}) 