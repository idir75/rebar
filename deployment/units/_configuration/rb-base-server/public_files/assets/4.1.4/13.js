(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{6914:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n.n(r),o=n(25),c=n.n(o),i=n(80),l=n.n(i),u=n(37),s=n.n(u),p=n(36),f=n.n(p),m=n(116),g=n.n(m),h=n(14),d=n(26),y=n.n(d),b=n(0),v=n.n(b),_=n(41);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=O(this,k(t).call(this,e,n)))._handle_onClick_Logout=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){w(o,r,a,c,i,"next",e)}function i(e){w(o,r,a,c,i,"throw",e)}c(void 0)})}}(regeneratorRuntime.mark(function e(){var t,n,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({currentOperation:"logging out"}),e.prev=1,t=window.location,n=t.protocol+"//"+t.hostname+":"+t.port,e.next=6,fetch(n+"/auth/logout",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:"{}"});case 6:return a=e.sent,e.next=9,a.json();case 9:(o=e.sent).success?r.setState({currentOperation:"success"}):r.setState({currentOperation:"failure",errorMessage:o.error}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),r.setState({currentOperation:"failure",errorMessage:"Did not receive proper response from server. Please try again. Message:"+e.t0.message});case 16:case"end":return e.stop()}},e,this,[[1,13]])})),r._handle_onClick_CancelLogout=function(){r.setState({currentOperation:"failure",errorMessage:"User log out has been canceled"})},r._handle_onClick_TryAgain=function(){r.setState({currentOperation:"confirm",errorMessage:""})},r._handle_onClick_Continue=function(){window.location.replace("/")},r.state={currentOperation:"confirm",errorMessage:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,v.a.Component),function(e,t,n){t&&C(e.prototype,t),n&&C(e,n)}(t,[{key:"renderCreating",value:function(){var e=this.props.classes;return v.a.createElement(c.a,{className:e.card},v.a.createElement(f.a,{title:"Log Out"}),v.a.createElement(s.a,null,v.a.createElement(y.a,{component:"p"},"Logging out. Please wait ..."),v.a.createElement("br",null)," ",v.a.createElement("br",null),v.a.createElement(g.a,{mode:"query"})),v.a.createElement(l.a,null,v.a.createElement(a.a,{onClick:this._handle_onClick_CancelLogout},"Cancel")))}},{key:"renderSuccess",value:function(){var e=this.props.classes;return v.a.createElement(c.a,{className:e.card},v.a.createElement(f.a,{title:"Logout"}),v.a.createElement(s.a,null,v.a.createElement(y.a,{component:"p"},"You have been logged out.")),v.a.createElement(l.a,null,v.a.createElement(a.a,{onClick:this._handle_onClick_Continue},"Continue")))}},{key:"renderFailure",value:function(){var e=this.props.classes,t=this.state.errorMessage;return v.a.createElement(c.a,{className:e.card},v.a.createElement(f.a,{title:"Log out"}),v.a.createElement(s.a,null,v.a.createElement(y.a,{component:"p"},"Failed logging out because: ",t,"!")),v.a.createElement(l.a,null,v.a.createElement(a.a,{onClick:this._handle_onClick_TryAgain},"Try Again")))}},{key:"renderPrompt",value:function(){var e=this.props.classes;return v.a.createElement(c.a,{className:e.card},v.a.createElement(f.a,{title:"Log Out"}),v.a.createElement(s.a,null,v.a.createElement(y.a,{component:"p"},"You are currently logged in. Are you sure you want to log out?")),v.a.createElement(l.a,null,v.a.createElement(a.a,{onClick:this._handle_onClick_Logout},"Yes, Log Out")))}},{key:"render",value:function(){var e=this.state.currentOperation;return v.a.createElement(_.a,null,"confirm"===e&&this.renderPrompt(),"logging out"===e&&this.renderCreating(),"success"===e&&this.renderSuccess(),"failure"===e&&this.renderFailure())}}]),t}();t.default=Object(h.withStyles)(function(e){return{card:{minWidth:400}}})(P)}}]);