(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[10],{457:function(e,a,t){"use strict";var n=t(9),s=t(10),r=t(12),o=t(11),c=t(0),l=t.n(c),i=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,required:this.props.required,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),t}(l.a.Component);a.a=i},462:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p={tag:d.n,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,l=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.j)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(p,Object(n.a)({},f,{className:b,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},463:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p={tag:d.n,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.j)(u()(a,"card-body"),t);return o.a.createElement(c,Object(n.a)({},l,{className:i,ref:r}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},466:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p=l.a.oneOfType([l.a.number,l.a.string]),m={tag:d.n,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,i=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var n=e[a];if(delete p[a],n){var s=!t;m.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var f=Object(d.j)(u()(a,r?"no-gutters":null,l?"form-row":"row",m),t);return o.a.createElement(c,Object(n.a)({},p,{className:f}))};b.propTypes=m,b.defaultProps=f,a.a=b},467:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),f={tag:d.n,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var r=!n;if(Object(d.h)(s)){var o,c=r?"-":"-"+a+"-",p=h(r,a,s.size);i.push(Object(d.j)(u()(((o={})[p]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o)),t))}else{var m=h(r,a,s);i.push(m)}}})),i.length||i.push("col");var p=Object(d.j)(u()(a,i),t);return o.a.createElement(c,Object(n.a)({},l,{className:p}))};g.propTypes=f,g.defaultProps=b,a.a=g},472:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p={tag:d.n,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.j)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},c,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},473:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p={tag:d.n,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.j)(u()(a,"card-title"),t);return o.a.createElement(r,Object(n.a)({},c,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},476:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(21),o=t(13),c=t(0),l=t.n(c),i=t(1),u=t.n(i),d=t(2),p=t.n(d),m=t(3),f={children:u.a.node,inline:u.a.bool,tag:m.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,c=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.j)(p()(a,!!r&&"form-inline"),t);return l.a.createElement(o,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},477:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.n,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,l=e.check,i=e.inline,p=e.tag,m=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.j)(u()(a,!!r&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),t);return"fieldset"===p&&(m.disabled=c),o.a.createElement(p,Object(n.a)({},m,{className:f}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},478:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(2),u=t.n(i),d=t(3),p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),f={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.n,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,l=e.tag,i=e.check,p=e.size,m=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];c.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,o=!n;if(Object(d.h)(s)){var c,l=o?"-":"-"+a+"-";r=h(o,a,s.size),b.push(Object(d.j)(u()(((c={})[r]=s.size||""===s.size,c["order"+l+s.order]=s.order||0===s.order,c["offset"+l+s.offset]=s.offset||0===s.offset,c))),t)}else r=h(o,a,s),b.push(r)}}));var g=Object(d.j)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return o.a.createElement(l,Object(n.a)({htmlFor:m},f,{className:g}))};g.propTypes=f,g.defaultProps=b,a.a=g},479:function(e,a,t){"use strict";var n=t(4),s=t(8),r=t(21),o=t(13),c=t(0),l=t.n(c),i=t(1),u=t.n(i),d=t(2),p=t.n(d),m=t(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),j=u||("select"===r||"textarea"===r?r:"input"),O="form-control";f?(O+="-plaintext",j=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":g&&(O=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(m.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var y=Object(m.j)(p()(a,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,O),t);return("input"===j||u&&"function"===typeof u)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(m.p)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(j,Object(n.a)({},h,{ref:b,className:y,"aria-invalid":i}))},a}(l.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},491:function(e,a,t){},592:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),o=t.n(r);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,o=void 0===r?24:r,i=l(e,["color","size"]);return s.a.createElement("svg",c({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="Check",a.a=i},593:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},629:function(e,a,t){"use strict";t.r(a);var n=t(9),s=t(10),r=t(12),o=t(11),c=t(0),l=t.n(c),i=t(466),u=t(467),d=t(462),p=t(472),m=t(473),f=t(463),b=(t(2),t(476)),h=t(477),g=t(479),v=t(478),j=t(239),O=t(457),y=t(592),N=t(26),w=t(41),E=t(147),x=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password1:"",password2:"",username:""},e.handleRegister=function(a){a.preventDefault(),console.log(e.state),e.props.onSignup(e.state.username,e.state.email,e.state.password1,e.state.password2),console.log(e.state)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(b.a,{onSubmit:this.handleRegister},l.a.createElement(h.a,{className:"form-label-group"},l.a.createElement(g.a,{type:"text",name:"username",placeholder:"Username",required:!0,value:this.state.username,onChange:function(a){return e.setState({username:a.target.value})}}),l.a.createElement(v.a,null,"Username")),l.a.createElement(h.a,{className:"form-label-group"},l.a.createElement(g.a,{type:"email",name:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),l.a.createElement(v.a,null,"Email")),l.a.createElement(h.a,{className:"form-label-group"},l.a.createElement(g.a,{type:"password",name:"password",placeholder:"Password",required:!0,value:this.state.password1,minLength:6,onChange:function(a){return e.setState({password1:a.target.value})}}),l.a.createElement(v.a,null,"Password")),l.a.createElement(h.a,{className:"form-label-group"},l.a.createElement(g.a,{type:"password",name:"confirm",placeholder:"Confirm Password",required:!0,value:this.state.password2,minLength:6,onChange:function(a){return e.setState({password2:a.target.value})},valid:this.state.password1&&this.state.password1===this.state.password2,invalid:!(this.state.password1===this.state.password2)}),l.a.createElement(v.a,null,"Confirm Password")),l.a.createElement(h.a,null,l.a.createElement(O.a,{color:"primary",name:"agreement",required:!0,icon:l.a.createElement(y.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(j.a.Ripple,{color:"primary",outline:!0,onClick:function(){w.a.push("/")}},"Login"),l.a.createElement(j.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(l.a.Component),k=Object(N.b)((function(e){return{loading:e.auth.loading,error:e.auth.loading}}),(function(e){return{onSignup:function(a,t,n,s){return e(E.b(a,t,n,s))}}}))(x),M=t(593),R=t.n(M),z=(t(491),function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(d.a,{className:"bg-authentication rounded-0 mb-0 w-100"},l.a.createElement(i.a,{className:"m-0"},l.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},l.a.createElement("img",{className:"mr-1",src:R.a,alt:"registerImg"})),l.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(d.a,{className:"rounded-0 mb-0 p-2"},l.a.createElement(p.a,{className:"pb-1 pt-50"},l.a.createElement(m.a,null,l.a.createElement("h4",{className:"mb-0"},"Create Account"))),l.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),l.a.createElement(f.a,{className:"pt-1 pb-50"},l.a.createElement(k,null))))))))}}]),t}(l.a.Component));a.default=z}}]);
//# sourceMappingURL=10.5e768bd5.chunk.js.map