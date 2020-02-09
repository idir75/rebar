(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1323:function(e,t,r){"use strict";r.r(t);var a=r(123),n=r(63),s=r(44),l=r(85),o=r(45),c=r(443),i=r(4),u=r(335),h=r(237),d=r.n(h),m=r(0),p=r.n(m),C=r(34),g=r(33),_=r(250);const S={card:{minWidth:350,maxWidth:1200},...C.a};class E extends p.a.Component{constructor(e,t){super(e,t),this._handle_onClick_Change=async()=>{const{User_CurrentSecret:e,User_NewSecret:t}=this.state;this.setState({currentOperation:"changing"});try{const r=window.location,a=r.protocol+"//"+r.hostname+":"+r.port,n=await fetch(a+"/auth/change-secret",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({User_CurrentSecret:e,User_NewSecret:t})}),s=await n.json();s.success?this.setState({currentOperation:"success"}):this.setState({currentOperation:"failure",executionStatus:s.error})}catch(e){this.setState({currentOperation:"failure",executionStatus:"Did not receive proper response from server. Please try again. Message:"+e.message})}},this._handle_onClick_CancelChange=()=>{this.setState({currentOperation:"failure",executionStatus:"User creation has been canceled"})},this._handle_onClick_TryAgain=()=>{this.setState({User_CurrentSecret:"",currentOperation:"prompt",executionStatus:""})},this._handle_onClick_Continue=()=>{window.location.replace("/user/profile")},this._handle_onChange_Identifier=e=>{const t=e.target.value;this.setState({User_CurrentSecret:t})},this._handle_onUpdateSecret=e=>{this.setState({User_NewSecret:e})},this.state={currentOperation:"prompt",executionStatus:"",User_CurrentSecret:"",User_NewSecret:""}}renderChanging(){const{classes:e}=this.props;return p.a.createElement("div",null,p.a.createElement(C.b,{icon:p.a.createElement(d.a,{htmlColor:"#003c78"}),subTitle:"",title:"Updating password"}),p.a.createElement(s.a,{className:e.card,raised:!0},p.a.createElement(o.a,null,p.a.createElement("br",null),p.a.createElement(a.a,{variant:"outlined",severity:"info"},"Updating password. Please wait ..."),p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement(c.a,{mode:"query"})),p.a.createElement(l.a,null,p.a.createElement(n.a,{onClick:this._handle_onClick_CancelChange},"Cancel"))))}renderSuccess(){const{classes:e}=this.props;return p.a.createElement("div",null,p.a.createElement(C.b,{icon:p.a.createElement(d.a,{htmlColor:"#003c78"}),subTitle:"",title:"Password changed"}),p.a.createElement(s.a,{className:e.card},p.a.createElement(o.a,null,p.a.createElement("br",null),p.a.createElement(a.a,{variant:"outlined",severity:"success"},"Password successfully changed.")),p.a.createElement(l.a,null,p.a.createElement(n.a,{onClick:this._handle_onClick_Continue},"Continue"))))}renderFailure(){const{classes:e}=this.props,{executionStatus:t}=this.state;return p.a.createElement("div",null,p.a.createElement(C.b,{icon:p.a.createElement(d.a,{htmlColor:"#003c78"}),subTitle:"",title:"Failed to update password"}),p.a.createElement(s.a,{className:e.card},p.a.createElement(o.a,null,p.a.createElement("br",null),p.a.createElement(a.a,{variant:"outlined",severity:"error"},"Updating password failed because ",t,".")),p.a.createElement(l.a,null,p.a.createElement(n.a,{onClick:this._handle_onClick_TryAgain},"Try Again"))))}renderPrompt(){const{classes:e}=this.props,{User_CurrentSecret:t,User_NewSecret:r}=this.state,a=t.length<5||""===r;return p.a.createElement("div",null,p.a.createElement(C.b,{icon:p.a.createElement(d.a,{htmlColor:"#003c78"}),subTitle:"",title:"Change password"}),p.a.createElement(s.a,{className:e.card},p.a.createElement(o.a,null,p.a.createElement(u.a,{autoComplete:"password",fullWidth:!0,label:"Current (old) password",margin:"normal",type:"password",value:t,variant:"outlined",onChange:this._handle_onChange_Identifier}),p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement(_.a,{onUpdateSecret:this._handle_onUpdateSecret})),p.a.createElement(l.a,null,p.a.createElement(n.a,{disabled:a,onClick:this._handle_onClick_Change},"Change"))))}render(){const{currentOperation:e}=this.state;return p.a.createElement(g.a,null,"prompt"===e&&this.renderPrompt(),"changing"===e&&this.renderChanging(),"success"===e&&this.renderSuccess(),"failure"===e&&this.renderFailure())}}t.default=Object(i.a)(S)(E)},250:function(e,t,r){"use strict";var a=r(443),n=r(4),s=r(335),l=r(51),o=r(0),c=r.n(o);class i extends c.a.Component{constructor(e,t){super(e,t),this._handle_onChange_Secret=e=>{const t=e.target.value;this.setState({userSecret:t}),this.updateErrorAndValue(t,this.state.userSecretConfirm)},this._handle_onChange_SecretConfirm=e=>{const t=e.target.value;this.setState({userSecretConfirm:t}),this.updateErrorAndValue(this.state.userSecret,t)},this.state={userSecret:"",userSecretConfirm:"",userSecretPrompt:"",userSecretStrength:0,userSecretQuality:"poor"}}updateErrorAndValue(e,t){let r="";const a=e===t;let n=a?e:"";a||(r="Passwords do not match");const s=function(e,t,r){let a=0;if(!e)return 0;let n={};for(let r=0;r<e.length;r++)n[e[r]]=(n[e[r]]||0)+1,a+=t/n[e[r]];let s={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(let e in s)l+=!0===s[e]?1:0;return a+=(l-1)*r,a}(e,5,10),l=s>=80?"good":s>=30?"fair":"poor";""===r&&(r="Password strength: "+l),"poor"===l&&(n=""),this.props.onUpdateSecret(n),this.setState({userSecretPrompt:r,userSecretQuality:l,userSecretStrength:s})}render(){const{classes:e}=this.props,{userSecret:t,userSecretConfirm:r,userSecretPrompt:n,userSecretQuality:o,userSecretStrength:i}=this.state;return c.a.createElement("div",null,c.a.createElement(s.a,{autoComplete:"new-password",fullWidth:!0,label:"Password",margin:"normal",type:"password",value:t,variant:"outlined",onChange:this._handle_onChange_Secret}),c.a.createElement(s.a,{autoComplete:"new-password",fullWidth:!0,label:"Confirm password",margin:"normal",type:"password",value:r,variant:"outlined",onChange:this._handle_onChange_SecretConfirm}),c.a.createElement(l.a,{variant:"subtitle1",gutterBottom:!0},c.a.createElement("br",null),n),c.a.createElement(a.a,{classes:{colorPrimary:e.strengthColorPrimary,barColorPrimary:e["strengthBarColorPrimary_"+o]},value:50*i/80,variant:"determinate"}))}}t.a=Object(n.a)({strengthColorPrimary:{backgroundColor:"#a0a0a0"},strengthBarColorPrimary_poor:{backgroundColor:"#a00000"},strengthBarColorPrimary_fair:{backgroundColor:"#0000a0"},strengthBarColorPrimary_good:{backgroundColor:"#00a000"}})(i)}}]);