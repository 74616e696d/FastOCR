(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=n(20),l=n(21),o=n(25),d=n(24),j=n(11),h=n.n(j),x=n(7),b=(n(50),n(51),n(4)),u=n(3);function m(e){var t=e.imgText,n=e.imgUrl;return Object(u.jsxs)(b.b,{children:[Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.e,{children:Object(u.jsx)("h2",{children:"Image Text"})}),Object(u.jsx)("hr",{}),"\xa0\xa0\xa0",Object(u.jsx)(b.a,{className:"mx-2",children:"Copy Link"}),Object(u.jsx)(b.a,{children:"Copy Text"}),Object(u.jsx)("hr",{}),Object(u.jsx)(b.g,{children:t})]}),Object(u.jsx)(b.f,{variant:"bottom",src:n}),Object(u.jsx)(b.d,{children:"Hello"})]})}function g(e){var t=e.onChangeHandler,n=e.onClickHandler,c=e.loaded;return Object(u.jsxs)(b.b,{children:[Object(u.jsx)(b.e,{children:Object(u.jsx)("h2",{children:"Upload An Image"})}),Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.g,{children:"Fast and Free OCR service. Extract text from any image with in few seconds. Simple Optical Character Recognition service. Maximum File upload size is 8MB."}),Object(u.jsx)(b.j,{children:Object(u.jsx)("input",{type:"file",className:"form-control",onChange:t})}),Object(u.jsx)(b.a,{variant:"primary",onClick:n,children:"Upload"}),Object(u.jsx)(x.a,{}),Object(u.jsx)("br",{}),Object(u.jsxs)(b.k,{max:"100",color:"success",value:c,children:[Math.round(c,2),"%"]})]})]})}var O=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).host=window.location.protocol+"//"+window.location.host,c.imgQuery=!1,c.onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0],loaded:0})},c.onClickHandler=function(){var e=new FormData;e.append("file",c.state.selectedFile),h.a.post(c.host+"/api/image",e,{onUploadProgress:function(e){c.setState({loaded:e.loaded/e.total*100})}}).then((function(e){x.b.success("upload success"),c.setState({imgUrl:e.data.url,imgText:e.data.text})})).catch((function(e){x.b.error("upload fail")}))},c.getImgData=function(e){var t=c.host+"/api/get_images/"+e;h.a.get(t).then((function(e){c.setState({imgUrl:"/uploads/"+e.data.uuid+"."+e.data.file_ext,imgText:e.data.text}),window.iii=e.data})).catch((function(e){x.b.error("Can't get the image!")}))},c.state={selectedFile:null,imgUrl:"",imgText:""},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(!this.imgQuery){var e=window.location.hash.replace("#","");32==e.length&&(this.imgQuery=!0,this.getImgData(e))}}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.i,{children:[Object(u.jsx)("br",{}),Object(u.jsx)(b.l,{className:"justify-content-md-center",children:Object(u.jsx)(b.h,{md:"auto",children:this.imgQuery?Object(u.jsx)("div",{children:" "}):Object(u.jsx)(g,{onChangeHandler:this.onChangeHandler,onClickHandler:this.onClickHandler,loaded:this.state.loaded})})}),Object(u.jsx)("br",{}),Object(u.jsx)(b.l,{className:"justify-content-md-center",children:Object(u.jsx)(b.h,{md:"auto",children:this.state.imgUrl?Object(u.jsx)(m,{imgUrl:this.state.imgUrl,imgText:this.state.imgText}):Object(u.jsx)("div",{})})})]})})}}]),n}(c.Component);n(55);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.795e2ffd.chunk.js.map