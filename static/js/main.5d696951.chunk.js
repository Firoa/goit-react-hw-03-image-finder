(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__rs7Z3",Modal:"Modal_Modal__30nJn"}},24:function(e,t,a){e.exports={App:"App_App__1PK2y"}},27:function(e,t,a){e.exports={loader:"Loader_loader__1RCTn"}},30:function(e,t,a){e.exports={IG:"ImageGallery_IG__1hNrJ"}},32:function(e,t,a){e.exports={Button:"Button_Button__hT2lH"}},33:function(e,t,a){e.exports=a(81)},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2DCHB",SearchForm:"Searchbar_SearchForm__3Yy55",SearchFormButton:"Searchbar_SearchFormButton__2mmbJ",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3sIzC",SearchFormInput:"Searchbar_SearchFormInput__SDLnb"}},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),l=a(11),i=a(3),s=a(4),u=a(6),m=a(5),h=a(24),p=a.n(h),d=a(25),f=a(7),g=a.n(f),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchStr:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.handlerReset=function(){e.setState({searchStr:""})},e.handeleSubmit=function(t){t.preventDefault(),e.props.onSearchSubmit(e.state.searchStr),e.handlerReset()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.searchStr;return r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm,onSubmit:this.handeleSubmit},r.a.createElement("button",{type:"submit",className:g.a.SearchFormButton},r.a.createElement("span",{className:g.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,name:"searchStr",onChange:this.handleChange})))}}]),a}(n.Component),v=(a(38),a(26)),b=a.n(v),y=a(27),_=a.n(y),E=function(e){return e.isActive&&r.a.createElement("div",{className:_.a.loader},r.a.createElement(b.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}))},I=a(8),O=a.n(I),k=a(28),C=a(29),L=a.n(C),w="https://pixabay.com/api/",F="16009897-4c38efcfe1bde2f5cf5e4fbad",j=function(){var e=Object(k.a)(O.a.mark((function e(t){var a,n,r,o=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,n=o.length>2&&void 0!==o[2]?o[2]:12,e.next=4,L.a.get("".concat(w,"?q=").concat(t,"&page=").concat(a,"&key=").concat(F,"&image_type=photo&orientation=horizontal&per_page=").concat(n));case 4:return r=e.sent,console.log(r),e.abrupt("return",r.data.hits);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=a(30),B=a.n(M),x=a(9),N=a.n(x),R=function(e){var t=e.previewURL,a=e.tag,n=e.openModalOnClick;return r.a.createElement("li",{className:N.a.ImageGalleryItem,onClick:n},r.a.createElement("img",{src:t,alt:a,className:N.a.ImageGalleryItemImage}))},G=a(31),U=function(e){var t=e.items,a=e.openModal;return r.a.createElement("ul",{className:B.a.IG},t.map((function(e){return r.a.createElement(R,{previewURL:e.webformatURL,tag:e.tag,key:Object(G.v4)(),openModalOnClick:function(){return a(e.id)}})})))},A=a(32),D=a.n(A),q=function(e){var t=e.handleClick;return r.a.createElement("button",{className:D.a.Button,type:"button",onClick:t},"Load more")},T=function(e){var t=e.text;return r.a.createElement("h2",null,"Something Go Wrong: ",t)},J=a(10),H=a.n(J),Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).backdropRef=Object(n.createRef)(),e.handleClose=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){var a=e.backdropRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleClose)}},{key:"render",value:function(){return console.log(this.props.largeURL),r.a.createElement("div",{className:H.a.Overlay,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:H.a.Modal},r.a.createElement("img",{src:this.props.largeURL,alt:""})))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,img:[],isLoading:!1,error:null,isOpen:!1,modalUrl:""},e.handleModalOpen=function(t){console.log(t);var a=e.state.img.find((function(e){return e.id===t})).largeImageURL;console.log(a),e.setState({modalUrl:a}),e.setState({isOpen:!0})},e.handleModalClose=function(){e.setState({isOpen:!1})},e.handlerSearch=function(t){e.setState({query:t,page:1})},e.addMore=function(){console.log("Add more logic",e.state),e.setState({isLoading:!0}),e.setState((function(e){return{page:e.page+1}}))},e.ScroleFunc=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),j("").then((function(t){e.setState({img:t}),console.log(e.state)})).catch((function(t){e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.page===this.state.page&&t.query===this.state.query||(this.setState({isLoading:!0}),console.log("DID UBDATE STATE:",this.state),j(this.state.query,this.state.page).then((function(e){t.query!==a.state.query?a.setState({img:e}):a.setState((function(t){return{img:[].concat(Object(l.a)(t.img),Object(l.a)(e))}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){a.setState({isLoading:!1}),a.ScroleFunc()})))}},{key:"render",value:function(){var e=this.state,t=e.img,a=e.isLoading,n=e.error,o=e.isOpen,c=e.modalUrl;return r.a.createElement("div",{className:p.a.App},r.a.createElement(S,{onSearchSubmit:this.handlerSearch}),n&&r.a.createElement(T,{text:n.message}),a&&r.a.createElement(E,{isActive:!0}),t.length>0&&r.a.createElement(U,{items:t,openModal:this.handleModalOpen}),t.length>0&&r.a.createElement(q,{handleClick:this.addMore}),o&&r.a.createElement(Y,{largeURL:c,onClose:this.handleModalClose}))}}]),a}(n.Component);a(80);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__F94ae",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1YCYu"}}},[[33,1,2]]]);
//# sourceMappingURL=main.5d696951.chunk.js.map