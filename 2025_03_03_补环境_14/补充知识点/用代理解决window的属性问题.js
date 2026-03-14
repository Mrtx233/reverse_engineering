window_obj = new Proxy(globalThis, {
    get(target, p, receiver) {
        let val = Reflect.get(target, p, receiver);
        if(typeof document !== 'undefined'){
            let reg1 = /^\$.*\$$/;
            let reg2 = /^\$\$.*$/;
            let reg3 = /^\%.*\%$/;
            if (p === '$$$' || p === '$$p' || p === '_$$n'){
                return val;
            }
            if(reg1.test(p) || reg2.test(p) || reg3.test(p)){
                return val;
            }
            let tag = null;
            try {
                tag = document.getElementById(p);
            } catch (e) {}

            if(tag){
                return tag;
            } else {
                let tags = null;
                try{
                    tags = document.getElementsByName(p);
                } catch (e) {}
                if(tags === null){
                    return val;
                }
                if(tags.length === 1){
                    return tags[0];
                } else if(tags.length > 1){
                    return tags;
                } else {
                    return val;
                }
            }
        }
        return val;
    }
});