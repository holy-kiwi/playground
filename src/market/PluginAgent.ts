import Plugin from "../models/Plugin"
import axios from 'axios';
const API_URL_BASE = 'https://cors-anywhere.herokuapp.com/https://ankxg1c1n7.execute-api.ap-northeast-2.amazonaws.com/dev';
const API_URL_PLUGIN_ALL = `${API_URL_BASE}/plugin-all`
const API_URL_PLUGIN = `${API_URL_BASE}/plugin/`

class PluginAgent {
    // plugins = [

    //     {
        //     manifest: {
        //         manifestVersion: "1",
        //         name: "미세먼지",
        //         version: "1.0",
        //         description: "미세먼지 설명",
        //         width: "100",
        //         height: "100",
        //         image: "https://image.ytn.co.kr/general/jpg/2018/1109/201811090019476768_t.jpg",
        //         download: "https://www.google.com/search?q=%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&newwindow=1&rlz=1C1SQJL_koKR776KR776&source=lnms&sa=X&ved=0ahUKEwjd_4y1jK3kAhUAyYsBHbOmAvQQ_AUIDCgA&biw=958&bih=1047&dpr=1"
        //     },
        //     htmlSource: "",
        //     jsSource:"",
        //     plugin_id:"id1",
        //     left: "100",
        //     top: "100"
        // },

    //     {
            // manifest: {
            //     manifestVersion: "1",
            //     name: "날씨",
            //     version: "1.0",
            //     description: "날씨 설명",
            //     width: "100",
            //     height: "100",
            //     image: "https://lh3.googleusercontent.com/HMwdVgyFtuQQU-aU6Dwpej5RdPocFF3XdJXeo2qyjzZXc4i0HYJEoZA77p9SNms-IZZ0",
            //     download: "https://www.google.com/search?q=%EB%82%A0%EC%94%A8+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&oq=%EB%82%A0%EC%94%A8+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&aqs=chrome..69i57.3437j0j7&sourceid=chrome&ie=UTF-8"
            // },
    //         htmlSource: "",
    //         jsSource:"",
    //         id:"id2",
    //         left: "100",
    //         top: "100"
    //     },


    //     {
    //         manifest: {
    //             manifestVersion: "1",
    //             name: "급식",
    //             version: "1.0",
    //             description: "급식 설명",
    //             width: "100",
    //             height: "100",
    //             image: "http://img.hani.co.kr/imgdb/resize/2017/1108/00501503_20171108.JPG",
    //             download: "https://www.google.com/search?q=%EA%B8%89%EC%8B%9D+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&oq=%EA%B8%89%EC%8B%9D+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&aqs=chrome.0.69i59.1961j0j9&sourceid=chrome&ie=UTF-8"
    //         },
    //         htmlSource: "",
    //         jsSource:"",
    //         id:"id3",
    //         left: "100",
    //         top: "100"
    //     }


    // ];

    async fetchPlugins(): Promise<Plugin[]> {
        // setTimeout(() => {
        //     cb && cb(this.plugins);
        // }, 1000);
        const result = await axios.get(API_URL_PLUGIN_ALL);
        // console.log(result.data.data.Items);        // object[]
        const items = result.data.data.Items;
        let plugins: Plugin[] = items.map(item => {
            item.manifest = JSON.parse(item.manifest);
            return item;
        });
        return plugins;
    }


    async fetchPlugin(plugin_id): Promise<Plugin> {
        const url = `${API_URL_PLUGIN}${plugin_id}`;
        const result = await axios.get(url);
        const my_plugin: Plugin = result.data.data.Item;
        const new_manifest = JSON.parse(result.data.data.Item.manifest);
        my_plugin.manifest = new_manifest;
        
        return my_plugin;
    }
}

export default new PluginAgent();
