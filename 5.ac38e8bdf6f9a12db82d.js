(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{pI82:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("7/fN"),i=t("6uu6"),u=function(){function n(n,l,t,e){this._ngZone=n,this.activatedRoute=l,this.state=t,this.auth=e,this.userInfo=[],this.status=1}return n.prototype.ngOnInit=function(){var n=this;setTimeout(function(){loop.ready(function(l){n.getuser()})},300)},n.prototype.getuser=function(){var n=this,l=this;loop.getUserInfo({param:{appName:"TinderForClubs",appId:"9b3c8e34-40eb-4357-af16-5e3edc799a7f"},error:function(n){l.userInfo={err:n}},success:function(t){var e;if((e="string"==typeof t?JSON.parse(t):t)&&1==e.code){n.status=2,l.userInfo=e,l.state.loopUserInfo=e.data;var o=e.data.id,i=64-o.length;if(o&&o.length<64)for(var u=0;u<i;u++)o+="0";sessionStorage.setItem("tinderUserId",o),l.auth.userInfo=e.data;var a=o,r=l.state.loopUserInfo.name,c={loop_uid:a,loop_user_name:r};l.auth.sendGet("app/userinfo").subscribe(function(n){if(n&&n.hasOwnProperty("status")&&200==n.status){var t=n.body;t&&t.hasOwnProperty("code")&&2e3==t.code&&l.state.getTags(function(n){l.state.getAllClubs(function(n){}),l.state.getUnreadByViewListId(),l.state.getFavorites(function(n){})})}else l.auth.sendPost("app/register",c).subscribe(function(n){if(n&&n.hasOwnProperty("status")&&200==n.status){var t=n.body;t&&t.hasOwnProperty("code")&&2e3==t.code&&l.state.getTags(function(n){l.state.getAllClubs(function(n){l._ngZone.run(function(){})}),l.state.getUnreadByViewListId(),l.state.getFavorites(function(n){})})}l._ngZone.run(function(){})});l._ngZone.run(function(){})}),loop.getVersion(function(l){l&&(JSON.parse(l),"1"==l.code&&n.auth.sendPut("app/register",{new_loop_uid:a,loop_user_name:r,src_loop_uid:l.user_id}).subscribe(function(n){}))})}else n.status=3,l._ngZone.run(function(){})}})},n.prototype.reLogin=function(){this.getuser()},n.prototype.goBack=function(){},n.prototype.prepareRoute=function(n){return n&&n.activatedRouteData&&n.activatedRouteData.animation},n}(),a=t("S8NE"),r={animation:"FeedPage"},c={animation:"CataloguePage"},d={animation:"FavoritesPage"},s={observer:!0,direction:"horizontal",threshold:50,spaceBetween:5,slidesPerView:1,centeredSlides:!0},g=function(){},p=t("pMnS"),f=t("Ip0R"),b=function(){function n(n,l,t){this.state=n,this.sanitizer=l,this.auth=t,this.groupDisbanded=!1,this.loadingVideo=!1,this.config={a11y:!0,direction:"horizontal",slidesPerView:1,spaceBetween:0,keyboard:!0,mousewheel:!0,scrollbar:!1,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},loop:!0,allowTouchMove:!0}}return n.prototype.ngOnInit=function(){var n=this;this.club.video_link&&(this.loadingVideo=!0,this.club.safeVideoSrc=this.sanitizer.bypassSecurityTrustResourceUrl(this.club.video_link),setTimeout(function(){document.getElementById("videoIframe").onload=function(l){n.loadingVideo=!1}},0))},n.prototype.close=function(){this.state.clubToShow=null},n.prototype.love=function(){this.state.markAsRead(this.club.club_id),1==this.state.allClubsMap[this.club.club_id].favourite?this.state.deleteLike(this.club.club_id):this.state.loveClub(this.club.club_id);for(var n=0;n<this.state.clubs.length;n++)this.state.clubs[n].title==this.club.title&&(this.state.clubs.splice(n,1),this.state.checkSeeAgain())},n.prototype.joinGroup=function(){this.club.group_link?loop.openUrl(this.club.group_link):this.groupDisbanded=!0},n.prototype.openUrl=function(n){n&&loop.openUrl(n)},n}(),h=t("ZYjt"),m=e["\u0275crt"]({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;left:0;right:0;background:#fff;overflow:auto;z-index:2}.card[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]{width:100%;height:50%}.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.card[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{position:absolute;background:linear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.63) 100%);height:149px;bottom:0;width:100%;z-index:1}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:31px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:3px;color:#424242}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:rgba(0,0,0,.5);overflow:hidden}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:3px 8px;margin-right:8px;margin-top:4px;display:inline-block;background:rgba(0,0,0,.34);border-radius:10px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){color:#ffb257;background:#fff2e1}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){color:#23c271;background:#dcffe7}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){color:#0099d0;background:#d5f4ff}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){color:#f44349;background:rgba(253,195,197,.34)}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:16px;word-break:break-word;color:#9b9b9b;overflow:hidden;padding-top:12px;border-top:1px solid #ececec}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]{box-sizing:border-box;padding:15px 15px 96px;width:100%;overflow:auto}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]{margin:15px 0 6px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{margin:6px 0 15px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17px;position:relative;left:2px;top:1px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .website[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;position:relative;top:2px}.card[_ngcontent-%COMP%]   .production[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(102,102,102,1);font-size:16px;margin-left:9px}.swiper-footer[_ngcontent-%COMP%]{height:76px;text-align:center;margin:auto;position:fixed;width:100%;bottom:0;white-space:nowrap;background:linear-gradient(180deg,rgba(255,255,255,0) 0,rgba(255,255,255,.9) 60%,rgba(255,255,255,1) 90%);box-sizing:border-box}.swiper-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;box-sizing:border-box;background:#fff;box-shadow:0 2px 7px 0 rgba(0,0,0,.08);border-radius:23px;width:137px;height:42px;color:rgba(34,34,34,1);font-weight:700;font-size:14px;padding:0 13px;line-height:42px;text-align:left}.swiper-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{margin-right:20px}.swiper-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:4px;width:24px;position:relative;top:7px}.swiper-footer[_ngcontent-%COMP%]   span.isloved[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(123deg,rgba(255,156,156,1) 0,rgba(252,80,80,1) 100%);box-shadow:5px 5px 11px 0 rgba(253,92,92,.51)}.close[_ngcontent-%COMP%]{position:fixed;top:10px;left:15px;color:#fff;z-index:1;background:#fff;border-radius:50%;width:32px;height:32px;box-shadow:0 2px 7px 0 rgba(0,0,0,.08)}.close[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;position:absolute;top:50%;left:calc(50% - 1px);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.joinFailedContainer[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);z-index:2}.joinFailed[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;width:85%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;background:rgba(255,255,255,1);border-radius:20px;padding:30px 20px 0}.joinFailed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:68px;height:69px}.joinFailed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:rgba(34,34,34,1);margin-bottom:14px}.joinFailed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:rgba(102,102,102,1)}.joinFailed[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:44px;background:rgba(255,255,255,1);box-shadow:0 2px 7px 0 rgba(0,0,0,.08);border-radius:8px;border:0;font-size:15px;font-weight:700;color:rgba(0,122,255,1);width:100%;margin:35px 0 30px}.loading[_ngcontent-%COMP%]{width:100%;height:200px;line-height:200px;text-align:center;background:#ddd;border-radius:15px;position:absolute;top:0;left:0}.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;vertical-align:middle;-webkit-animation:1s linear infinite rotate;animation:1s linear infinite rotate}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]],data:{}});function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","imageContainer swiper-slide"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,function(n,l){n(l,1,0,l.component.auth.IMG_URL+"/static/clubphoto/"+l.context.$implicit)})}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){var t=l.component;n(l,1,0,t.club.tagMap?t.club.tagMap[l.context.$implicit].Tag:"")})}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","contact website"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/website@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"a",[["href","javascript:;"],["style","color: #2196F3;"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.openUrl(o.club.website)&&e),e},null,null)),(n()(),e["\u0275ted"](4,null,["",""]))],null,function(n,l){n(l,4,0,l.component.club.website)})}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","contact email"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/email@2x.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"span",[["style","margin-left: 11px;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["",""]))],null,function(n,l){n(l,3,0,l.component.club.email)})}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","loading"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/loading.png"]],null,null,null,null,null))],null,null)}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"div",[["style","margin-top: 20px; overflow: hidden;position: relative;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["height","200"],["id","videoIframe"],["name","videoIframe"],["style","border-radius: 16px"],["width","100%"]],[[8,"src",5]],null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](3,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.loadingVideo)},function(n,l){n(l,1,0,l.component.club.safeVideoSrc)})}function w(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[["style","cursor: pointer;"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.love()&&e),e},null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/Shape@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Favorite "]))],null,null)}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[["class","isloved"],["style","cursor: pointer;"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.love()&&e),e},null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/Shape-white@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Favorite "]))],null,null)}function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","joinFailedContainer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,7,"div",[["class","joinFailed"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/failed@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Join group failed!"])),(n()(),e["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Maybe the group does not exist or has been disbanded."])),(n()(),e["\u0275eld"](7,0,null,null,1,"button",[["class","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=0!=(n.component.groupDisbanded=!1)&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["OK"]))],null,null)}function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,31,"div",[["class","card"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,6,"div",[["class","swiper-container swiper-container-club"]],null,null,null,null,null)),e["\u0275did"](2,5128192,null,0,a.b,[e.PLATFORM_ID,e.NgZone,e.ElementRef,e.KeyValueDiffers,[2,a.a]],{config:[0,"config"]},null),(n()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","swiper-wrapper"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](5,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](6,0,null,null,0,"div",[["class","swiper-pagination"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,0,"div",[["class","background"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,13,"div",[["class","production"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](10,null,["",""])),(n()(),e["\u0275eld"](11,0,null,null,2,"div",[["class","categories"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](13,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](15,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](17,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](18,0,null,null,1,"p",[["class","description"],["style","-webkit-box-orient: vertical;"]],null,null,null,null,null)),(n()(),e["\u0275ted"](19,null,["",""])),(n()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](21,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](22,0,null,null,7,"div",[["class","swiper-footer"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](24,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](26,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](27,0,null,null,2,"span",[["style","cursor: pointer;"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.joinGroup()&&e),e},null,null)),(n()(),e["\u0275eld"](28,0,null,null,0,"img",[["alt",""],["src","./assets/images/club/joinGroup@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Join Group "])),(n()(),e["\u0275eld"](30,0,null,null,1,"span",[["class","close"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e},null,null)),(n()(),e["\u0275eld"](31,0,null,null,0,"img",[["src","./assets/images/return-icon.png"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](33,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.config),n(l,5,0,t.club.picture_ids),n(l,13,0,t.club.tag_ids),n(l,15,0,t.club.website),n(l,17,0,t.club.email),n(l,21,0,t.club.safeVideoSrc),n(l,24,0,!t.state.allClubsMap[t.club.club_id].favourite),n(l,26,0,t.state.allClubsMap[t.club.club_id].favourite),n(l,33,0,t.groupDisbanded)},function(n,l){var t=l.component;n(l,10,0,t.club.name),n(l,19,0,t.club.description)})}var I=t("ZYCi"),R=e["\u0275crt"]({encapsulation:0,styles:[[".goBack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px}.goBack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:1px;display:inline-block;height:10px;background:#ccc;margin:0 13px;position:relative;bottom:2px}.header[_ngcontent-%COMP%]{height:40px;line-height:40px;padding:0 4%}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:rgba(16,16,16,1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;float:left}.goBack[_ngcontent-%COMP%]{width:84px;height:30px;background:rgba(241,241,241,1);border-radius:16px;text-align:center;line-height:35px;margin-top:5px;float:right}.footer[_ngcontent-%COMP%]{position:fixed;width:100%;padding:20px 0 30px;bottom:0;background:linear-gradient(180deg,rgba(255,255,255,0) 0,rgba(255,255,255,.5) 15%,rgba(255,255,255,.6) 20%,rgba(255,255,255,.7) 25%,rgba(255,255,255,.8) 30%,rgba(255,255,255,.85) 40%,rgba(255,255,255,.9) 50%,rgba(255,255,255,1) 80%)}.footer[_ngcontent-%COMP%]   .buttonContainer[_ngcontent-%COMP%]{width:calc(100%/3);float:left;text-align:center}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:0;display:inline-block;text-decoration:none;background-color:rgba(0,0,0,0);min-width:66px;font-size:16px;font-weight:600;text-align:center;color:#666;padding:9px 18px}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{opacity:.6}.footer[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff;background-color:#007aff;box-shadow:0 3px 3px 0 rgba(0,0,0,.15);border-radius:43px}.footer[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:active{opacity:1}.reLogin[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.reLogin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:89px;height:89px;position:absolute;top:30%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.reLogin[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;color:#666;font-size:18px;font-weight:400;position:relative;top:calc(30% + 104px);line-height:20px;text-align:center;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.seeAgainButton[_ngcontent-%COMP%]{position:relative;top:50%;-webkit-transform:translateY(-65%);transform:translateY(-65%);display:inline-block;text-align:center}.seeAgainButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:142px;height:142px}.seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:18px;color:rgba(34,34,34,1);display:inline-block;font-size:16px;font-weight:500;padding:0 20px;text-align:center;line-height:20px}.seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:25px;color:rgba(0,122,255,1);font-weight:600;height:48px;line-height:48px;border:0;background:rgba(255,255,255,1);box-shadow:0 2px 7px 0 rgba(0,0,0,.08);border-radius:25px;position:relative;padding:0 26px 0 54px;text-align:left}.seeAgainButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:auto;position:absolute;top:50%;left:25px;-webkit-transform:translateY(calc(-50% - 2px));transform:translateY(calc(-50% - 2px))}"]],data:{}});function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-club-info",[],null,null,null,y,m)),e["\u0275did"](1,114688,null,0,b,[o.a,h.c,i.a],{club:[0,"club"]},null)],function(n,l){n(l,1,0,l.component.state.clubToShow)},null)}function F(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,27,"div",[["style","height: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"div",[["style","height: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](3,212992,null,0,I.o,[I.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null),(n()(),e["\u0275eld"](4,0,null,null,21,"div",[["class","footer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,6,"div",[["class","buttonContainer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,5,"a",[["class","menu-button"],["routerLink","/main/feed"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](7,671744,[[2,4]],0,I.m,[I.k,I.a,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275did"](8,1720320,null,2,I.l,[I.k,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["Feed"])),(n()(),e["\u0275eld"](12,0,null,null,6,"div",[["class","buttonContainer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,5,"a",[["class","menu-button"],["routerLink","/main/catalogue"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,14).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](14,671744,[[4,4]],0,I.m,[I.k,I.a,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275did"](15,1720320,null,2,I.l,[I.k,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["Catalogue"])),(n()(),e["\u0275eld"](19,0,null,null,6,"div",[["class","buttonContainer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](20,0,null,null,5,"a",[["class","menu-button"],["routerLink","/main/favorites"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,21).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](21,671744,[[6,4]],0,I.m,[I.k,I.a,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275did"](22,1720320,null,2,I.l,[I.k,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,5,{links:1}),e["\u0275qud"](603979776,6,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["Favorites"])),(n()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](27,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0),n(l,7,0,"/main/feed"),n(l,8,0,"active"),n(l,14,0,"/main/catalogue"),n(l,15,0,"active"),n(l,21,0,"/main/favorites"),n(l,22,0,"active"),n(l,27,0,t.state.clubToShow)},function(n,l){n(l,6,0,e["\u0275nov"](l,7).target,e["\u0275nov"](l,7).href),n(l,13,0,e["\u0275nov"](l,14).target,e["\u0275nov"](l,14).href),n(l,20,0,e["\u0275nov"](l,21).target,e["\u0275nov"](l,21).href)})}function z(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"div",[["style","height: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,7,"div",[["class","seeAgainButton"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"img",[["src","./assets/images/club/authorization@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Tinder for Clubs does not have the required authorization from Loop."])),(n()(),e["\u0275eld"](5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,2,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reLogin()&&e),e},null,null)),(n()(),e["\u0275eld"](7,0,null,null,0,"img",[["src","./assets/images/club/redo@3x.png"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Retry"]))],null,null)}function T(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](1,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](3,16384,null,0,f.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,2==t.status),n(l,3,0,3==t.status)},null)}var V=e["\u0275ccf"]("app-main",u,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-main",[],null,null,null,T,R)),e["\u0275did"](1,114688,null,0,u,[e.NgZone,I.a,o.a,i.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),N=t("UVZt");t.d(l,"MainModuleNgFactory",function(){return A});var A=e["\u0275cmf"](g,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,V]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[e.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,I.n,I.n,[[2,I.t],[2,I.k]]),e["\u0275mpd"](1073742336,a.c,a.c,[]),e["\u0275mpd"](1073742336,g,g,[]),e["\u0275mpd"](1024,I.i,function(){return[[{path:"",component:u,children:[{path:"",redirectTo:"feed",pathMatch:"full"},{path:"feed",loadChildren:"./feed/feed.module#FeedModule",data:r},{path:"catalogue",loadChildren:"./catalogue/catalogue.module#CatalogueModule",data:c},{path:"favorites",loadChildren:"./favorites/favorites.module#FavoritesModule",data:d},{path:"**",redirectTo:"feed",pathMatch:"full"}]}]]},[]),e["\u0275mpd"](256,a.a,s,[])])})}}]);