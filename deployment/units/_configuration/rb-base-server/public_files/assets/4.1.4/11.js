(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{6920:function(e,n,t){"use strict";t.r(n);var r=t(25),a=t.n(r),l=t(37),o=t.n(l),i=t(36),c=t.n(i),s=t(14),u=t(0),p=t.n(u),f=t(238),m=t(13),d=t(41),y=t(196);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E=Object(f.withScriptjs)(Object(f.withGoogleMap)(function(e){return p.a.createElement(f.GoogleMap,{defaultZoom:e.defaultZoom,center:e.center},e.markers.map(function(e,n){return p.a.createElement(f.Marker,{key:n,position:e.position})}))})),S=function(e){function n(e,t){var r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(r=h(this,k(n).call(this,e,t))).isUnmounted=!1,r.state={center:{lat:34.0522,lng:-118.243},markers:[]},r}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(n,p.a.Component),function(e,n,t){n&&b(e.prototype,n),t&&b(e,t)}(n,[{key:"render",value:function(){var e=this,n=this.props.classes;return p.a.createElement(d.a,null,p.a.createElement(a.a,{className:n.card},p.a.createElement(c.a,{title:"Inscriptio"}),p.a.createElement(o.a,null,p.a.createElement(y.a.Consumer,null,function(n){var t=n.webapp.api.googleMapsJavascriptAPI;return p.a.createElement(E,{defaultZoom:16,center:e.state.center,content:"Content here",googleMapURL:t,markers:e.state.markers,loadingElement:p.a.createElement("div",null,"Loading..."),containerElement:p.a.createElement("div",{style:{height:400}}),mapElement:p.a.createElement("div",{style:{height:400}})})}))))}}]),n}();n.default=Object(m.createFragmentContainer)(Object(s.withStyles)({card:{minWidth:275,minHeight:400}})(S),{Viewer:function(){return t(848)}})},848:function(e,n,t){"use strict";var r={kind:"Fragment",name:"InscriptioScreen_Viewer",type:"Viewer",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["Inscriptios"]}]},argumentDefinitions:[],selections:[{kind:"LinkedField",alias:"Inscriptios",name:"__InscriptioScreen_Inscriptios_connection",storageKey:null,args:null,concreteType:"InscriptiosConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"InscriptiosEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Inscriptio",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Inscriptio_LocationLat",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Inscriptio_LocationLon",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"endCursor",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"hasNextPage",args:null,storageKey:null}]}]}],hash:"92c961c1febe672713cf4ec57908046b"};e.exports=r}}]);