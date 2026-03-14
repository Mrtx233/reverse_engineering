"use strict";
(function(){
    'use strict';
    let x = eval('!new function(){eval("this.a=1")}().a');
    console.log(x);
}())