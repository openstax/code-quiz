(this["webpackJsonpcode-edit"]=this["webpackJsonpcode-edit"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(13),o=n(12),c=n.n(o),u=n(28),r=n.n(u),s=(n(35),n(7)),a=(n(36),n(0)),d=n(1),l=n(2),f=n(3),h=n(29),b=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).editor=Object(o.createRef)(),i.editorDidMount=function(e,t){e.focus()},i.state={code:"// type your code..."},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)(h.a,{ref:this.editor,width:"400",height:"400",language:"python",theme:"vs-dark",defaultValue:this.props.defaultValue,options:{selectOnLineNumbers:!0},editorDidMount:this.editorDidMount})}},{key:"value",get:function(){return this.editor.current.editor.getValue()}}]),n}(o.Component),j=window.Sk;function p(e){var t=document.getElementById("output");t.innerHTML=t.innerHTML+e}function g(e){if(void 0===j.builtinFiles||void 0===j.builtinFiles.files[e])throw"File not found: '"+e+"'";return j.builtinFiles.files[e]}var v=function(){var e=Object(o.useState)('print("Hello World!")'),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(o.useRef)(),r=Object(o.useCallback)((function(){var e;e=u.current.value,document.getElementById("output").innerHTML="",j.pre="output",j.configure({output:p,read:g}),(j.TurtleGraphics||(j.TurtleGraphics={})).target="mycanvas",j.misceval.asyncToPromise((function(){return j.importMainWithBody("<stdin>",!1,e,!0)})).then((function(e){console.log("success")}),(function(e){console.log(e.toString())}))}),[]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(b,{ref:u,onChange:c,defaultValue:n}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:r,children:"Execute"})}),Object(i.jsx)("div",{id:"output"})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),i(e),o(e),c(e),u(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),O()}},[[80,1,2]]]);
//# sourceMappingURL=main.4baafbd8.chunk.js.map