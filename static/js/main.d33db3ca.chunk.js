(this["webpackJsonpreact-children"]=this["webpackJsonpreact-children"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(7),o=t.n(l),c=(t(13),t(1)),i=t(2),p=t(4),s=t(3),d=t(5);t(14);var u=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(l)))).getChildrenComponent=function(e){console.log("props.children as-is: ",t.props.children),console.log("props.children toArray: ",a.a.Children.toArray(t.props.children));var n=null;return a.a.Children.forEach(a.a.Children.toArray(t.props.children),(function(r){console.log("Child object: ",r),a.a.Children.toArray(t.props.children).length>0&&a.a.isValidElement(r)&&"function"===typeof r.type&&r.type.name===e&&(n=r,console.log("React Component name: ",r.type.name))})),n},t.getComponentByGivenProperty=function(e){var n=null;return a.a.Children.forEach(a.a.Children.toArray(t.props.children),(function(r){a.a.Children.toArray(t.props.children).length>0&&a.a.isValidElement(r)&&"function"===typeof r.type&&r.type.displayName&&r.type.displayName===e&&(n=r,console.log("React Component name: ",r.type.displayName))})),n},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.getChildrenComponent("ClassChildContainer"),this.getChildrenComponent("ChildContainerTwo"),this.getComponentByGivenProperty("MyNewName"))}}]),n}(a.a.Component),h=function(e){return a.a.createElement("div",{className:"child-container-one"},e.children)},m=function(e){return a.a.createElement("div",{className:"child-container-two"},e.children)},y=function(e){return a.a.createElement("div",{className:"child-container-three"},e.children)},f=function(e){function n(){return Object(c.a)(this,n),Object(p.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),n}(a.a.Component),C=function(e){return a.a.createElement("div",{className:"give-property"},e.children)};C.displayName="MyNewName",o.a.render(a.a.createElement((function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Children component names"),a.a.createElement("p",null,"Markup order of children components: parraf, One, Two, Three, Class",a.a.createElement("br",null),"Parent will select components by name (excluding elements, texts, functions)",a.a.createElement("br",null),"and render selected children components in different order"),a.a.createElement(u,null,a.a.createElement("p",null,"Paragraph"),a.a.createElement(h,null,"One"),a.a.createElement(m,null,"Two"),a.a.createElement(y,null,"Three"),a.a.createElement(f,null,"Class")),a.a.createElement("p",null,"Or give the component a new property to use for selection"),a.a.createElement(u,null,a.a.createElement(C,null,"New property")))}),null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d33db3ca.chunk.js.map