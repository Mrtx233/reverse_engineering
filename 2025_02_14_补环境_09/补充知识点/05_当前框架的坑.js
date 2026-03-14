let obj = {}

var _map_get = Map.prototype.get;
Map.prototype.get = function(key){
    // 判断key对象是否是代理对象, 如果是代理对象. 获取到原始对象
    // js里面不存在这种东西

    // let tmp = key;
    // // 虚拟的定义某个属性
    //
    // while(true){
    //     let obj = tmp.__tar________get__;
    //     if (!obj){
    //         return _map_get.call(this, tmp);
    //     }
    //     tmp = obj;
    // }

    let obj = key.__tar________get__;
    if(obj){
        return _map_get.call(this, obj);
    } else {
        return _map_get.call(this, key);
    }
}

// 7777 9999
function create_proxy(obj){
    // // 1. 如果obj是代理对象. 直接返回就行了. 没必要继续了
    if(obj.__tar________get__){
        return obj;
    }
    return new Proxy(obj, {
        get(target, p, receiver) {
            if(p === '__tar________get__'){ // 随便定义一个虚拟属性
                // 只要有人从代理对象上访问该属性
                // 直接返回原始对象
                return obj;
            }
            // 普通的其他属性
            return Reflect.get(target, p, receiver);
        }
    });
}

let map = new Map();
map.set(obj, "节点数据");

// 存储之后, 上代理
// obj.__target__ => 虚拟的. 并不存在的.
obj = create_proxy(obj)
obj = create_proxy(obj)
obj = create_proxy(obj)

// 原始 => 代理1(原始) => 代理2(代理1(原始)) => 代理3(代理2(代理1(原始)))
console.log(map.get(obj))
