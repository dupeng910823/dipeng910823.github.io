(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{A6fc:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),i=l("7/fN"),o=l("6uu6"),a=l("S8NE"),u=function(){function n(n,t,l){this._ngZone=n,this.state=t,this.auth=l,this.tagOpacity=0,this.like=!1,this.dislike=!1,this.willRemove=!1,this.config={a11y:!0,direction:"horizontal",spaceBetween:0,slidesPerView:1,keyboard:!0,mousewheel:!0,scrollbar:!1,lazy:{loadPrevNext:!0},pagination:{el:".swiper-pagination",clickable:!0},autoplay:!1,loop:!0,allowTouchMove:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}return n.prototype.ngOnInit=function(){this.state.navigate="Club Tinder",this.doc_width=document.getElementById("swiper").clientWidth},n.prototype.touchstart=function(n,t,l){if(l||this.willRemove){t.site._x_start=n.touches[0].pageX,t.site._y_start=n.touches[0].pageY;var e=document.getElementsByClassName("card-1")[0];t.site.touch_part=n.touches[0].pageY-e.offsetHeight/2>=51?-1:1}else n.preventDefault()},n.prototype.touchmove=function(n,t,l){l||this.willRemove?(this.willRemove&&this.state.clubs[this.state.clubs.length-1]!=t&&(this.state.clubs.pop(),this.willRemove=!1),t.site._x_move=n.touches[0].pageX,t.site._y_move=n.touches[0].pageY,t.site.top_val=parseFloat(t.site._y_move)-parseFloat(t.site._y_start),t.site.left_val=parseFloat(t.site._x_move)-parseFloat(t.site._x_start),t.style={transform:"translate3d("+t.site.left_val+"px,"+t.site.top_val+"px,0px) rotate("+t.site.left_val/this.doc_width*20*t.site.touch_part+"deg)","transition-duration":"0s"},this.tagOpacity=t.site.left_val>=0?t.site.left_val/(this.doc_width/3):-t.site.left_val/(this.doc_width/3),t.site.left_val>0?(this.like=!0,this.dislike=!1):t.site.left_val<0?(this.like=!1,this.dislike=!0):(this.like=!1,this.dislike=!1)):n.preventDefault()},n.prototype.touchend=function(n,t,l){l||this.willRemove?(t.site._x_end=n.changedTouches[0].pageX,t.site._y_end=n.changedTouches[0].pageY,t.site.left_val>0&&t.site.left_val>this.doc_width/2-this.doc_width/3.5?(this.state.loveClub(t.club_id),this.animateMove(t,1)):t.site.left_val<0&&t.site.left_val<-this.doc_width/2+this.doc_width/3.5?this.animateMove(t,-1):this.animateReset(t)):n.preventDefault()},n.prototype.animateMove=function(n,t){var l=this;this.state.markAsRead(n.club_id),n!=this.lastUser&&(this.lastUser=n,this.willRemove=!0,n.style={transform:"translate3d("+this.doc_width*t+"px,"+2.2*n.site.top_val+"px,0px)","transition-duration":"0.3s"},this.tagOpacity=1,setTimeout(function(){l.otherCardMove(n)},0),setTimeout(function(){l.state.clubs[l.state.clubs.length-1]==n&&(l.state.clubs.pop(),l.willRemove=!1,l.reset()),l.state.checkSeeAgain()},400))},n.prototype.animateReset=function(n){n.style={transform:"translate3d(0px,0px,0px) rotate(0deg)","transition-duration":"0.3s"},this.setOpacity(300,this.tagOpacity),this.like=!1,this.dislike=!1},n.prototype.setOpacity=function(n,t){var l=this;0!=n&&setTimeout(function(){l.tagOpacity=t*((n-=30)/300),l.setOpacity(n,t)},30)},n.prototype.unLove=function(){var n=this,t=this.state.clubs[this.state.clubs.length-1];t&&t!=this.lastUser&&(this.lastUser=t,this.state.markAsRead(t.club_id),t.style={transform:"translate3d("+-1.5*this.doc_width+"px,"+45*2.2+"px,0px) rotate(-10deg)","transition-duration":"0.8s"},this.tagOpacity=1,this.dislike=!0,this.otherCardMove(t),setTimeout(function(){n.reset(),n.state.clubs.pop(),n.state.checkSeeAgain()},300))},n.prototype.love=function(){var n=this,t=this.state.clubs[this.state.clubs.length-1];t&&t!=this.lastUser&&(this.lastUser=t,this.state.markAsRead(t.club_id),this.state.loveClub(t.club_id),t.style={transform:"translate3d("+1.5*this.doc_width+"px,"+45*2.2+"px,0px) rotate(10deg)","transition-duration":"0.8s"},this.tagOpacity=1,this.like=!0,this.otherCardMove(t),setTimeout(function(){n.reset(),n.state.clubs.pop(),n.state.checkSeeAgain()},300))},n.prototype.viewClub=function(n){this.state.clubToShow=n},n.prototype.otherCardMove=function(n){var t=document.getElementsByClassName("card-2")[0];t&&(t.style.transform="translate3d(0px,0px,0px) rotate(0deg)",t.style.transitionDuration="0.3s");var l=document.getElementsByClassName("card-3")[0];l&&(l.style.transform="translate3d(0, 5%, 0) scale(0.95)",l.style.transitionDuration="0.5s");var e=document.getElementsByClassName("card-4")[0];e&&(e.style.transform="translate3d(0, 10%, 0) scale(0.90)",e.style.transitionDuration="0.1s")},n.prototype.reset=function(){this.tagOpacity=0,this.like=!1,this.dislike=!1},n.prototype.seeAgain=function(){this.state.getUnreadClubs()},n}(),s={observer:!0,direction:"horizontal",threshold:50,spaceBetween:5,slidesPerView:1,centeredSlides:!0},c=function(){},r=l("pMnS"),d=l("Ip0R"),p=e["\u0275crt"]({encapsulation:0,styles:[["@-webkit-keyframes setOpacity{100%{opacity:0}}@keyframes setOpacity{100%{opacity:0}}.swiper[_ngcontent-%COMP%]{position:relative;overflow:hidden}.swiper-container-feed[_ngcontent-%COMP%]{height:100%;z-index:unset}.swiper-wrapper[_ngcontent-%COMP%]{z-index:unset}.card[_ngcontent-%COMP%]{position:absolute;top:20px;left:7%;width:86%;height:calc(100% - 220px);overflow:hidden;border-radius:10px;box-shadow:0 2px 6px 0 rgba(0,0,0,.2);background:#fff;z-index:1;opacity:0}.card-1[_ngcontent-%COMP%]{opacity:1}.card-2[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,5%,0) scale(.95);transform:translate3d(0,5%,0) scale(.95);opacity:1}.card-3[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,10%,0) scale(.9);transform:translate3d(0,10%,0) scale(.9);opacity:1}.card-4[_ngcontent-%COMP%]{-webkit-transform:translate3d(0,5%,0) scale(.9);transform:translate3d(0,5%,0) scale(.9);opacity:1}.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.card[_ngcontent-%COMP%]   .feedImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:inline-block;text-align:center}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%;max-width:142px;height:auto}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:15px;color:rgba(34,34,34,1);display:inline-block;font-size:16px;font-weight:500;padding:0 20px;text-align:center;line-height:20px}@media only screen and (max-height:550px){.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:none}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:8px}}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:25px;color:rgba(0,122,255,1);font-weight:600;width:167px;height:48px;line-height:48px;border:0;background:rgba(255,255,255,1);box-shadow:0 2px 7px 0 rgba(0,0,0,.08);border-radius:25px;position:relative;padding-left:54px;text-align:left}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:red}.card[_ngcontent-%COMP%]   .seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:auto;position:absolute;top:50%;left:25px;-webkit-transform:translateY(calc(-50% - 2px));transform:translateY(calc(-50% - 2px))}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{position:absolute;top:0;bottom:130px;width:50%;z-index:10;background:rgba(0,0,0,0);height:unset;outline:0}.swiper-button-next[_ngcontent-%COMP%]{right:0;left:auto}.swiper-button-prev[_ngcontent-%COMP%]{left:0;right:auto}.card[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{position:absolute;top:0;bottom:130px;width:100%;z-index:2}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:34px;line-height:36px;text-overflow:ellipsis;overflow:hidden;margin-bottom:5px;width:calc(100% + 39px);text-shadow:2px 2px 4px rgba(0,0,0,.2);display:-webkit-box;-webkit-line-clamp:2}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{font-size:14px;font-weight:700;width:calc(100% + 39px)}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:3px 8px;margin-right:6px;display:inline-block;background:rgba(0,0,0,.34);border-radius:11px;margin-top:4px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){color:#ffe4b0}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){color:#bbffd7}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){color:#c4ebff}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){color:#ffcfd1}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:15px;font-size:16px;word-break:break-word;color:rgba(255,255,255,1);overflow:hidden;text-overflow:ellipsis;text-shadow:1px 1px 1px rgba(0,0,0,.3);display:-webkit-box;-webkit-line-clamp:2}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;bottom:0;padding:97px 55px 42px 16px;color:#fff;width:100%;background:linear-gradient(180deg,rgba(4,25,47,0) 0,rgba(4,25,47,.76) 100%);z-index:1}.swiper-footer[_ngcontent-%COMP%]{height:64px;text-align:center;margin:auto;position:absolute;width:100%;bottom:90px;white-space:nowrap}.swiper-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;background:#fff;box-shadow:3px 6px 9px 0 rgba(22,37,58,.12);border-radius:50%;margin:0 30px;width:64px;height:64px}.swiper-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{opacity:.8}.showInfo[_ngcontent-%COMP%]{position:absolute;bottom:45px;right:15px;background:#fff;width:32px;height:32px;line-height:32px;border-radius:50%;text-align:center;box-shadow:0 4px 6px 0 rgba(0,0,0,.11);z-index:2}.dislike[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:225px;height:73px;-webkit-transform:rotate(30deg);transform:rotate(30deg);position:absolute;top:51px;right:2px;z-index:1}.like[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:225px;height:73px;-webkit-transform:rotate(-30deg);transform:rotate(-30deg);position:absolute;top:51px;left:2px;z-index:1}"]],data:{}});function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","imageContainer feedImageContainer swiper-slide"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["class","swiper-lazy"]],[[8,"src",4]],null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"div",[["class","swiper-lazy-preloader"]],null,null,null,null,null))],null,function(n,t){n(t,1,0,e["\u0275inlineInterpolate"](1,"",t.component.auth.IMG_URL+"/static/clubphoto/"+t.context.$implicit,""))})}function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,t){n(t,1,0,t.parent.parent.context.$implicit.tagMap?t.parent.parent.context.$implicit.tagMap[t.context.$implicit].Tag:"")})}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","dislike"]],[[4,"opacity",null]],null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["src","./assets/images/club/Leapfrog@3x.png"]],null,null,null,null,null))],null,function(n,t){n(t,0,0,t.component.tagOpacity)})}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","like"]],[[4,"opacity",null]],null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["src","./assets/images/club/Favorites1@3x.png"]],null,null,null,null,null))],null,function(n,t){n(t,0,0,t.component.tagOpacity)})}function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,26,"div",[["class","card"]],null,[[null,"touchstart"],[null,"touchmove"],[null,"touchend"]],function(n,t,l){var e=!0,i=n.component;return"touchstart"===t&&(e=!1!==i.touchstart(l,n.parent.context.$implicit,n.parent.context.index==i.state.clubs.length-1)&&e),"touchmove"===t&&(e=!1!==i.touchmove(l,n.parent.context.$implicit,n.parent.context.index==i.state.clubs.length-1)&&e),"touchend"===t&&(e=!1!==i.touchend(l,n.parent.context.$implicit,n.parent.context.index==i.state.clubs.length-1)&&e),e},null,null)),e["\u0275did"](1,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{"card-1":0,"card-2":1,"card-3":2,"card-4":3}),e["\u0275did"](3,278528,null,0,d.NgStyle,[e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngStyle:[0,"ngStyle"]},null),(n()(),e["\u0275eld"](4,0,null,null,22,"div",[["class","content"],["style","height: 100%"]],[[4,"opacity",null]],null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,7,"div",[["class","swiper-container swiper-container-feed"]],null,null,null,null,null)),e["\u0275did"](6,5128192,null,0,a.b,[e.PLATFORM_ID,e.NgZone,e.ElementRef,e.KeyValueDiffers,[2,a.a]],{config:[0,"config"]},null),(n()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](9,278528,null,0,d.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](10,0,null,null,0,"div",[["class","swiper-pagination"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,0,"div",[["class","swiper-button-prev"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,0,"div",[["class","swiper-button-next"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,7,"div",[["class","production"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,1,"h2",[["class","title"],["style","-webkit-box-orient: vertical;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](15,null,["",""])),(n()(),e["\u0275eld"](16,0,null,null,2,"div",[["class","categories"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](18,278528,null,0,d.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](19,0,null,null,1,"p",[["class","description"],["style","-webkit-box-orient: vertical;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](20,null,["",""])),(n()(),e["\u0275eld"](21,0,null,null,1,"span",[["class","showInfo"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.viewClub(n.parent.context.$implicit)&&e),e},null,null)),(n()(),e["\u0275eld"](22,0,null,null,0,"img",[["src","./assets/images/club/userInfo@3x.png"],["style","width: 100%"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](24,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](26,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,1,0,"card",n(t,2,0,t.parent.context.index==l.state.clubs.length-1,t.parent.context.index==l.state.clubs.length-2,t.parent.context.index==l.state.clubs.length-3,t.parent.context.index==l.state.clubs.length-4)),n(t,3,0,t.parent.context.$implicit.style),n(t,6,0,l.config),n(t,9,0,t.parent.context.$implicit.picture_ids),n(t,18,0,t.parent.context.$implicit.tag_ids),n(t,24,0,t.parent.context.index==l.state.clubs.length-1&&l.dislike),n(t,26,0,t.parent.context.index==l.state.clubs.length-1&&l.like)},function(n,t){var l=t.component;n(t,4,0,t.parent.context.index==l.state.clubs.length-1?1:t.parent.context.index==l.state.clubs.length-2?l.tagOpacity:0),n(t,15,0,t.parent.context.$implicit.name),n(t,20,0,t.parent.context.$implicit.description)})}function b(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](2,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](0,null,null,0))],function(n,t){var l=t.component;n(t,2,0,t.context.index==l.state.clubs.length-1||t.context.index==l.state.clubs.length-2||t.context.index==l.state.clubs.length-3||t.context.index==l.state.clubs.length-4)},null)}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,15,"div",[["class","card"],["style","opacity: 1"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,14,"div",[["class","seeAgainButton"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"img",[["src","./assets/images/club/no_more@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,11,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["That\u2019s all the on-campus organizations we have for now. If new clubs join, they would automatically appear here. "])),(n()(),e["\u0275eld"](6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["If you have any questions, please send us an email at"])),(n()(),e["\u0275eld"](9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["support@loopcaht.us"])),(n()(),e["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,2,"button",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.seeAgain()&&e),e},null,null)),(n()(),e["\u0275eld"](14,0,null,null,0,"img",[["src","./assets/images/club/redo@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Start Again"]))],null,null)}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","swiper"],["id","swiper"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,4,"div",[["class",""],["style","height: 100vh;"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](3,278528,null,0,d.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](5,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](6,0,null,null,4,"div",[["class","swiper-footer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.unLove()&&e),e},null,null)),(n()(),e["\u0275eld"](8,0,null,null,0,"img",[["src","./assets/images/club/tiaoguo@3x.png"],["style","width: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.love()&&e),e},null,null)),(n()(),e["\u0275eld"](10,0,null,null,0,"img",[["src","./assets/images/club/Favorites@3x.png"],["style","width: 100%"]],null,null,null,null,null))],function(n,t){var l=t.component;n(t,3,0,l.state.clubs),n(t,5,0,l.state.seeAgainButton&&0==l.state.clubs.length)},null)}var w=e["\u0275ccf"]("app-feed",u,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-feed",[],null,null,null,v,p)),e["\u0275did"](1,114688,null,0,u,[e.NgZone,i.a,o.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),C=l("ZYCi"),O=l("UVZt");l.d(t,"FeedModuleNgFactory",function(){return M});var M=e["\u0275cmf"](c,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,w]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[e.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),e["\u0275mpd"](1073742336,C.n,C.n,[[2,C.t],[2,C.k]]),e["\u0275mpd"](1073742336,a.c,a.c,[]),e["\u0275mpd"](1073742336,O.a,O.a,[]),e["\u0275mpd"](1073742336,c,c,[]),e["\u0275mpd"](1024,C.i,function(){return[[{path:"",component:u}]]},[]),e["\u0275mpd"](256,a.a,s,[])])})}}]);