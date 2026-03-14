(function(plugins){
    plugins.handle_error = function handle_error(err){
        err.stack = "预留的一个钩子.后期单独处理 \n " + err.stack
    }
    plugins.throw_error = function throw_error(error_type, message){
        let err = new Error(message);
        Object.setPrototypeOf(err, error_type.prototype);
        plugins.handle_error(err);
        throw err;
    }
})(my_env.plugins);
