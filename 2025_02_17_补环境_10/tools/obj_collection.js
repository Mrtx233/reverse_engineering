

function collect_location(){
    let props = Object.getOwnPropertyNames(location);
    let obj = {};
    for (let i = 0 ; i < props.length; i++){
        let pop_name = props[i];
        let val = location[pop_name];
        let v = '';
        switch(typeof val){
            case "function":
                continue;
            case "object":
                v = val === null ? null: {};
                break;
            case "string":
                v = val;
                break;
            default:
                v = val;
        }
        obj[pop_name] = v;
    }
    return JSON.stringify(obj);
}

function collect_navigator(){
    let props = Object.getOwnPropertyNames(Navigator.prototype);
    let obj = {};
    for (let i = 0 ; i < props.length; i++){
        let pop_name = props[i];
        let val = navigator[pop_name];
        let v = '';
        switch(typeof val){
            case "function":
                continue;
            case "object":
                v = val === null ? null: val;
                break;
            case "string":
                v = val;
                break;
            default:
                v = val;
        }
        obj[pop_name] = v;
    }
    return JSON.stringify(obj);
}

function collect_start_navigator(){
    return `
    my_env.memory.navigator['userAgent'] = "${navigator.userAgent}";
    my_env.memory.navigator['appVersion'] = "${navigator.appVersion}";
    my_env.memory.navigator['userAgentData'] = ${JSON.stringify(navigator.userAgentData)};
    `
}
