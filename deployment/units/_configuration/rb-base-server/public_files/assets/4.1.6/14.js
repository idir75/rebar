(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{6925:function(e,t,r){"use strict";r.r(t);var n=r(29),a=r.n(n),o=r(25),c=r.n(o),i=r(81),s=r.n(i),l=r(37),u=r.n(l),p=r(36),f=r.n(p),m=r(117),d=r.n(m),h=r(14),_=r(60),y=r.n(_),g=r(26),b=r.n(g),C=r(0),E=r.n(C),v=r(41);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,r,n,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(e,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,U(t).call(this,e,r)))._handle_onClick_Create=function(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function c(e){S(o,n,a,c,i,"next",e)}function i(e){S(o,n,a,c,i,"throw",e)}c(void 0)})}}(regeneratorRuntime.mark(function e(){var t,r,a,o,c,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,r=t.UserAccount_Identifier,a=t.User_Secret,n.setState({currentOperation:"creating",User_Secret:""}),e.prev=2,o=window.location,c=o.protocol+"//"+o.hostname+":"+o.port,e.next=7,fetch(c+"/auth/createuser",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({UserAccount_Identifier:r,User_Secret:a})});case 7:return i=e.sent,e.next=10,i.json();case 10:(s=e.sent).success?n.setState({currentOperation:"success"}):n.setState({currentOperation:"failure",errorMessage:s.error}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({currentOperation:"failure",errorMessage:"Did not receive proper response from server. Please try again. Message:"+e.t0.message});case 17:case"end":return e.stop()}},e,this,[[2,14]])})),n._handle_onClick_CancelCreation=function(){n.setState({currentOperation:"failure",errorMessage:"User creation has been canceled"})},n._handle_onClick_TryAgain=function(){n.setState({currentOperation:"prompt",errorMessage:""})},n._handle_onClick_Continue=function(){window.location.replace("/")},n.state={currentOperation:"prompt",errorMessage:"",UserAccount_Identifier:"",User_Secret:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,E.a.Component),function(e,t,r){t&&k(e.prototype,t),r&&k(e,r)}(t,[{key:"renderCreating",value:function(){var e=this.props.classes,t=this.state.UserAccount_Identifier;return E.a.createElement(c.a,{className:e.card},E.a.createElement(f.a,{title:"Creating user"}),E.a.createElement(u.a,null,E.a.createElement(b.a,{component:"p"},"Creating user",E.a.createElement("span",{className:e.userName},t),", please wait."),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement(d.a,{mode:"query"})),E.a.createElement(s.a,null,E.a.createElement(a.a,{onClick:this._handle_onClick_CancelCreation},"Cancel")))}},{key:"renderSuccess",value:function(){var e=this.props.classes,t=this.state.UserAccount_Identifier;return E.a.createElement(c.a,{className:e.card},E.a.createElement(f.a,{title:"Creating user"}),E.a.createElement(u.a,null,E.a.createElement(b.a,{component:"p"},"Created user",E.a.createElement("span",{className:e.userName},t),".")),E.a.createElement(s.a,null,E.a.createElement(a.a,{onClick:this._handle_onClick_Continue},"Continue")))}},{key:"renderFailure",value:function(){var e=this.props.classes,t=this.state,r=t.UserAccount_Identifier,n=t.errorMessage;return E.a.createElement(c.a,{className:e.card},E.a.createElement(f.a,{title:"Creating user"}),E.a.createElement(u.a,null,E.a.createElement(b.a,{component:"p"},"Failed creating user",E.a.createElement("span",{className:e.userName},r),"because ",n,".")),E.a.createElement(s.a,null,E.a.createElement(a.a,{onClick:this._handle_onClick_TryAgain},"Try Again")))}},{key:"renderPrompt",value:function(){var e=this,t=this.props.classes,r=this.state,n=r.UserAccount_Identifier,o=r.User_Secret;return E.a.createElement(c.a,{className:t.card},E.a.createElement(f.a,{title:"Create New User"}),E.a.createElement(u.a,null,E.a.createElement(y.a,{label:"E-Mail Address",fullWidth:!0,value:n,onChange:function(t){return e.setState({UserAccount_Identifier:t.target.value})}}),E.a.createElement(y.a,{label:"Password",type:"password",fullWidth:!0,value:o,onChange:function(t){return e.setState({User_Secret:t.target.value})}})),E.a.createElement(s.a,null,E.a.createElement(a.a,{onClick:this._handle_onClick_Create},"Create")))}},{key:"render",value:function(){var e=this.state.currentOperation;return E.a.createElement(v.a,null,"prompt"===e&&this.renderPrompt(),"creating"===e&&this.renderCreating(),"success"===e&&this.renderSuccess(),"failure"===e&&this.renderFailure())}}]),t}();t.default=Object(h.withStyles)(function(e){return{card:{minWidth:320},userName:{borderWidth:1,borderColor:"#c0c0c0",fontWeight:"bold",paddingLeft:10,paddingRight:10}}})(A)}}]);