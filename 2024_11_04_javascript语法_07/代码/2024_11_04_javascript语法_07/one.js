function fn(){
    // 拿到用户输入的所有东西
    var uname = document.querySelector("#uname").value; // value属性就是表单元素的值
    var pwd = document.querySelector("#pwd").value;
    if (uname === ''){
        document.querySelector("#uname_show").innerText="用户名不能为空!";
        return false;
    }
    if (pwd === ''){
        document.querySelector("#pwd_show").innerText="密码也不能为空!";
        return false;
    } else {
        console.log("哈哈哈1111111");
        // 密码加密
        pwd += "encrypted password";
        console.log("哈哈哈");
        // 塞回密码框
        document.querySelector("#pwd").value = pwd;
    }
    // 计算一个token
    var token = "xxxxxx-xxxxx-xxxx-xxxx";
    document.querySelector("#login_token").value = token;
    // 提交表单
    document.querySelector("form").submit();
}