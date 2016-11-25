"use strict";function _defineProperty(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function init(){var e=global.appConfig.isDev,r=require("../config/config.js"),s=r.JSON_PARSE_ERROR,t=r.ES6_ERROR,i=r.JSON_FILE_ERROR,p=r.JSON_ENTRANCE_ERROR,n=require("./trans/transManager.js"),o=require("./utils/tools.js"),c=(require("async"),require("fs")),a=require("path"),u=require("url"),l=require("./utils/vendorManager.js"),f=(require("glob"),require("./utils/projectManager.js")),j=require("../config/appserviceConfig.js"),v=require("../stores/projectStores.js"),g=require("../stores/windowStores.js"),d=require("../actions/windowActions.js"),h=require("./utils/parseErr.js"),y=(require("./tpl/errorTpl.js"),require("./tpl/appserviceErrorTpl.js"),a.join(__dirname,"appservice/asdebug.js")),_=c.readFileSync(y,"utf8");o.noBrowser.join(",");_exports.getAppservice=function(r,n){var y=o.getProject(r),q=u.parse(r),m=q.pathname,S=/appservice$/.test(m),b=/appservice-sdk\.js$/.test(m),R=/asdebug\.js$/.test(m),w=/ascheck\.js$/.test(m),E=/webnode\.js$/.test(m),F=/reporter-sdk\.js/.test(m),x=/app_service_engine\.js/.test(m),C=(/\.js$/.test(m),/\.js\.map$/.test(m)),O=/WAService\.js/.test(m),J=/favicon\.ico$/.test(m);if(J)n(200,{},"");else if(O)n(null,{},l.getFile("WAService.js"));else if(F)n(null,{},l.getFile("reporter-sdk.js"));else if(x)n(null,{},l.getFile("app_service_engine.js"));else if(b)n(null,{},l.getFile("appservice-sdk.js"));else if(R)n(null,{},_);else if(w)n(null,{},asCheck);else if(E)n(null,{},l.getFile("webnode.js"));else if(C)!function(){var e=a.join(y.projectpath,m);c.readFile(e,function(r,s){return r?void n(404,{},"do not find "+e):void n(200,{},s)})}();else{var N=function(){var o=(y.appname.toLowerCase(),y.appid.toLowerCase(),y.hash),c=void 0;try{c=f.getAppJSONSync(y)}catch(a){return n(200,{},""),setTimeout(function(){var e=a.type,r=void 0;e===s?r=h.parseJsonParseErr(a):e===i?r=h.parseJsonFileErr(a):e===p&&(r=h.parseJsonEntranceErr(a)),d.showWeappError(a.type,r)},200),{v:void 0}}var u=v.getProjectConfig(y);c.projectConfig=u,c.appserviceConfig=j;var l=c.pages||[];if(S)!function(){var r=require("./tpl/appserviceTpl.js"),s="http://"+o+".appservice.open.weixin.qq.com/",t=[],i=[],p=[];f.getAllJSFileList(y,function(o,a){for(var u={},f=0,j=l.length;f<j;f++){var v=l[f]+".js";u[v]=!0,t.push("<script>__wxRoute = '"+l[f]+"';__wxRouteBegin = true</script>"),t.push('<script src="'+s+v+'"></script>')}for(var d=0,h=a.length;d<h;d++){var _=a[d];u[_]||("app.js"===_?p.push('<script src="'+s+_+'"></script>'):i.push('<script src="'+s+_+'"></script>'))}t=i.concat(p).concat(t),e?(t.unshift('<script src="'+s+'app_service_engine.js"></script>'),t.unshift('<script src="'+s+'reporter-sdk.js"></script>'),t.unshift('<script src="'+s+'appservice-sdk.js"></script>'),t.unshift('<script src="'+s+'webnode.js"></script>')):t.unshift('<script src="'+s+'WAService.js"></script>'),t.unshift('<script src="'+s+'asdebug.js"></script>'),c.appname=y.appname,c.appid=y.appid,c.apphash=y.hash,c.isTourist=y.isTourist,y.isTourist&&(c.userInfo=g.getUserInfo()),t.unshift("<script>var __wxConfig = "+JSON.stringify(c)+"</script>"),r=r.replace("<script></script>",t.join("")),n(null,{},r)})}();else{var _=r.replace("http://"+o+".appservice.open.weixin.qq.com/","");f.getScripts({project:y,fileName:_,needRequire:"app.js"===_||l.indexOf(_.replace(/\.js/,""))!==-1},function(e,r){if(e)if(r){var s={file:e.sourceFileName,msg:e.e};n(null,_defineProperty({},t,encodeURIComponent(JSON.stringify(s))),r)}else e.project=y,d.showWeappError(e.type,h.parseJsFileErr(e)),n(200,{},"");else n(null,{"Content-Type":"text/javascript; charset=UTF-8"},r)})}}();if("object"===("undefined"==typeof N?"undefined":_typeof(N)))return N.v}},_exports.getResponse=function(e,r){n.getResponse(e,r)}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_exports={};init(),module.exports=_exports;