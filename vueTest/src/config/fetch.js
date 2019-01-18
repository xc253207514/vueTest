import {domainUrl} from './env'
import {getStore} from './data-utils'

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    if(url.indexOf("http") == -1){
        url = domainUrl + url;
    }
    // GET请求拼接参数字符串及URL
    if (type == 'GET') {
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;

        }
    }
    // 使用Fetch请求
    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            method: type,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '* ',
                'Access-Control-Request-Method': ' GET,PUT, DELETE,OPTIONS, POST'
            },
            mode: "cors",
            cache: 'no-cache'
        }
        if (type == 'POST') {
            /*let params = "";
            for(let p in data){
                params = params + encodeURIComponent(p)+'='+encodeURIComponent(data[p])+'&';
            }*/
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }
        // const response = await fetch(url, requestConfig);
        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            //throw new Error(error);
            return null;
        }
    } else {       
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject("Microsoft.XMLHTTP");  
            }

            let sendData = '';
            if (type == 'POST') {
                /*for(let p in data){
                    sendData = sendData + encodeURIComponent(p)+'='+encodeURIComponent(data[p])+'&';
                }*/
                sendData = JSON.stringify(data);
            }
            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.setRequestHeader("Origin", "*");
            requestObj.setRequestHeader("Access-Control-Request-Methods", " GET, PUT, DELETE,OPTIONS, POST");

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    console.log("url:"+url+" status:"+requestObj.status);
                    if (requestObj.status == 200) {
                        let obj = requestObj.response;
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } 
                }else if(requestObj.readyState == 3){
                    
                }
            }
            
            requestObj.send(sendData);
        })
    }
}