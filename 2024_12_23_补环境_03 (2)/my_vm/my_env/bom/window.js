
    // 构造方法的定义
    // 对象的创建
    // symbol处理
    var Window = function Window(){
        throw new Error("Illegal constructor");
    }
    // 处理symbol
    my_env.plugins.re_def_sym(Window);

    // toString 搞定了
    my_env.plugins.set_native(Window);

    // 千万不能new
    var window = Object.create(Window.prototype);


                my_env.plugins.def_obj_prop(window, "0",true,true,false,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "Object",true,false,true,
                    function Object(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Function",true,false,true,
                    function Function(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Array",true,false,true,
                    function Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Number",true,false,true,
                    function Number(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "parseFloat",true,false,true,
                    function parseFloat(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "parseInt",true,false,true,
                    function parseInt(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Infinity",false,false,false,
                    Infinity,
                );

                my_env.plugins.def_obj_prop(window, "NaN",false,false,false,
                    NaN,
                );

                my_env.plugins.def_obj_prop(window, "undefined",false,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "Boolean",true,false,true,
                    function Boolean(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "String",true,false,true,
                    function String(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Symbol",true,false,true,
                    function Symbol(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Date",true,false,true,
                    function Date(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Promise",true,false,true,
                    function Promise(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RegExp",true,false,true,
                    function RegExp(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Error",true,false,true,
                    function Error(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AggregateError",true,false,true,
                    function AggregateError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EvalError",true,false,true,
                    function EvalError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RangeError",true,false,true,
                    function RangeError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReferenceError",true,false,true,
                    function ReferenceError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SyntaxError",true,false,true,
                    function SyntaxError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TypeError",true,false,true,
                    function TypeError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "URIError",true,false,true,
                    function URIError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "globalThis",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "JSON",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "Math",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "Intl",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "ArrayBuffer",true,false,true,
                    function ArrayBuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Atomics",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "Uint8Array",true,false,true,
                    function Uint8Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Int8Array",true,false,true,
                    function Int8Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Uint16Array",true,false,true,
                    function Uint16Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Int16Array",true,false,true,
                    function Int16Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Uint32Array",true,false,true,
                    function Uint32Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Int32Array",true,false,true,
                    function Int32Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Float32Array",true,false,true,
                    function Float32Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Float64Array",true,false,true,
                    function Float64Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Uint8ClampedArray",true,false,true,
                    function Uint8ClampedArray(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BigUint64Array",true,false,true,
                    function BigUint64Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BigInt64Array",true,false,true,
                    function BigInt64Array(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DataView",true,false,true,
                    function DataView(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Map",true,false,true,
                    function Map(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BigInt",true,false,true,
                    function BigInt(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Set",true,false,true,
                    function Set(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WeakMap",true,false,true,
                    function WeakMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WeakSet",true,false,true,
                    function WeakSet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Proxy",true,false,true,
                    function Proxy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Reflect",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "FinalizationRegistry",true,false,true,
                    function FinalizationRegistry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WeakRef",true,false,true,
                    function WeakRef(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "decodeURI",true,false,true,
                    function decodeURI(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "decodeURIComponent",true,false,true,
                    function decodeURIComponent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "encodeURI",true,false,true,
                    function encodeURI(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "encodeURIComponent",true,false,true,
                    function encodeURIComponent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "escape",true,false,true,
                    function escape(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "unescape",true,false,true,
                    function unescape(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "eval",true,false,true,
                    function eval(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "isFinite",true,false,true,
                    function isFinite(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "isNaN",true,false,true,
                    function isNaN(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "console",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "Option",true,false,true,
                    function Option(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Image",true,false,true,
                    function Image(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Audio",true,false,true,
                    function Audio(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitURL",true,false,true,
                    function URL(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitRTCPeerConnection",true,false,true,
                    function RTCPeerConnection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitMediaStream",true,false,true,
                    function MediaStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebKitMutationObserver",true,false,true,
                    function MutationObserver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebKitCSSMatrix",true,false,true,
                    function DOMMatrix(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XSLTProcessor",true,false,true,
                    function XSLTProcessor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XPathResult",true,false,true,
                    function XPathResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XPathExpression",true,false,true,
                    function XPathExpression(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XPathEvaluator",true,false,true,
                    function XPathEvaluator(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XMLSerializer",true,false,true,
                    function XMLSerializer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XMLHttpRequestUpload",true,false,true,
                    function XMLHttpRequestUpload(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XMLHttpRequestEventTarget",true,false,true,
                    function XMLHttpRequestEventTarget(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XMLHttpRequest",true,false,true,
                    function XMLHttpRequest(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XMLDocument",true,false,true,
                    function XMLDocument(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WritableStreamDefaultWriter",true,false,true,
                    function WritableStreamDefaultWriter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WritableStreamDefaultController",true,false,true,
                    function WritableStreamDefaultController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WritableStream",true,false,true,
                    function WritableStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Worker",true,false,true,
                    function Worker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Window",true,false,true,
                    function Window(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WheelEvent",true,false,true,
                    function WheelEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebSocket",true,false,true,
                    function WebSocket(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLVertexArrayObject",true,false,true,
                    function WebGLVertexArrayObject(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLUniformLocation",true,false,true,
                    function WebGLUniformLocation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLTransformFeedback",true,false,true,
                    function WebGLTransformFeedback(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLTexture",true,false,true,
                    function WebGLTexture(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLSync",true,false,true,
                    function WebGLSync(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLShaderPrecisionFormat",true,false,true,
                    function WebGLShaderPrecisionFormat(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLShader",true,false,true,
                    function WebGLShader(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLSampler",true,false,true,
                    function WebGLSampler(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLRenderingContext",true,false,true,
                    function WebGLRenderingContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLRenderbuffer",true,false,true,
                    function WebGLRenderbuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLQuery",true,false,true,
                    function WebGLQuery(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLProgram",true,false,true,
                    function WebGLProgram(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLFramebuffer",true,false,true,
                    function WebGLFramebuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLContextEvent",true,false,true,
                    function WebGLContextEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLBuffer",true,false,true,
                    function WebGLBuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGLActiveInfo",true,false,true,
                    function WebGLActiveInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebGL2RenderingContext",true,false,true,
                    function WebGL2RenderingContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WaveShaperNode",true,false,true,
                    function WaveShaperNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VisualViewport",true,false,true,
                    function VisualViewport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VirtualKeyboardGeometryChangeEvent",true,false,true,
                    function VirtualKeyboardGeometryChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ValidityState",true,false,true,
                    function ValidityState(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VTTCue",true,false,true,
                    function VTTCue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "UserActivation",true,false,true,
                    function UserActivation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "URLSearchParams",true,false,true,
                    function URLSearchParams(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "URLPattern",true,false,true,
                    function URLPattern(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "URL",true,false,true,
                    function URL(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "UIEvent",true,false,true,
                    function UIEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TrustedTypePolicyFactory",true,false,true,
                    function TrustedTypePolicyFactory(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TrustedTypePolicy",true,false,true,
                    function TrustedTypePolicy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TrustedScriptURL",true,false,true,
                    function TrustedScriptURL(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TrustedScript",true,false,true,
                    function TrustedScript(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TrustedHTML",true,false,true,
                    function TrustedHTML(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TreeWalker",true,false,true,
                    function TreeWalker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TransitionEvent",true,false,true,
                    function TransitionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TransformStreamDefaultController",true,false,true,
                    function TransformStreamDefaultController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TransformStream",true,false,true,
                    function TransformStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TrackEvent",true,false,true,
                    function TrackEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TouchList",true,false,true,
                    function TouchList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TouchEvent",true,false,true,
                    function TouchEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Touch",true,false,true,
                    function Touch(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TimeRanges",true,false,true,
                    function TimeRanges(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextTrackList",true,false,true,
                    function TextTrackList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextTrackCueList",true,false,true,
                    function TextTrackCueList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextTrackCue",true,false,true,
                    function TextTrackCue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextTrack",true,false,true,
                    function TextTrack(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextMetrics",true,false,true,
                    function TextMetrics(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextEvent",true,false,true,
                    function TextEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextEncoderStream",true,false,true,
                    function TextEncoderStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextEncoder",true,false,true,
                    function TextEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextDecoderStream",true,false,true,
                    function TextDecoderStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TextDecoder",true,false,true,
                    function TextDecoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Text",true,false,true,
                    function Text(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TaskSignal",true,false,true,
                    function TaskSignal(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TaskPriorityChangeEvent",true,false,true,
                    function TaskPriorityChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TaskController",true,false,true,
                    function TaskController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "TaskAttributionTiming",true,false,true,
                    function TaskAttributionTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SyncManager",true,false,true,
                    function SyncManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SubmitEvent",true,false,true,
                    function SubmitEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StyleSheetList",true,false,true,
                    function StyleSheetList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StyleSheet",true,false,true,
                    function StyleSheet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StylePropertyMapReadOnly",true,false,true,
                    function StylePropertyMapReadOnly(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StylePropertyMap",true,false,true,
                    function StylePropertyMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StorageEvent",true,false,true,
                    function StorageEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Storage",true,false,true,
                    function Storage(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StereoPannerNode",true,false,true,
                    function StereoPannerNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StaticRange",true,false,true,
                    function StaticRange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SourceBufferList",true,false,true,
                    function SourceBufferList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SourceBuffer",true,false,true,
                    function SourceBuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ShadowRoot",true,false,true,
                    function ShadowRoot(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Selection",true,false,true,
                    function Selection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SecurityPolicyViolationEvent",true,false,true,
                    function SecurityPolicyViolationEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ScriptProcessorNode",true,false,true,
                    function ScriptProcessorNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ScreenOrientation",true,false,true,
                    function ScreenOrientation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Screen",true,false,true,
                    function Screen(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Scheduling",true,false,true,
                    function Scheduling(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Scheduler",true,false,true,
                    function Scheduler(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGViewElement",true,false,true,
                    function SVGViewElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGUseElement",true,false,true,
                    function SVGUseElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGUnitTypes",true,false,true,
                    function SVGUnitTypes(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTransformList",true,false,true,
                    function SVGTransformList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTransform",true,false,true,
                    function SVGTransform(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTitleElement",true,false,true,
                    function SVGTitleElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTextPositioningElement",true,false,true,
                    function SVGTextPositioningElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTextPathElement",true,false,true,
                    function SVGTextPathElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTextElement",true,false,true,
                    function SVGTextElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTextContentElement",true,false,true,
                    function SVGTextContentElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGTSpanElement",true,false,true,
                    function SVGTSpanElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGSymbolElement",true,false,true,
                    function SVGSymbolElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGSwitchElement",true,false,true,
                    function SVGSwitchElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGStyleElement",true,false,true,
                    function SVGStyleElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGStringList",true,false,true,
                    function SVGStringList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGStopElement",true,false,true,
                    function SVGStopElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGSetElement",true,false,true,
                    function SVGSetElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGScriptElement",true,false,true,
                    function SVGScriptElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGSVGElement",true,false,true,
                    function SVGSVGElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGRectElement",true,false,true,
                    function SVGRectElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGRect",true,false,true,
                    function SVGRect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGRadialGradientElement",true,false,true,
                    function SVGRadialGradientElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPreserveAspectRatio",true,false,true,
                    function SVGPreserveAspectRatio(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPolylineElement",true,false,true,
                    function SVGPolylineElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPolygonElement",true,false,true,
                    function SVGPolygonElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPointList",true,false,true,
                    function SVGPointList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPoint",true,false,true,
                    function SVGPoint(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPatternElement",true,false,true,
                    function SVGPatternElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGPathElement",true,false,true,
                    function SVGPathElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGNumberList",true,false,true,
                    function SVGNumberList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGNumber",true,false,true,
                    function SVGNumber(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGMetadataElement",true,false,true,
                    function SVGMetadataElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGMatrix",true,false,true,
                    function SVGMatrix(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGMaskElement",true,false,true,
                    function SVGMaskElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGMarkerElement",true,false,true,
                    function SVGMarkerElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGMPathElement",true,false,true,
                    function SVGMPathElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGLinearGradientElement",true,false,true,
                    function SVGLinearGradientElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGLineElement",true,false,true,
                    function SVGLineElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGLengthList",true,false,true,
                    function SVGLengthList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGLength",true,false,true,
                    function SVGLength(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGImageElement",true,false,true,
                    function SVGImageElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGGraphicsElement",true,false,true,
                    function SVGGraphicsElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGGradientElement",true,false,true,
                    function SVGGradientElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGGeometryElement",true,false,true,
                    function SVGGeometryElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGGElement",true,false,true,
                    function SVGGElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGForeignObjectElement",true,false,true,
                    function SVGForeignObjectElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFilterElement",true,false,true,
                    function SVGFilterElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFETurbulenceElement",true,false,true,
                    function SVGFETurbulenceElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFETileElement",true,false,true,
                    function SVGFETileElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFESpotLightElement",true,false,true,
                    function SVGFESpotLightElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFESpecularLightingElement",true,false,true,
                    function SVGFESpecularLightingElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEPointLightElement",true,false,true,
                    function SVGFEPointLightElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEOffsetElement",true,false,true,
                    function SVGFEOffsetElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEMorphologyElement",true,false,true,
                    function SVGFEMorphologyElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEMergeNodeElement",true,false,true,
                    function SVGFEMergeNodeElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEMergeElement",true,false,true,
                    function SVGFEMergeElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEImageElement",true,false,true,
                    function SVGFEImageElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEGaussianBlurElement",true,false,true,
                    function SVGFEGaussianBlurElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEFuncRElement",true,false,true,
                    function SVGFEFuncRElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEFuncGElement",true,false,true,
                    function SVGFEFuncGElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEFuncBElement",true,false,true,
                    function SVGFEFuncBElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEFuncAElement",true,false,true,
                    function SVGFEFuncAElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEFloodElement",true,false,true,
                    function SVGFEFloodElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEDropShadowElement",true,false,true,
                    function SVGFEDropShadowElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEDistantLightElement",true,false,true,
                    function SVGFEDistantLightElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEDisplacementMapElement",true,false,true,
                    function SVGFEDisplacementMapElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEDiffuseLightingElement",true,false,true,
                    function SVGFEDiffuseLightingElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEConvolveMatrixElement",true,false,true,
                    function SVGFEConvolveMatrixElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFECompositeElement",true,false,true,
                    function SVGFECompositeElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEComponentTransferElement",true,false,true,
                    function SVGFEComponentTransferElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEColorMatrixElement",true,false,true,
                    function SVGFEColorMatrixElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGFEBlendElement",true,false,true,
                    function SVGFEBlendElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGEllipseElement",true,false,true,
                    function SVGEllipseElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGElement",true,false,true,
                    function SVGElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGDescElement",true,false,true,
                    function SVGDescElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGDefsElement",true,false,true,
                    function SVGDefsElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGComponentTransferFunctionElement",true,false,true,
                    function SVGComponentTransferFunctionElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGClipPathElement",true,false,true,
                    function SVGClipPathElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGCircleElement",true,false,true,
                    function SVGCircleElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimationElement",true,false,true,
                    function SVGAnimationElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedTransformList",true,false,true,
                    function SVGAnimatedTransformList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedString",true,false,true,
                    function SVGAnimatedString(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedRect",true,false,true,
                    function SVGAnimatedRect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedPreserveAspectRatio",true,false,true,
                    function SVGAnimatedPreserveAspectRatio(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedNumberList",true,false,true,
                    function SVGAnimatedNumberList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedNumber",true,false,true,
                    function SVGAnimatedNumber(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedLengthList",true,false,true,
                    function SVGAnimatedLengthList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedLength",true,false,true,
                    function SVGAnimatedLength(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedInteger",true,false,true,
                    function SVGAnimatedInteger(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedEnumeration",true,false,true,
                    function SVGAnimatedEnumeration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedBoolean",true,false,true,
                    function SVGAnimatedBoolean(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimatedAngle",true,false,true,
                    function SVGAnimatedAngle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimateTransformElement",true,false,true,
                    function SVGAnimateTransformElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimateMotionElement",true,false,true,
                    function SVGAnimateMotionElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAnimateElement",true,false,true,
                    function SVGAnimateElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAngle",true,false,true,
                    function SVGAngle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SVGAElement",true,false,true,
                    function SVGAElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Response",true,false,true,
                    function Response(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ResizeObserverSize",true,false,true,
                    function ResizeObserverSize(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ResizeObserverEntry",true,false,true,
                    function ResizeObserverEntry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ResizeObserver",true,false,true,
                    function ResizeObserver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Request",true,false,true,
                    function Request(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReportingObserver",true,false,true,
                    function ReportingObserver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReadableStreamDefaultReader",true,false,true,
                    function ReadableStreamDefaultReader(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReadableStreamDefaultController",true,false,true,
                    function ReadableStreamDefaultController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReadableStreamBYOBRequest",true,false,true,
                    function ReadableStreamBYOBRequest(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReadableStreamBYOBReader",true,false,true,
                    function ReadableStreamBYOBReader(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReadableStream",true,false,true,
                    function ReadableStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ReadableByteStreamController",true,false,true,
                    function ReadableByteStreamController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Range",true,false,true,
                    function Range(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RadioNodeList",true,false,true,
                    function RadioNodeList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCTrackEvent",true,false,true,
                    function RTCTrackEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCStatsReport",true,false,true,
                    function RTCStatsReport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCSessionDescription",true,false,true,
                    function RTCSessionDescription(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCSctpTransport",true,false,true,
                    function RTCSctpTransport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCRtpTransceiver",true,false,true,
                    function RTCRtpTransceiver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCRtpSender",true,false,true,
                    function RTCRtpSender(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCRtpReceiver",true,false,true,
                    function RTCRtpReceiver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCPeerConnectionIceEvent",true,false,true,
                    function RTCPeerConnectionIceEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCPeerConnectionIceErrorEvent",true,false,true,
                    function RTCPeerConnectionIceErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCPeerConnection",true,false,true,
                    function RTCPeerConnection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCIceTransport",true,false,true,
                    function RTCIceTransport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCIceCandidate",true,false,true,
                    function RTCIceCandidate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCErrorEvent",true,false,true,
                    function RTCErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCError",true,false,true,
                    function RTCError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCEncodedVideoFrame",true,false,true,
                    function RTCEncodedVideoFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCEncodedAudioFrame",true,false,true,
                    function RTCEncodedAudioFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCDtlsTransport",true,false,true,
                    function RTCDtlsTransport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCDataChannelEvent",true,false,true,
                    function RTCDataChannelEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCDataChannel",true,false,true,
                    function RTCDataChannel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCDTMFToneChangeEvent",true,false,true,
                    function RTCDTMFToneChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCDTMFSender",true,false,true,
                    function RTCDTMFSender(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RTCCertificate",true,false,true,
                    function RTCCertificate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PromiseRejectionEvent",true,false,true,
                    function PromiseRejectionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ProgressEvent",true,false,true,
                    function ProgressEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Profiler",true,false,true,
                    function Profiler(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ProcessingInstruction",true,false,true,
                    function ProcessingInstruction(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PopStateEvent",true,false,true,
                    function PopStateEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PointerEvent",true,false,true,
                    function PointerEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PluginArray",true,false,true,
                    function PluginArray(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Plugin",true,false,true,
                    function Plugin(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PictureInPictureWindow",true,false,true,
                    function PictureInPictureWindow(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PictureInPictureEvent",true,false,true,
                    function PictureInPictureEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PeriodicWave",true,false,true,
                    function PeriodicWave(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceTiming",true,false,true,
                    function PerformanceTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceServerTiming",true,false,true,
                    function PerformanceServerTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceResourceTiming",true,false,true,
                    function PerformanceResourceTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformancePaintTiming",true,false,true,
                    function PerformancePaintTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceObserverEntryList",true,false,true,
                    function PerformanceObserverEntryList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceObserver",true,false,true,
                    function PerformanceObserver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceNavigationTiming",true,false,true,
                    function PerformanceNavigationTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceNavigation",true,false,true,
                    function PerformanceNavigation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceMeasure",true,false,true,
                    function PerformanceMeasure(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceMark",true,false,true,
                    function PerformanceMark(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceLongTaskTiming",true,false,true,
                    function PerformanceLongTaskTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceEventTiming",true,false,true,
                    function PerformanceEventTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceEntry",true,false,true,
                    function PerformanceEntry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PerformanceElementTiming",true,false,true,
                    function PerformanceElementTiming(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Performance",true,false,true,
                    function Performance(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Path2D",true,false,true,
                    function Path2D(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PannerNode",true,false,true,
                    function PannerNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PageTransitionEvent",true,false,true,
                    function PageTransitionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OverconstrainedError",true,false,true,
                    function OverconstrainedError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OscillatorNode",true,false,true,
                    function OscillatorNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OffscreenCanvasRenderingContext2D",true,false,true,
                    function OffscreenCanvasRenderingContext2D(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OffscreenCanvas",true,false,true,
                    function OffscreenCanvas(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OfflineAudioContext",true,false,true,
                    function OfflineAudioContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OfflineAudioCompletionEvent",true,false,true,
                    function OfflineAudioCompletionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NodeList",true,false,true,
                    function NodeList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NodeIterator",true,false,true,
                    function NodeIterator(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NodeFilter",true,false,true,
                    function NodeFilter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Node",true,false,true,
                    function Node(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NetworkInformation",true,false,true,
                    function NetworkInformation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Navigator",true,false,true,
                    function Navigator(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigationTransition",true,false,true,
                    function NavigationTransition(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigationHistoryEntry",true,false,true,
                    function NavigationHistoryEntry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigationDestination",true,false,true,
                    function NavigationDestination(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigationCurrentEntryChangeEvent",true,false,true,
                    function NavigationCurrentEntryChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Navigation",true,false,true,
                    function Navigation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigateEvent",true,false,true,
                    function NavigateEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NamedNodeMap",true,false,true,
                    function NamedNodeMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MutationRecord",true,false,true,
                    function MutationRecord(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MutationObserver",true,false,true,
                    function MutationObserver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MutationEvent",true,false,true,
                    function MutationEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MouseEvent",true,false,true,
                    function MouseEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MimeTypeArray",true,false,true,
                    function MimeTypeArray(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MimeType",true,false,true,
                    function MimeType(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MessagePort",true,false,true,
                    function MessagePort(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MessageEvent",true,false,true,
                    function MessageEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MessageChannel",true,false,true,
                    function MessageChannel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamTrackProcessor",true,false,true,
                    function MediaStreamTrackProcessor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamTrackGenerator",true,false,true,
                    function MediaStreamTrackGenerator(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamTrackEvent",true,false,true,
                    function MediaStreamTrackEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamTrack",true,false,true,
                    function MediaStreamTrack(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamEvent",true,false,true,
                    function MediaStreamEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamAudioSourceNode",true,false,true,
                    function MediaStreamAudioSourceNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStreamAudioDestinationNode",true,false,true,
                    function MediaStreamAudioDestinationNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaStream",true,false,true,
                    function MediaStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaSourceHandle",true,false,true,
                    function MediaSourceHandle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaSource",true,false,true,
                    function MediaSource(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaRecorder",true,false,true,
                    function MediaRecorder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaQueryListEvent",true,false,true,
                    function MediaQueryListEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaQueryList",true,false,true,
                    function MediaQueryList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaList",true,false,true,
                    function MediaList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaError",true,false,true,
                    function MediaError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaEncryptedEvent",true,false,true,
                    function MediaEncryptedEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaElementAudioSourceNode",true,false,true,
                    function MediaElementAudioSourceNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaCapabilities",true,false,true,
                    function MediaCapabilities(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Location",true,false,true,
                    function Location(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LayoutShiftAttribution",true,false,true,
                    function LayoutShiftAttribution(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LayoutShift",true,false,true,
                    function LayoutShift(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LargestContentfulPaint",true,false,true,
                    function LargestContentfulPaint(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "KeyframeEffect",true,false,true,
                    function KeyframeEffect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "KeyboardEvent",true,false,true,
                    function KeyboardEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IntersectionObserverEntry",true,false,true,
                    function IntersectionObserverEntry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IntersectionObserver",true,false,true,
                    function IntersectionObserver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "InputEvent",true,false,true,
                    function InputEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "InputDeviceInfo",true,false,true,
                    function InputDeviceInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "InputDeviceCapabilities",true,false,true,
                    function InputDeviceCapabilities(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageData",true,false,true,
                    function ImageData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageCapture",true,false,true,
                    function ImageCapture(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageBitmapRenderingContext",true,false,true,
                    function ImageBitmapRenderingContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageBitmap",true,false,true,
                    function ImageBitmap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IdleDeadline",true,false,true,
                    function IdleDeadline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IIRFilterNode",true,false,true,
                    function IIRFilterNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBVersionChangeEvent",true,false,true,
                    function IDBVersionChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBTransaction",true,false,true,
                    function IDBTransaction(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBRequest",true,false,true,
                    function IDBRequest(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBOpenDBRequest",true,false,true,
                    function IDBOpenDBRequest(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBObjectStore",true,false,true,
                    function IDBObjectStore(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBKeyRange",true,false,true,
                    function IDBKeyRange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBIndex",true,false,true,
                    function IDBIndex(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBFactory",true,false,true,
                    function IDBFactory(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBDatabase",true,false,true,
                    function IDBDatabase(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBCursorWithValue",true,false,true,
                    function IDBCursorWithValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IDBCursor",true,false,true,
                    function IDBCursor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "History",true,false,true,
                    function History(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Headers",true,false,true,
                    function Headers(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HashChangeEvent",true,false,true,
                    function HashChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLVideoElement",true,false,true,
                    function HTMLVideoElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLUnknownElement",true,false,true,
                    function HTMLUnknownElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLUListElement",true,false,true,
                    function HTMLUListElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTrackElement",true,false,true,
                    function HTMLTrackElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTitleElement",true,false,true,
                    function HTMLTitleElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTimeElement",true,false,true,
                    function HTMLTimeElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTextAreaElement",true,false,true,
                    function HTMLTextAreaElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTemplateElement",true,false,true,
                    function HTMLTemplateElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTableSectionElement",true,false,true,
                    function HTMLTableSectionElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTableRowElement",true,false,true,
                    function HTMLTableRowElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTableElement",true,false,true,
                    function HTMLTableElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTableColElement",true,false,true,
                    function HTMLTableColElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTableCellElement",true,false,true,
                    function HTMLTableCellElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLTableCaptionElement",true,false,true,
                    function HTMLTableCaptionElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLStyleElement",true,false,true,
                    function HTMLStyleElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLSpanElement",true,false,true,
                    function HTMLSpanElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLSourceElement",true,false,true,
                    function HTMLSourceElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLSlotElement",true,false,true,
                    function HTMLSlotElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLSelectElement",true,false,true,
                    function HTMLSelectElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLScriptElement",true,false,true,
                    function HTMLScriptElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLQuoteElement",true,false,true,
                    function HTMLQuoteElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLProgressElement",true,false,true,
                    function HTMLProgressElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLPreElement",true,false,true,
                    function HTMLPreElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLPictureElement",true,false,true,
                    function HTMLPictureElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLParamElement",true,false,true,
                    function HTMLParamElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLParagraphElement",true,false,true,
                    function HTMLParagraphElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLOutputElement",true,false,true,
                    function HTMLOutputElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLOptionsCollection",true,false,true,
                    function HTMLOptionsCollection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLOptionElement",true,false,true,
                    function HTMLOptionElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLOptGroupElement",true,false,true,
                    function HTMLOptGroupElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLObjectElement",true,false,true,
                    function HTMLObjectElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLOListElement",true,false,true,
                    function HTMLOListElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLModElement",true,false,true,
                    function HTMLModElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLMeterElement",true,false,true,
                    function HTMLMeterElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLMetaElement",true,false,true,
                    function HTMLMetaElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLMenuElement",true,false,true,
                    function HTMLMenuElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLMediaElement",true,false,true,
                    function HTMLMediaElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLMarqueeElement",true,false,true,
                    function HTMLMarqueeElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLMapElement",true,false,true,
                    function HTMLMapElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLLinkElement",true,false,true,
                    function HTMLLinkElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLLegendElement",true,false,true,
                    function HTMLLegendElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLLabelElement",true,false,true,
                    function HTMLLabelElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLLIElement",true,false,true,
                    function HTMLLIElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLInputElement",true,false,true,
                    function HTMLInputElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLImageElement",true,false,true,
                    function HTMLImageElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLIFrameElement",true,false,true,
                    function HTMLIFrameElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLHtmlElement",true,false,true,
                    function HTMLHtmlElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLHeadingElement",true,false,true,
                    function HTMLHeadingElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLHeadElement",true,false,true,
                    function HTMLHeadElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLHRElement",true,false,true,
                    function HTMLHRElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLFrameSetElement",true,false,true,
                    function HTMLFrameSetElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLFrameElement",true,false,true,
                    function HTMLFrameElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLFormElement",true,false,true,
                    function HTMLFormElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLFormControlsCollection",true,false,true,
                    function HTMLFormControlsCollection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLFontElement",true,false,true,
                    function HTMLFontElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLFieldSetElement",true,false,true,
                    function HTMLFieldSetElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLEmbedElement",true,false,true,
                    function HTMLEmbedElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLElement",true,false,true,
                    function HTMLElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDocument",true,false,true,
                    function HTMLDocument(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDivElement",true,false,true,
                    function HTMLDivElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDirectoryElement",true,false,true,
                    function HTMLDirectoryElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDialogElement",true,false,true,
                    function HTMLDialogElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDetailsElement",true,false,true,
                    function HTMLDetailsElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDataListElement",true,false,true,
                    function HTMLDataListElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDataElement",true,false,true,
                    function HTMLDataElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLDListElement",true,false,true,
                    function HTMLDListElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLCollection",true,false,true,
                    function HTMLCollection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLCanvasElement",true,false,true,
                    function HTMLCanvasElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLButtonElement",true,false,true,
                    function HTMLButtonElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLBodyElement",true,false,true,
                    function HTMLBodyElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLBaseElement",true,false,true,
                    function HTMLBaseElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLBRElement",true,false,true,
                    function HTMLBRElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLAudioElement",true,false,true,
                    function HTMLAudioElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLAreaElement",true,false,true,
                    function HTMLAreaElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLAnchorElement",true,false,true,
                    function HTMLAnchorElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HTMLAllCollection",true,false,true,
                    function HTMLAllCollection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GeolocationPositionError",true,false,true,
                    function GeolocationPositionError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GeolocationPosition",true,false,true,
                    function GeolocationPosition(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GeolocationCoordinates",true,false,true,
                    function GeolocationCoordinates(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Geolocation",true,false,true,
                    function Geolocation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GamepadHapticActuator",true,false,true,
                    function GamepadHapticActuator(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GamepadEvent",true,false,true,
                    function GamepadEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GamepadButton",true,false,true,
                    function GamepadButton(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Gamepad",true,false,true,
                    function Gamepad(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GainNode",true,false,true,
                    function GainNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FormDataEvent",true,false,true,
                    function FormDataEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FormData",true,false,true,
                    function FormData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FontFaceSetLoadEvent",true,false,true,
                    function FontFaceSetLoadEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FontFace",true,false,true,
                    function FontFace(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FocusEvent",true,false,true,
                    function FocusEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FileReader",true,false,true,
                    function FileReader(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FileList",true,false,true,
                    function FileList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "File",true,false,true,
                    function File(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FeaturePolicy",true,false,true,
                    function FeaturePolicy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "External",true,false,true,
                    function External(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EventTarget",true,false,true,
                    function EventTarget(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EventSource",true,false,true,
                    function EventSource(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EventCounts",true,false,true,
                    function EventCounts(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Event",true,false,true,
                    function Event(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ErrorEvent",true,false,true,
                    function ErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ElementInternals",true,false,true,
                    function ElementInternals(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Element",true,false,true,
                    function Element(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DynamicsCompressorNode",true,false,true,
                    function DynamicsCompressorNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DragEvent",true,false,true,
                    function DragEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DocumentType",true,false,true,
                    function DocumentType(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DocumentFragment",true,false,true,
                    function DocumentFragment(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Document",true,false,true,
                    function Document(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DelayNode",true,false,true,
                    function DelayNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DecompressionStream",true,false,true,
                    function DecompressionStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DataTransferItemList",true,false,true,
                    function DataTransferItemList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DataTransferItem",true,false,true,
                    function DataTransferItem(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DataTransfer",true,false,true,
                    function DataTransfer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMTokenList",true,false,true,
                    function DOMTokenList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMStringMap",true,false,true,
                    function DOMStringMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMStringList",true,false,true,
                    function DOMStringList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMRectReadOnly",true,false,true,
                    function DOMRectReadOnly(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMRectList",true,false,true,
                    function DOMRectList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMRect",true,false,true,
                    function DOMRect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMQuad",true,false,true,
                    function DOMQuad(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMPointReadOnly",true,false,true,
                    function DOMPointReadOnly(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMPoint",true,false,true,
                    function DOMPoint(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMParser",true,false,true,
                    function DOMParser(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMMatrixReadOnly",true,false,true,
                    function DOMMatrixReadOnly(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMMatrix",true,false,true,
                    function DOMMatrix(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMImplementation",true,false,true,
                    function DOMImplementation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMException",true,false,true,
                    function DOMException(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DOMError",true,false,true,
                    function DOMError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CustomStateSet",true,false,true,
                    function CustomStateSet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CustomEvent",true,false,true,
                    function CustomEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CustomElementRegistry",true,false,true,
                    function CustomElementRegistry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Crypto",true,false,true,
                    function Crypto(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CountQueuingStrategy",true,false,true,
                    function CountQueuingStrategy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ConvolverNode",true,false,true,
                    function ConvolverNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ConstantSourceNode",true,false,true,
                    function ConstantSourceNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CompressionStream",true,false,true,
                    function CompressionStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CompositionEvent",true,false,true,
                    function CompositionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Comment",true,false,true,
                    function Comment(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CloseEvent",true,false,true,
                    function CloseEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ClipboardEvent",true,false,true,
                    function ClipboardEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CharacterData",true,false,true,
                    function CharacterData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ChannelSplitterNode",true,false,true,
                    function ChannelSplitterNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ChannelMergerNode",true,false,true,
                    function ChannelMergerNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CanvasRenderingContext2D",true,false,true,
                    function CanvasRenderingContext2D(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CanvasPattern",true,false,true,
                    function CanvasPattern(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CanvasGradient",true,false,true,
                    function CanvasGradient(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CanvasCaptureMediaStreamTrack",true,false,true,
                    function CanvasCaptureMediaStreamTrack(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSVariableReferenceValue",true,false,true,
                    function CSSVariableReferenceValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSUnparsedValue",true,false,true,
                    function CSSUnparsedValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSUnitValue",true,false,true,
                    function CSSUnitValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSTranslate",true,false,true,
                    function CSSTranslate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSTransformValue",true,false,true,
                    function CSSTransformValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSTransformComponent",true,false,true,
                    function CSSTransformComponent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSSupportsRule",true,false,true,
                    function CSSSupportsRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSStyleValue",true,false,true,
                    function CSSStyleValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSStyleSheet",true,false,true,
                    function CSSStyleSheet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSStyleRule",true,false,true,
                    function CSSStyleRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSStyleDeclaration",true,false,true,
                    function CSSStyleDeclaration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSSkewY",true,false,true,
                    function CSSSkewY(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSSkewX",true,false,true,
                    function CSSSkewX(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSSkew",true,false,true,
                    function CSSSkew(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSScale",true,false,true,
                    function CSSScale(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSRuleList",true,false,true,
                    function CSSRuleList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSRule",true,false,true,
                    function CSSRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSRotate",true,false,true,
                    function CSSRotate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSPropertyRule",true,false,true,
                    function CSSPropertyRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSPositionValue",true,false,true,
                    function CSSPositionValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSPerspective",true,false,true,
                    function CSSPerspective(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSPageRule",true,false,true,
                    function CSSPageRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSNumericValue",true,false,true,
                    function CSSNumericValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSNumericArray",true,false,true,
                    function CSSNumericArray(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSNamespaceRule",true,false,true,
                    function CSSNamespaceRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMediaRule",true,false,true,
                    function CSSMediaRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMatrixComponent",true,false,true,
                    function CSSMatrixComponent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathValue",true,false,true,
                    function CSSMathValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathSum",true,false,true,
                    function CSSMathSum(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathProduct",true,false,true,
                    function CSSMathProduct(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathNegate",true,false,true,
                    function CSSMathNegate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathMin",true,false,true,
                    function CSSMathMin(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathMax",true,false,true,
                    function CSSMathMax(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathInvert",true,false,true,
                    function CSSMathInvert(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSMathClamp",true,false,true,
                    function CSSMathClamp(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSLayerStatementRule",true,false,true,
                    function CSSLayerStatementRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSLayerBlockRule",true,false,true,
                    function CSSLayerBlockRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSKeywordValue",true,false,true,
                    function CSSKeywordValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSKeyframesRule",true,false,true,
                    function CSSKeyframesRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSKeyframeRule",true,false,true,
                    function CSSKeyframeRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSImportRule",true,false,true,
                    function CSSImportRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSImageValue",true,false,true,
                    function CSSImageValue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSGroupingRule",true,false,true,
                    function CSSGroupingRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSFontPaletteValuesRule",true,false,true,
                    function CSSFontPaletteValuesRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSFontFaceRule",true,false,true,
                    function CSSFontFaceRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSCounterStyleRule",true,false,true,
                    function CSSCounterStyleRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSContainerRule",true,false,true,
                    function CSSContainerRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSConditionRule",true,false,true,
                    function CSSConditionRule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSS",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "CDATASection",true,false,true,
                    function CDATASection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ByteLengthQueuingStrategy",true,false,true,
                    function ByteLengthQueuingStrategy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BroadcastChannel",true,false,true,
                    function BroadcastChannel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BlobEvent",true,false,true,
                    function BlobEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Blob",true,false,true,
                    function Blob(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BiquadFilterNode",true,false,true,
                    function BiquadFilterNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BeforeUnloadEvent",true,false,true,
                    function BeforeUnloadEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BeforeInstallPromptEvent",true,false,true,
                    function BeforeInstallPromptEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BaseAudioContext",true,false,true,
                    function BaseAudioContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BarProp",true,false,true,
                    function BarProp(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioWorkletNode",true,false,true,
                    function AudioWorkletNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioSinkInfo",true,false,true,
                    function AudioSinkInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioScheduledSourceNode",true,false,true,
                    function AudioScheduledSourceNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioProcessingEvent",true,false,true,
                    function AudioProcessingEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioParamMap",true,false,true,
                    function AudioParamMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioParam",true,false,true,
                    function AudioParam(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioNode",true,false,true,
                    function AudioNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioListener",true,false,true,
                    function AudioListener(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioDestinationNode",true,false,true,
                    function AudioDestinationNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioContext",true,false,true,
                    function AudioContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioBufferSourceNode",true,false,true,
                    function AudioBufferSourceNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioBuffer",true,false,true,
                    function AudioBuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Attr",true,false,true,
                    function Attr(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AnimationEvent",true,false,true,
                    function AnimationEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AnimationEffect",true,false,true,
                    function AnimationEffect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Animation",true,false,true,
                    function Animation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AnalyserNode",true,false,true,
                    function AnalyserNode(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AbstractRange",true,false,true,
                    function AbstractRange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AbortSignal",true,false,true,
                    function AbortSignal(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AbortController",true,false,true,
                    function AbortController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "window",false,true,undefined,undefined,
                    function window(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "self",true,true,undefined,undefined,
                    function self(){debugger; return {}},
                    function self(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "document",false,true,undefined,undefined,
                    function document(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "name",true,true,undefined,undefined,
                    function name(){debugger; return ''},
                    function name(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "location",false,true,undefined,undefined,
                    function location(){debugger; return {}},
                    function location(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "customElements",true,true,undefined,undefined,
                    function customElements(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "history",true,true,undefined,undefined,
                    function history(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "navigation",true,true,undefined,undefined,
                    function navigation(){debugger; return {}},
                    function navigation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "locationbar",true,true,undefined,undefined,
                    function locationbar(){debugger; return {}},
                    function locationbar(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "menubar",true,true,undefined,undefined,
                    function menubar(){debugger; return {}},
                    function menubar(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "personalbar",true,true,undefined,undefined,
                    function personalbar(){debugger; return {}},
                    function personalbar(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "scrollbars",true,true,undefined,undefined,
                    function scrollbars(){debugger; return {}},
                    function scrollbars(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "statusbar",true,true,undefined,undefined,
                    function statusbar(){debugger; return {}},
                    function statusbar(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "toolbar",true,true,undefined,undefined,
                    function toolbar(){debugger; return {}},
                    function toolbar(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "status",true,true,undefined,undefined,
                    function status(){debugger; return ''},
                    function status(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "closed",true,true,undefined,undefined,
                    function closed(){debugger; return false},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "frames",true,true,undefined,undefined,
                    function frames(){debugger; return {}},
                    function frames(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "length",true,true,undefined,undefined,
                    function length(){debugger; return 1},
                    function length(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "top",false,true,undefined,undefined,
                    function top(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "opener",true,true,undefined,undefined,
                    function opener(){debugger; return {}},
                    function opener(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "parent",true,true,undefined,undefined,
                    function parent(){debugger; return {}},
                    function parent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "frameElement",true,true,undefined,undefined,
                    function frameElement(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "navigator",true,true,undefined,undefined,
                    function navigator(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "origin",true,true,undefined,undefined,
                    function origin(){debugger; return 'chrome://new-tab-page'},
                    function origin(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "external",true,true,undefined,undefined,
                    function external(){debugger; return {}},
                    function external(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "screen",true,true,undefined,undefined,
                    function screen(){debugger; return {}},
                    function screen(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "innerWidth",true,true,undefined,undefined,
                    function innerWidth(){debugger; return 1672},
                    function innerWidth(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "innerHeight",true,true,undefined,undefined,
                    function innerHeight(){debugger; return 758},
                    function innerHeight(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "scrollX",true,true,undefined,undefined,
                    function scrollX(){debugger; return 0},
                    function scrollX(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "pageXOffset",true,true,undefined,undefined,
                    function pageXOffset(){debugger; return 0},
                    function pageXOffset(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "scrollY",true,true,undefined,undefined,
                    function scrollY(){debugger; return 0},
                    function scrollY(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "pageYOffset",true,true,undefined,undefined,
                    function pageYOffset(){debugger; return 0},
                    function pageYOffset(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "visualViewport",true,true,undefined,undefined,
                    function visualViewport(){debugger; return {}},
                    function visualViewport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "screenX",true,true,undefined,undefined,
                    function screenX(){debugger; return -416},
                    function screenX(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "screenY",true,true,undefined,undefined,
                    function screenY(){debugger; return 24},
                    function screenY(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "outerWidth",true,true,undefined,undefined,
                    function outerWidth(){debugger; return 1684},
                    function outerWidth(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "outerHeight",true,true,undefined,undefined,
                    function outerHeight(){debugger; return 876},
                    function outerHeight(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "devicePixelRatio",true,true,undefined,undefined,
                    function devicePixelRatio(){debugger; return 2.25},
                    function devicePixelRatio(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "event",true,false,undefined,undefined,
                    function event(){debugger; return undefined},
                    function event(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "clientInformation",true,true,undefined,undefined,
                    function clientInformation(){debugger; return {}},
                    function clientInformation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "offscreenBuffering",true,false,undefined,undefined,
                    function offscreenBuffering(){debugger; return true},
                    function offscreenBuffering(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "screenLeft",true,true,undefined,undefined,
                    function screenLeft(){debugger; return -416},
                    function screenLeft(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "screenTop",true,true,undefined,undefined,
                    function screenTop(){debugger; return 24},
                    function screenTop(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "styleMedia",true,true,undefined,undefined,
                    function styleMedia(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "onsearch",true,true,undefined,undefined,
                    function onsearch(){debugger; return {}},
                    function onsearch(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "isSecureContext",true,true,undefined,undefined,
                    function isSecureContext(){debugger; return true},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "trustedTypes",true,true,undefined,undefined,
                    function trustedTypes(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "performance",true,true,undefined,undefined,
                    function performance(){debugger; return {}},
                    function performance(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onappinstalled",true,true,undefined,undefined,
                    function onappinstalled(){debugger; return {}},
                    function onappinstalled(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onbeforeinstallprompt",true,true,undefined,undefined,
                    function onbeforeinstallprompt(){debugger; return {}},
                    function onbeforeinstallprompt(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "crypto",true,true,undefined,undefined,
                    function crypto(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "indexedDB",true,true,undefined,undefined,
                    function indexedDB(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "sessionStorage",true,true,undefined,undefined,
                    function sessionStorage(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "localStorage",true,true,undefined,undefined,
                    function localStorage(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "onbeforexrselect",true,true,undefined,undefined,
                    function onbeforexrselect(){debugger; return {}},
                    function onbeforexrselect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onabort",true,true,undefined,undefined,
                    function onabort(){debugger; return {}},
                    function onabort(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onbeforeinput",true,true,undefined,undefined,
                    function onbeforeinput(){debugger; return {}},
                    function onbeforeinput(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onblur",true,true,undefined,undefined,
                    function onblur(){debugger; return {}},
                    function onblur(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncancel",true,true,undefined,undefined,
                    function oncancel(){debugger; return {}},
                    function oncancel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncanplay",true,true,undefined,undefined,
                    function oncanplay(){debugger; return {}},
                    function oncanplay(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncanplaythrough",true,true,undefined,undefined,
                    function oncanplaythrough(){debugger; return {}},
                    function oncanplaythrough(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onchange",true,true,undefined,undefined,
                    function onchange(){debugger; return {}},
                    function onchange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onclick",true,true,undefined,undefined,
                    function onclick(){debugger; return {}},
                    function onclick(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onclose",true,true,undefined,undefined,
                    function onclose(){debugger; return {}},
                    function onclose(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncontextlost",true,true,undefined,undefined,
                    function oncontextlost(){debugger; return {}},
                    function oncontextlost(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncontextmenu",true,true,undefined,undefined,
                    function oncontextmenu(){debugger; return {}},
                    function oncontextmenu(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncontextrestored",true,true,undefined,undefined,
                    function oncontextrestored(){debugger; return {}},
                    function oncontextrestored(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oncuechange",true,true,undefined,undefined,
                    function oncuechange(){debugger; return {}},
                    function oncuechange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondblclick",true,true,undefined,undefined,
                    function ondblclick(){debugger; return {}},
                    function ondblclick(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondrag",true,true,undefined,undefined,
                    function ondrag(){debugger; return {}},
                    function ondrag(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondragend",true,true,undefined,undefined,
                    function ondragend(){debugger; return {}},
                    function ondragend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondragenter",true,true,undefined,undefined,
                    function ondragenter(){debugger; return {}},
                    function ondragenter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondragleave",true,true,undefined,undefined,
                    function ondragleave(){debugger; return {}},
                    function ondragleave(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondragover",true,true,undefined,undefined,
                    function ondragover(){debugger; return {}},
                    function ondragover(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondragstart",true,true,undefined,undefined,
                    function ondragstart(){debugger; return {}},
                    function ondragstart(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondrop",true,true,undefined,undefined,
                    function ondrop(){debugger; return {}},
                    function ondrop(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondurationchange",true,true,undefined,undefined,
                    function ondurationchange(){debugger; return {}},
                    function ondurationchange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onemptied",true,true,undefined,undefined,
                    function onemptied(){debugger; return {}},
                    function onemptied(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onended",true,true,undefined,undefined,
                    function onended(){debugger; return {}},
                    function onended(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onerror",true,true,undefined,undefined,
                    function onerror(){debugger; return {}},
                    function onerror(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onfocus",true,true,undefined,undefined,
                    function onfocus(){debugger; return {}},
                    function onfocus(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onformdata",true,true,undefined,undefined,
                    function onformdata(){debugger; return {}},
                    function onformdata(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oninput",true,true,undefined,undefined,
                    function oninput(){debugger; return {}},
                    function oninput(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "oninvalid",true,true,undefined,undefined,
                    function oninvalid(){debugger; return {}},
                    function oninvalid(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onkeydown",true,true,undefined,undefined,
                    function onkeydown(){debugger; return {}},
                    function onkeydown(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onkeypress",true,true,undefined,undefined,
                    function onkeypress(){debugger; return {}},
                    function onkeypress(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onkeyup",true,true,undefined,undefined,
                    function onkeyup(){debugger; return {}},
                    function onkeyup(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onload",true,true,undefined,undefined,
                    function onload(){debugger; return {}},
                    function onload(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onloadeddata",true,true,undefined,undefined,
                    function onloadeddata(){debugger; return {}},
                    function onloadeddata(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onloadedmetadata",true,true,undefined,undefined,
                    function onloadedmetadata(){debugger; return {}},
                    function onloadedmetadata(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onloadstart",true,true,undefined,undefined,
                    function onloadstart(){debugger; return {}},
                    function onloadstart(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmousedown",true,true,undefined,undefined,
                    function onmousedown(){debugger; return {}},
                    function onmousedown(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmouseenter",true,true,undefined,undefined,
                    function onmouseenter(){debugger; return {}},
                    function onmouseenter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmouseleave",true,true,undefined,undefined,
                    function onmouseleave(){debugger; return {}},
                    function onmouseleave(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmousemove",true,true,undefined,undefined,
                    function onmousemove(){debugger; return {}},
                    function onmousemove(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmouseout",true,true,undefined,undefined,
                    function onmouseout(){debugger; return {}},
                    function onmouseout(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmouseover",true,true,undefined,undefined,
                    function onmouseover(){debugger; return {}},
                    function onmouseover(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmouseup",true,true,undefined,undefined,
                    function onmouseup(){debugger; return {}},
                    function onmouseup(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmousewheel",true,true,undefined,undefined,
                    function onmousewheel(){debugger; return {}},
                    function onmousewheel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpause",true,true,undefined,undefined,
                    function onpause(){debugger; return {}},
                    function onpause(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onplay",true,true,undefined,undefined,
                    function onplay(){debugger; return {}},
                    function onplay(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onplaying",true,true,undefined,undefined,
                    function onplaying(){debugger; return {}},
                    function onplaying(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onprogress",true,true,undefined,undefined,
                    function onprogress(){debugger; return {}},
                    function onprogress(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onratechange",true,true,undefined,undefined,
                    function onratechange(){debugger; return {}},
                    function onratechange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onreset",true,true,undefined,undefined,
                    function onreset(){debugger; return {}},
                    function onreset(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onresize",true,true,undefined,undefined,
                    function onresize(){debugger; return {}},
                    function onresize(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onscroll",true,true,undefined,undefined,
                    function onscroll(){debugger; return {}},
                    function onscroll(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onsecuritypolicyviolation",true,true,undefined,undefined,
                    function onsecuritypolicyviolation(){debugger; return {}},
                    function onsecuritypolicyviolation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onseeked",true,true,undefined,undefined,
                    function onseeked(){debugger; return {}},
                    function onseeked(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onseeking",true,true,undefined,undefined,
                    function onseeking(){debugger; return {}},
                    function onseeking(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onselect",true,true,undefined,undefined,
                    function onselect(){debugger; return {}},
                    function onselect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onslotchange",true,true,undefined,undefined,
                    function onslotchange(){debugger; return {}},
                    function onslotchange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onstalled",true,true,undefined,undefined,
                    function onstalled(){debugger; return {}},
                    function onstalled(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onsubmit",true,true,undefined,undefined,
                    function onsubmit(){debugger; return {}},
                    function onsubmit(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onsuspend",true,true,undefined,undefined,
                    function onsuspend(){debugger; return {}},
                    function onsuspend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ontimeupdate",true,true,undefined,undefined,
                    function ontimeupdate(){debugger; return {}},
                    function ontimeupdate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ontoggle",true,true,undefined,undefined,
                    function ontoggle(){debugger; return {}},
                    function ontoggle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onvolumechange",true,true,undefined,undefined,
                    function onvolumechange(){debugger; return {}},
                    function onvolumechange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onwaiting",true,true,undefined,undefined,
                    function onwaiting(){debugger; return {}},
                    function onwaiting(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onwebkitanimationend",true,true,undefined,undefined,
                    function onwebkitanimationend(){debugger; return {}},
                    function onwebkitanimationend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onwebkitanimationiteration",true,true,undefined,undefined,
                    function onwebkitanimationiteration(){debugger; return {}},
                    function onwebkitanimationiteration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onwebkitanimationstart",true,true,undefined,undefined,
                    function onwebkitanimationstart(){debugger; return {}},
                    function onwebkitanimationstart(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onwebkittransitionend",true,true,undefined,undefined,
                    function onwebkittransitionend(){debugger; return {}},
                    function onwebkittransitionend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onwheel",true,true,undefined,undefined,
                    function onwheel(){debugger; return {}},
                    function onwheel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onauxclick",true,true,undefined,undefined,
                    function onauxclick(){debugger; return {}},
                    function onauxclick(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ongotpointercapture",true,true,undefined,undefined,
                    function ongotpointercapture(){debugger; return {}},
                    function ongotpointercapture(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onlostpointercapture",true,true,undefined,undefined,
                    function onlostpointercapture(){debugger; return {}},
                    function onlostpointercapture(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerdown",true,true,undefined,undefined,
                    function onpointerdown(){debugger; return {}},
                    function onpointerdown(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointermove",true,true,undefined,undefined,
                    function onpointermove(){debugger; return {}},
                    function onpointermove(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerrawupdate",true,true,undefined,undefined,
                    function onpointerrawupdate(){debugger; return {}},
                    function onpointerrawupdate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerup",true,true,undefined,undefined,
                    function onpointerup(){debugger; return {}},
                    function onpointerup(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointercancel",true,true,undefined,undefined,
                    function onpointercancel(){debugger; return {}},
                    function onpointercancel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerover",true,true,undefined,undefined,
                    function onpointerover(){debugger; return {}},
                    function onpointerover(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerout",true,true,undefined,undefined,
                    function onpointerout(){debugger; return {}},
                    function onpointerout(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerenter",true,true,undefined,undefined,
                    function onpointerenter(){debugger; return {}},
                    function onpointerenter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpointerleave",true,true,undefined,undefined,
                    function onpointerleave(){debugger; return {}},
                    function onpointerleave(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onselectstart",true,true,undefined,undefined,
                    function onselectstart(){debugger; return {}},
                    function onselectstart(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onselectionchange",true,true,undefined,undefined,
                    function onselectionchange(){debugger; return {}},
                    function onselectionchange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onanimationend",true,true,undefined,undefined,
                    function onanimationend(){debugger; return {}},
                    function onanimationend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onanimationiteration",true,true,undefined,undefined,
                    function onanimationiteration(){debugger; return {}},
                    function onanimationiteration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onanimationstart",true,true,undefined,undefined,
                    function onanimationstart(){debugger; return {}},
                    function onanimationstart(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ontransitionrun",true,true,undefined,undefined,
                    function ontransitionrun(){debugger; return {}},
                    function ontransitionrun(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ontransitionstart",true,true,undefined,undefined,
                    function ontransitionstart(){debugger; return {}},
                    function ontransitionstart(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ontransitionend",true,true,undefined,undefined,
                    function ontransitionend(){debugger; return {}},
                    function ontransitionend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ontransitioncancel",true,true,undefined,undefined,
                    function ontransitioncancel(){debugger; return {}},
                    function ontransitioncancel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onafterprint",true,true,undefined,undefined,
                    function onafterprint(){debugger; return {}},
                    function onafterprint(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onbeforeprint",true,true,undefined,undefined,
                    function onbeforeprint(){debugger; return {}},
                    function onbeforeprint(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onbeforeunload",true,true,undefined,undefined,
                    function onbeforeunload(){debugger; return {}},
                    function onbeforeunload(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onhashchange",true,true,undefined,undefined,
                    function onhashchange(){debugger; return {}},
                    function onhashchange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onlanguagechange",true,true,undefined,undefined,
                    function onlanguagechange(){debugger; return {}},
                    function onlanguagechange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmessage",true,true,undefined,undefined,
                    function onmessage(){debugger; return {}},
                    function onmessage(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onmessageerror",true,true,undefined,undefined,
                    function onmessageerror(){debugger; return {}},
                    function onmessageerror(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onoffline",true,true,undefined,undefined,
                    function onoffline(){debugger; return {}},
                    function onoffline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ononline",true,true,undefined,undefined,
                    function ononline(){debugger; return {}},
                    function ononline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpagehide",true,true,undefined,undefined,
                    function onpagehide(){debugger; return {}},
                    function onpagehide(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpageshow",true,true,undefined,undefined,
                    function onpageshow(){debugger; return {}},
                    function onpageshow(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onpopstate",true,true,undefined,undefined,
                    function onpopstate(){debugger; return {}},
                    function onpopstate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onrejectionhandled",true,true,undefined,undefined,
                    function onrejectionhandled(){debugger; return {}},
                    function onrejectionhandled(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onstorage",true,true,undefined,undefined,
                    function onstorage(){debugger; return {}},
                    function onstorage(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onunhandledrejection",true,true,undefined,undefined,
                    function onunhandledrejection(){debugger; return {}},
                    function onunhandledrejection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onunload",true,true,undefined,undefined,
                    function onunload(){debugger; return {}},
                    function onunload(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "crossOriginIsolated",true,true,undefined,undefined,
                    function crossOriginIsolated(){debugger; return false},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "scheduler",true,true,undefined,undefined,
                    function scheduler(){debugger; return {}},
                    function scheduler(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "alert",true,true,true,
                    function alert(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "atob",true,true,true,
                    function atob(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "blur",true,true,true,
                    function blur(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "btoa",true,true,true,
                    function btoa(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "cancelAnimationFrame",true,true,true,
                    function cancelAnimationFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "cancelIdleCallback",true,true,true,
                    function cancelIdleCallback(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "captureEvents",true,true,true,
                    function captureEvents(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "clearInterval",true,true,true,
                    function clearInterval(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "clearTimeout",true,true,true,
                    function clearTimeout(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "close",true,true,true,
                    function close(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "confirm",true,true,true,
                    function confirm(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "createImageBitmap",true,true,true,
                    function createImageBitmap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "fetch",true,true,true,
                    function fetch(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "find",true,true,true,
                    function find(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "focus",true,true,true,
                    function focus(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "getComputedStyle",true,true,true,
                    function getComputedStyle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "getSelection",true,true,true,
                    function getSelection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "matchMedia",true,true,true,
                    function matchMedia(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "moveBy",true,true,true,
                    function moveBy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "moveTo",true,true,true,
                    function moveTo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "open",true,true,true,
                    function open(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "postMessage",true,true,true,
                    function postMessage(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "print",true,true,true,
                    function print(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "prompt",true,true,true,
                    function prompt(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "queueMicrotask",true,true,true,
                    function queueMicrotask(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "releaseEvents",true,true,true,
                    function releaseEvents(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "reportError",true,true,true,
                    function reportError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "requestAnimationFrame",true,true,true,
                    function requestAnimationFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "requestIdleCallback",true,true,true,
                    function requestIdleCallback(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "resizeBy",true,true,true,
                    function resizeBy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "resizeTo",true,true,true,
                    function resizeTo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "scroll",true,true,true,
                    function scroll(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "scrollBy",true,true,true,
                    function scrollBy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "scrollTo",true,true,true,
                    function scrollTo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "setInterval",true,true,true,
                    function setInterval(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "setTimeout",true,true,true,
                    function setTimeout(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "stop",true,true,true,
                    function stop(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "structuredClone",true,true,true,
                    function structuredClone(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitCancelAnimationFrame",true,true,true,
                    function webkitCancelAnimationFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitRequestAnimationFrame",true,true,true,
                    function webkitRequestAnimationFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "chrome",false,true,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "WebAssembly",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "credentialless",true,true,undefined,undefined,
                    function credentialless(){debugger; return false},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "caches",true,true,undefined,undefined,
                    function caches(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "cookieStore",true,true,undefined,undefined,
                    function cookieStore(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "ondevicemotion",true,true,undefined,undefined,
                    function ondevicemotion(){debugger; return {}},
                    function ondevicemotion(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondeviceorientation",true,true,undefined,undefined,
                    function ondeviceorientation(){debugger; return {}},
                    function ondeviceorientation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ondeviceorientationabsolute",true,true,undefined,undefined,
                    function ondeviceorientationabsolute(){debugger; return {}},
                    function ondeviceorientationabsolute(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "launchQueue",true,true,undefined,undefined,
                    function launchQueue(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "onbeforematch",true,true,undefined,undefined,
                    function onbeforematch(){debugger; return {}},
                    function onbeforematch(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onbeforetoggle",true,true,undefined,undefined,
                    function onbeforetoggle(){debugger; return {}},
                    function onbeforetoggle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AbsoluteOrientationSensor",true,false,true,
                    function AbsoluteOrientationSensor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Accelerometer",true,false,true,
                    function Accelerometer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioWorklet",true,false,true,
                    function AudioWorklet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BatteryManager",true,false,true,
                    function BatteryManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Cache",true,false,true,
                    function Cache(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CacheStorage",true,false,true,
                    function CacheStorage(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Clipboard",true,false,true,
                    function Clipboard(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ClipboardItem",true,false,true,
                    function ClipboardItem(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CookieChangeEvent",true,false,true,
                    function CookieChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CookieStore",true,false,true,
                    function CookieStore(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CookieStoreManager",true,false,true,
                    function CookieStoreManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Credential",true,false,true,
                    function Credential(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CredentialsContainer",true,false,true,
                    function CredentialsContainer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CryptoKey",true,false,true,
                    function CryptoKey(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DeviceMotionEvent",true,false,true,
                    function DeviceMotionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DeviceMotionEventAcceleration",true,false,true,
                    function DeviceMotionEventAcceleration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DeviceMotionEventRotationRate",true,false,true,
                    function DeviceMotionEventRotationRate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DeviceOrientationEvent",true,false,true,
                    function DeviceOrientationEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FederatedCredential",true,false,true,
                    function FederatedCredential(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GravitySensor",true,false,true,
                    function GravitySensor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Gyroscope",true,false,true,
                    function Gyroscope(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Keyboard",true,false,true,
                    function Keyboard(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "KeyboardLayoutMap",true,false,true,
                    function KeyboardLayoutMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LinearAccelerationSensor",true,false,true,
                    function LinearAccelerationSensor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Lock",true,false,true,
                    function Lock(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LockManager",true,false,true,
                    function LockManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIAccess",true,false,true,
                    function MIDIAccess(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIConnectionEvent",true,false,true,
                    function MIDIConnectionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIInput",true,false,true,
                    function MIDIInput(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIInputMap",true,false,true,
                    function MIDIInputMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIMessageEvent",true,false,true,
                    function MIDIMessageEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIOutput",true,false,true,
                    function MIDIOutput(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIOutputMap",true,false,true,
                    function MIDIOutputMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MIDIPort",true,false,true,
                    function MIDIPort(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaDeviceInfo",true,false,true,
                    function MediaDeviceInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaDevices",true,false,true,
                    function MediaDevices(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaKeyMessageEvent",true,false,true,
                    function MediaKeyMessageEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaKeySession",true,false,true,
                    function MediaKeySession(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaKeyStatusMap",true,false,true,
                    function MediaKeyStatusMap(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaKeySystemAccess",true,false,true,
                    function MediaKeySystemAccess(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaKeys",true,false,true,
                    function MediaKeys(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigationPreloadManager",true,false,true,
                    function NavigationPreloadManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigatorManagedData",true,false,true,
                    function NavigatorManagedData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OrientationSensor",true,false,true,
                    function OrientationSensor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PasswordCredential",true,false,true,
                    function PasswordCredential(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RelativeOrientationSensor",true,false,true,
                    function RelativeOrientationSensor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Sanitizer",true,false,true,
                    function Sanitizer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ScreenDetailed",true,false,true,
                    function ScreenDetailed(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ScreenDetails",true,false,true,
                    function ScreenDetails(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Sensor",true,false,true,
                    function Sensor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SensorErrorEvent",true,false,true,
                    function SensorErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ServiceWorker",true,false,true,
                    function ServiceWorker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ServiceWorkerContainer",true,false,true,
                    function ServiceWorkerContainer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ServiceWorkerRegistration",true,false,true,
                    function ServiceWorkerRegistration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "StorageManager",true,false,true,
                    function StorageManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SubtleCrypto",true,false,true,
                    function SubtleCrypto(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VirtualKeyboard",true,false,true,
                    function VirtualKeyboard(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebTransport",true,false,true,
                    function WebTransport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebTransportBidirectionalStream",true,false,true,
                    function WebTransportBidirectionalStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebTransportDatagramDuplexStream",true,false,true,
                    function WebTransportDatagramDuplexStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WebTransportError",true,false,true,
                    function WebTransportError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Worklet",true,false,true,
                    function Worklet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRDOMOverlayState",true,false,true,
                    function XRDOMOverlayState(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRLayer",true,false,true,
                    function XRLayer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRWebGLBinding",true,false,true,
                    function XRWebGLBinding(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioData",true,false,true,
                    function AudioData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EncodedAudioChunk",true,false,true,
                    function EncodedAudioChunk(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EncodedVideoChunk",true,false,true,
                    function EncodedVideoChunk(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageTrack",true,false,true,
                    function ImageTrack(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageTrackList",true,false,true,
                    function ImageTrackList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VideoColorSpace",true,false,true,
                    function VideoColorSpace(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VideoFrame",true,false,true,
                    function VideoFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioDecoder",true,false,true,
                    function AudioDecoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AudioEncoder",true,false,true,
                    function AudioEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ImageDecoder",true,false,true,
                    function ImageDecoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VideoDecoder",true,false,true,
                    function VideoDecoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VideoEncoder",true,false,true,
                    function VideoEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AuthenticatorAssertionResponse",true,false,true,
                    function AuthenticatorAssertionResponse(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AuthenticatorAttestationResponse",true,false,true,
                    function AuthenticatorAttestationResponse(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AuthenticatorResponse",true,false,true,
                    function AuthenticatorResponse(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PublicKeyCredential",true,false,true,
                    function PublicKeyCredential(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Bluetooth",true,false,true,
                    function Bluetooth(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothCharacteristicProperties",true,false,true,
                    function BluetoothCharacteristicProperties(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothDevice",true,false,true,
                    function BluetoothDevice(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothRemoteGATTCharacteristic",true,false,true,
                    function BluetoothRemoteGATTCharacteristic(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothRemoteGATTDescriptor",true,false,true,
                    function BluetoothRemoteGATTDescriptor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothRemoteGATTServer",true,false,true,
                    function BluetoothRemoteGATTServer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothRemoteGATTService",true,false,true,
                    function BluetoothRemoteGATTService(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CaptureController",true,false,true,
                    function CaptureController(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "EyeDropper",true,false,true,
                    function EyeDropper(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FileSystemDirectoryHandle",true,false,true,
                    function FileSystemDirectoryHandle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FileSystemFileHandle",true,false,true,
                    function FileSystemFileHandle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FileSystemHandle",true,false,true,
                    function FileSystemHandle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FileSystemWritableFileStream",true,false,true,
                    function FileSystemWritableFileStream(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FontData",true,false,true,
                    function FontData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "FragmentDirective",true,false,true,
                    function FragmentDirective(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPU",true,false,true,
                    function GPU(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUAdapter",true,false,true,
                    function GPUAdapter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUAdapterInfo",true,false,true,
                    function GPUAdapterInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUBindGroup",true,false,true,
                    function GPUBindGroup(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUBindGroupLayout",true,false,true,
                    function GPUBindGroupLayout(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUBuffer",true,false,true,
                    function GPUBuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUBufferUsage",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "GPUCanvasContext",true,false,true,
                    function GPUCanvasContext(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUColorWrite",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "GPUCommandBuffer",true,false,true,
                    function GPUCommandBuffer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUCommandEncoder",true,false,true,
                    function GPUCommandEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUCompilationInfo",true,false,true,
                    function GPUCompilationInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUCompilationMessage",true,false,true,
                    function GPUCompilationMessage(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUComputePassEncoder",true,false,true,
                    function GPUComputePassEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUComputePipeline",true,false,true,
                    function GPUComputePipeline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUDevice",true,false,true,
                    function GPUDevice(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUDeviceLostInfo",true,false,true,
                    function GPUDeviceLostInfo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUError",true,false,true,
                    function GPUError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUExternalTexture",true,false,true,
                    function GPUExternalTexture(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUInternalError",true,false,true,
                    function GPUInternalError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUMapMode",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "GPUOutOfMemoryError",true,false,true,
                    function GPUOutOfMemoryError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUPipelineError",true,false,true,
                    function GPUPipelineError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUPipelineLayout",true,false,true,
                    function GPUPipelineLayout(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUQuerySet",true,false,true,
                    function GPUQuerySet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUQueue",true,false,true,
                    function GPUQueue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPURenderBundle",true,false,true,
                    function GPURenderBundle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPURenderBundleEncoder",true,false,true,
                    function GPURenderBundleEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPURenderPassEncoder",true,false,true,
                    function GPURenderPassEncoder(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPURenderPipeline",true,false,true,
                    function GPURenderPipeline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUSampler",true,false,true,
                    function GPUSampler(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUShaderModule",true,false,true,
                    function GPUShaderModule(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUShaderStage",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "GPUSupportedFeatures",true,false,true,
                    function GPUSupportedFeatures(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUSupportedLimits",true,false,true,
                    function GPUSupportedLimits(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUTexture",true,false,true,
                    function GPUTexture(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUTextureUsage",true,false,true,
                    {},
                );

                my_env.plugins.def_obj_prop(window, "GPUTextureView",true,false,true,
                    function GPUTextureView(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUUncapturedErrorEvent",true,false,true,
                    function GPUUncapturedErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "GPUValidationError",true,false,true,
                    function GPUValidationError(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HID",true,false,true,
                    function HID(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HIDConnectionEvent",true,false,true,
                    function HIDConnectionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HIDDevice",true,false,true,
                    function HIDDevice(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HIDInputReportEvent",true,false,true,
                    function HIDInputReportEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IdentityCredential",true,false,true,
                    function IdentityCredential(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "IdleDetector",true,false,true,
                    function IdleDetector(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LaunchParams",true,false,true,
                    function LaunchParams(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "LaunchQueue",true,false,true,
                    function LaunchQueue(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Mojo",true,false,true,
                    function Mojo(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MojoHandle",true,false,true,
                    function MojoHandle(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MojoWatcher",true,false,true,
                    function MojoWatcher(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "OTPCredential",true,false,true,
                    function OTPCredential(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PaymentAddress",true,false,true,
                    function PaymentAddress(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PaymentRequest",true,false,true,
                    function PaymentRequest(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PaymentResponse",true,false,true,
                    function PaymentResponse(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PaymentMethodChangeEvent",true,false,true,
                    function PaymentMethodChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Presentation",true,false,true,
                    function Presentation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationAvailability",true,false,true,
                    function PresentationAvailability(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationConnection",true,false,true,
                    function PresentationConnection(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationConnectionAvailableEvent",true,false,true,
                    function PresentationConnectionAvailableEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationConnectionCloseEvent",true,false,true,
                    function PresentationConnectionCloseEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationConnectionList",true,false,true,
                    function PresentationConnectionList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationReceiver",true,false,true,
                    function PresentationReceiver(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PresentationRequest",true,false,true,
                    function PresentationRequest(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Serial",true,false,true,
                    function Serial(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SerialPort",true,false,true,
                    function SerialPort(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ToggleEvent",true,false,true,
                    function ToggleEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USB",true,false,true,
                    function USB(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBAlternateInterface",true,false,true,
                    function USBAlternateInterface(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBConfiguration",true,false,true,
                    function USBConfiguration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBConnectionEvent",true,false,true,
                    function USBConnectionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBDevice",true,false,true,
                    function USBDevice(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBEndpoint",true,false,true,
                    function USBEndpoint(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBInTransferResult",true,false,true,
                    function USBInTransferResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBInterface",true,false,true,
                    function USBInterface(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBIsochronousInTransferPacket",true,false,true,
                    function USBIsochronousInTransferPacket(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBIsochronousInTransferResult",true,false,true,
                    function USBIsochronousInTransferResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBIsochronousOutTransferPacket",true,false,true,
                    function USBIsochronousOutTransferPacket(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBIsochronousOutTransferResult",true,false,true,
                    function USBIsochronousOutTransferResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "USBOutTransferResult",true,false,true,
                    function USBOutTransferResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WakeLock",true,false,true,
                    function WakeLock(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WakeLockSentinel",true,false,true,
                    function WakeLockSentinel(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WindowControlsOverlay",true,false,true,
                    function WindowControlsOverlay(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "WindowControlsOverlayGeometryChangeEvent",true,false,true,
                    function WindowControlsOverlayGeometryChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRAnchor",true,false,true,
                    function XRAnchor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRAnchorSet",true,false,true,
                    function XRAnchorSet(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRBoundedReferenceSpace",true,false,true,
                    function XRBoundedReferenceSpace(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRCPUDepthInformation",true,false,true,
                    function XRCPUDepthInformation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRCamera",true,false,true,
                    function XRCamera(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRDepthInformation",true,false,true,
                    function XRDepthInformation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRFrame",true,false,true,
                    function XRFrame(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRHitTestResult",true,false,true,
                    function XRHitTestResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRHitTestSource",true,false,true,
                    function XRHitTestSource(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRInputSource",true,false,true,
                    function XRInputSource(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRInputSourceArray",true,false,true,
                    function XRInputSourceArray(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRInputSourceEvent",true,false,true,
                    function XRInputSourceEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRInputSourcesChangeEvent",true,false,true,
                    function XRInputSourcesChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRLightEstimate",true,false,true,
                    function XRLightEstimate(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRLightProbe",true,false,true,
                    function XRLightProbe(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRPose",true,false,true,
                    function XRPose(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRRay",true,false,true,
                    function XRRay(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRReferenceSpace",true,false,true,
                    function XRReferenceSpace(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRReferenceSpaceEvent",true,false,true,
                    function XRReferenceSpaceEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRRenderState",true,false,true,
                    function XRRenderState(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRRigidTransform",true,false,true,
                    function XRRigidTransform(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRSession",true,false,true,
                    function XRSession(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRSessionEvent",true,false,true,
                    function XRSessionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRSpace",true,false,true,
                    function XRSpace(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRSystem",true,false,true,
                    function XRSystem(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRTransientInputHitTestResult",true,false,true,
                    function XRTransientInputHitTestResult(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRTransientInputHitTestSource",true,false,true,
                    function XRTransientInputHitTestSource(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRView",true,false,true,
                    function XRView(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRViewerPose",true,false,true,
                    function XRViewerPose(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRViewport",true,false,true,
                    function XRViewport(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRWebGLDepthInformation",true,false,true,
                    function XRWebGLDepthInformation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "XRWebGLLayer",true,false,true,
                    function XRWebGLLayer(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "getScreenDetails",true,true,true,
                    function getScreenDetails(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "queryLocalFonts",true,true,true,
                    function queryLocalFonts(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "showDirectoryPicker",true,true,true,
                    function showDirectoryPicker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "showOpenFilePicker",true,true,true,
                    function showOpenFilePicker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "showSaveFilePicker",true,true,true,
                    function showSaveFilePicker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "originAgentCluster",true,true,undefined,undefined,
                    function originAgentCluster(){debugger; return false},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "speechSynthesis",true,true,undefined,undefined,
                    function speechSynthesis(){debugger; return {}},
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "oncontentvisibilityautostatechange",true,true,undefined,undefined,
                    function oncontentvisibilityautostatechange(){debugger; return {}},
                    function oncontentvisibilityautostatechange(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "onscrollend",true,true,undefined,undefined,
                    function onscrollend(){debugger; return {}},
                    function onscrollend(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AnimationPlaybackEvent",true,false,true,
                    function AnimationPlaybackEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "AnimationTimeline",true,false,true,
                    function AnimationTimeline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSAnimation",true,false,true,
                    function CSSAnimation(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CSSTransition",true,false,true,
                    function CSSTransition(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DocumentTimeline",true,false,true,
                    function DocumentTimeline(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BackgroundFetchManager",true,false,true,
                    function BackgroundFetchManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BackgroundFetchRecord",true,false,true,
                    function BackgroundFetchRecord(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BackgroundFetchRegistration",true,false,true,
                    function BackgroundFetchRegistration(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BluetoothUUID",true,false,true,
                    function BluetoothUUID(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "BrowserCaptureMediaStreamTrack",true,false,true,
                    function BrowserCaptureMediaStreamTrack(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "CropTarget",true,false,true,
                    function CropTarget(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ContentVisibilityAutoStateChangeEvent",true,false,true,
                    function ContentVisibilityAutoStateChangeEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "DelegatedInkTrailPresenter",true,false,true,
                    function DelegatedInkTrailPresenter(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Ink",true,false,true,
                    function Ink(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Highlight",true,false,true,
                    function Highlight(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "HighlightRegistry",true,false,true,
                    function HighlightRegistry(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MathMLElement",true,false,true,
                    function MathMLElement(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaMetadata",true,false,true,
                    function MediaMetadata(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "MediaSession",true,false,true,
                    function MediaSession(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "NavigatorUAData",true,false,true,
                    function NavigatorUAData(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Notification",true,false,true,
                    function Notification(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PaymentManager",true,false,true,
                    function PaymentManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PaymentRequestUpdateEvent",true,false,true,
                    function PaymentRequestUpdateEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PeriodicSyncManager",true,false,true,
                    function PeriodicSyncManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PermissionStatus",true,false,true,
                    function PermissionStatus(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "Permissions",true,false,true,
                    function Permissions(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PushManager",true,false,true,
                    function PushManager(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PushSubscription",true,false,true,
                    function PushSubscription(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "PushSubscriptionOptions",true,false,true,
                    function PushSubscriptionOptions(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "RemotePlayback",true,false,true,
                    function RemotePlayback(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SharedWorker",true,false,true,
                    function SharedWorker(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SpeechSynthesisErrorEvent",true,false,true,
                    function SpeechSynthesisErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SpeechSynthesisEvent",true,false,true,
                    function SpeechSynthesisEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "SpeechSynthesisUtterance",true,false,true,
                    function SpeechSynthesisUtterance(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "VideoPlaybackQuality",true,false,true,
                    function VideoPlaybackQuality(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "ViewTransition",true,false,true,
                    function ViewTransition(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitSpeechGrammar",true,false,true,
                    function SpeechGrammar(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitSpeechGrammarList",true,false,true,
                    function SpeechGrammarList(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitSpeechRecognition",true,false,true,
                    function SpeechRecognition(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitSpeechRecognitionError",true,false,true,
                    function SpeechRecognitionErrorEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitSpeechRecognitionEvent",true,false,true,
                    function SpeechRecognitionEvent(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "openDatabase",true,true,true,
                    function openDatabase(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitRequestFileSystem",true,true,true,
                    function webkitRequestFileSystem(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "webkitResolveLocalFileSystemURL",true,true,true,
                    function webkitResolveLocalFileSystemURL(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "JSCompiler_renameProperty",true,true,true,
                    function (){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "handle_value",false,true,true,
                    function handle_value(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "create_object",false,true,true,
                    function create_object(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "dir",true,false,true,
                    function dir(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "dirxml",true,false,true,
                    function dirxml(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "profile",true,false,true,
                    function profile(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "profileEnd",true,false,true,
                    function profileEnd(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "table",true,false,true,
                    function table(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "keys",true,false,true,
                    function keys(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "values",true,false,true,
                    function values(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "debug",true,false,true,
                    function debug(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "undebug",true,false,true,
                    function undebug(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "monitor",true,false,true,
                    function monitor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "unmonitor",true,false,true,
                    function unmonitor(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "inspect",true,false,true,
                    function inspect(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "copy",true,false,true,
                    function copy(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "queryObjects",true,false,true,
                    function queryObjects(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "$_",true,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "$0",true,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "$1",true,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "$2",true,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "$3",true,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "$4",true,false,undefined,undefined,
                    undefined,
                    undefined,
                );

                my_env.plugins.def_obj_prop(window, "getEventListeners",true,false,true,
                    function getEventListeners(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "getAccessibleName",true,false,true,
                    function getAccessibleName(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "getAccessibleRole",true,false,true,
                    function getAccessibleRole(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "monitorEvents",true,false,true,
                    function monitorEvents(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "unmonitorEvents",true,false,true,
                    function unmonitorEvents(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "$",true,false,true,
                    function $(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "$$",true,false,true,
                    function $$(){debugger;},
                );

                my_env.plugins.def_obj_prop(window, "$x",true,false,true,
                    function $x(){debugger;},
                );
            