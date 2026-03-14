function fn(){
    console.log(new.target);
    if(new.target){ // 通过new执行的函数
        console.log("函数被new")
    } else {
        console.log("函数被执行")
    }

}

fn()
new fn()