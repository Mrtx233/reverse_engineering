(function(plugins){

    // 直接处理V8 catch语句中的stack
    plugins.handle_error = function handle_error(err){
        // 这里是直接处理所有异常堆栈的位置.....
        err.stack = err.stack.replaceAll("vm2", "");
        err.stack = err.stack.replaceAll("vm", "");
        err.stack = err.stack.replaceAll("node:", "");
        my_env.qiao_log("有错误", err.stack);
    }
    plugins.throw_error = function throw_error(error_type, message){
        let err = new Error(message);
        Object.setPrototypeOf(err, error_type.prototype);
        plugins.handle_error(err);
        throw err;
    }
    // hook+装饰器
    // 处理异常信息
    function createErrorWrapper(OriginalError) {
        const ErrorHandler = function(...args) {
            const err = new OriginalError(...args);
            if (err.stack) {
                my_env.plugins.handle_error(err);
            }
            return err;
        };
        // 改名字.
        Object.defineProperty(ErrorHandler, "name",{
            value:OriginalError.name
        });
        plugins.set_native(ErrorHandler); // 處理toString()

        ErrorHandler.prototype = OriginalError.prototype;
        ErrorHandler.stackTraceLimit = OriginalError.stackTraceLimit;
        ErrorHandler.captureStackTrace = OriginalError.captureStackTrace;
        return ErrorHandler;
    }

    // 创建所有错误类型的包装器
    const ErrorHandler = createErrorWrapper(Error);
    const TypeErrorHandler = createErrorWrapper(TypeError);
    const ReferenceErrorHandler = createErrorWrapper(ReferenceError);
    const SyntaxErrorHandler = createErrorWrapper(SyntaxError);
    const RangeErrorHandler = createErrorWrapper(RangeError);
    const URIErrorHandler = createErrorWrapper(URIError);
    const EvalErrorHandler = createErrorWrapper(EvalError);

    // 定义到全局对象
    Object.defineProperties(globalThis, {
        Error: {value: ErrorHandler},
        TypeError: {value: TypeErrorHandler},
        ReferenceError: {value: ReferenceErrorHandler},
        SyntaxError: {value: SyntaxErrorHandler},
        RangeError: {value: RangeErrorHandler},
        URIError: {value: URIErrorHandler},
        EvalError: {value: EvalErrorHandler}
    });

})(my_env.plugins);
