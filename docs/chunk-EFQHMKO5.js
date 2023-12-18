import{a as W,c as Z,g as tt}from"./chunk-XDLNSYOD.js";import{b as U,c as $,d as G,e as A,f as z,g as q,h as H,j as P,k as R,l as X,m as Y}from"./chunk-63Y3PRUE.js";import{B as _,C as E,Ca as w,G as I,Ga as L,H as y,Ha as D,La as B,Ma as V,P as s,Q as v,Ra as T,Sa as J,Ta as K,Ua as Q,Wa as k,X as l,_ as c,da as n,ea as i,fa as d,ia as F,ka as N,la as f,oa as S,p as O,pa as a,qa as b,ra as m,ta as j,va as u,wa as g,x as C}from"./chunk-22BGJTN5.js";var it=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=_({type:t,selectors:[["app-starhips"]],decls:1,vars:0,template:function(r,h){r&1&&d(0,"router-outlet")},dependencies:[J]});let e=t;return e})();function lt(e,t){e&1&&d(0,"app-main-loader")}function mt(e,t){if(e&1){let o=F();n(0,"button",8),N("click",function(){let h=I(o).$implicit,x=f(2);return y(x.goToStarshipDetail(h.url))}),a(1),i()}if(e&2){let o=t.$implicit;s(1),m(" ",o.name," ")}}function ct(e,t){if(e&1){let o=F();n(0,"div",2)(1,"div",3)(2,"div",4),c(3,mt,2,1,"button",5),n(4,"div",6)(5,"button",7),N("click",function(){I(o);let r=f();return y(r.previousPage())}),a(6," Prev "),i(),n(7,"button",7),N("click",function(){I(o);let r=f();return y(r.nextPage())}),a(8," Next "),i()()()()()}if(e&2){let o=f();s(3),l("ngForOf",o.starships),s(2),l("disabled",!o.isPreviousPagePresent),s(2),l("disabled",!o.isNextPagePresent)}}var nt=(()=>{let t=class t{get showLoader(){return this._showLoader}get starships(){return this.starshipsResponse.results}get isNextPagePresent(){return!!this.starshipsResponse.next}get isPreviousPagePresent(){return!!this.starshipsResponse.previous}get totalResults(){return this.starshipsResponse.count}constructor(p,r,h){this.dataService=p,this.router=r,this.activatedRoute=h,this._showLoader=!1,this.starshipsResponse={count:0,next:"",previous:"",results:[]}}ngOnInit(){this.getStasrhips(this.dataService.rootEntrypoints.starships)}getStasrhips(p){this._showLoader=!0,this.dataService.getItems(p).pipe(O(()=>this._showLoader=!1)).subscribe(r=>this.starshipsResponse=r)}nextPage(){this.getStasrhips(this.starshipsResponse.next)}previousPage(){this.getStasrhips(this.starshipsResponse.previous)}getId(p){let r=p.split("/");return r.at(r.length-2)||""}goToStarshipDetail(p){let r=this.getId(p);r?this.router.navigate([r],{relativeTo:this.activatedRoute}):console.log("No detail for this vehicle")}};t.\u0275fac=function(r){return new(r||t)(v(P),v(K),v(T))},t.\u0275cmp=_({type:t,selectors:[["app-starhips-list"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["starhipsTemplate",""],[1,"row"],[1,"col-xl-4","offset-xl-4","col-lg-6","offset-lg-3","col-md-8","offset-md-2"],[1,"list-group","text-center"],["type","button","class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","mt-2"],["type","button",1,"btn","btn-outline-light","border-light-subtle",3,"disabled","click"],["type","button",1,"list-group-item","list-group-item-action",3,"click"]],template:function(r,h){if(r&1&&c(0,lt,1,0,"app-main-loader",0)(1,ct,9,3,"ng-template",null,1,w),r&2){let x=S(2);l("ngIf",h.showLoader)("ngIfElse",x)}},dependencies:[L,D,R]});let e=t;return e})();function dt(e,t){e&1&&d(0,"app-main-loader")}function ft(e,t){if(e&1&&(n(0,"div",2)(1,"dt",13),a(2,"Model"),i(),n(3,"dd",14),a(4),i(),n(5,"dt",13),a(6,"Starship class"),i(),n(7,"dd",14),a(8),i(),n(9,"dt",13),a(10,"Manufacturer"),i(),n(11,"dd",14),a(12),i(),n(13,"dt",13),a(14,"Cost in credits"),i(),n(15,"dd",14),a(16),u(17,"number"),i(),n(18,"dt",13),a(19,"Lengh"),i(),n(20,"dd",14),a(21),u(22,"number"),i(),n(23,"dt",13),a(24,"Crew"),i(),n(25,"dd",14),a(26),u(27,"number"),i(),n(28,"dt",13),a(29,"Passengers"),i(),n(30,"dd",14),a(31),u(32,"number"),i(),n(33,"dt",13),a(34,"Max atmosphere speed"),i(),n(35,"dd",14),a(36),u(37,"number"),i(),n(38,"dt",13),a(39,"MGLT"),i(),n(40,"dd",14),a(41),u(42,"number"),i(),n(43,"dt",13),a(44,"Cargo capacity"),i(),n(45,"dd",14),a(46),u(47,"number"),i(),n(48,"dt",13),a(49,"Consumables"),i(),n(50,"dd",14),a(51),i()()),e&2){let o=f(2);s(4),b(o.starship.model),s(4),m(" ",o.starship.starship_class," "),s(4),b(o.starship.manufacturer),s(4),m(" ",g(17,11,o.starship.cost_in_credits)," Galactic Credits "),s(5),m("",g(22,13,o.starship.length)," meters"),s(5),b(g(27,15,o.starship.crew)),s(5),m(" ",g(32,17,o.starship.passengers)," "),s(5),m(" ",g(37,19,o.starship.max_atmosphering_speed)," "),s(5),m(" ",g(42,21,o.starship.MGLT)," "),s(5),m(" ",g(47,23,o.starship.cargo_capacity)," kg "),s(5),m(" ",o.starship.consumables," ")}}function ht(e,t){if(e&1&&d(0,"app-film-preview",18),e&2){let o=t.$implicit;l("filmUrl",o)}}function ut(e,t){if(e&1&&(n(0,"div",2)(1,"div",15)(2,"p"),a(3,"List of films that this starship has appeared in"),i(),n(4,"div",16),c(5,ht,1,1,"app-film-preview",17),i()()()),e&2){let o=f(2);s(5),l("ngForOf",o.starship.films)}}function gt(e,t){if(e&1&&d(0,"app-people-preview",20),e&2){let o=t.$implicit;l("personUrl",o)}}function vt(e,t){if(e&1&&(n(0,"div",2)(1,"div",15)(2,"p"),a(3,"List of people that this starship has been piloted by"),i(),n(4,"div",16),c(5,gt,1,1,"app-people-preview",19),i()()()),e&2){let o=f(2);s(5),l("ngForOf",o.starship.pilots)}}var _t=()=>["../"];function xt(e,t){if(e&1&&(n(0,"div",2)(1,"div",3)(2,"a",4),d(3,"i",5),a(4," Starships"),i()()(),n(5,"div",2)(6,"div",3)(7,"h1",6),a(8),i(),n(9,"ul",7,8)(11,"li",9)(12,"button",10),a(13,"Details"),i(),c(14,ft,52,25,"ng-template",11),i(),n(15,"li",9)(16,"button",10),a(17,"Films"),i(),c(18,ut,6,1,"ng-template",11),i(),n(19,"li",9)(20,"button",10),a(21,"Pilots"),i(),c(22,vt,6,1,"ng-template",11),i()(),d(23,"div",12),i()()),e&2){let o=S(10),p=f();s(2),l("routerLink",j(6,_t)),s(6),b(p.starship.name),s(3),l("ngbNavItem",1),s(4),l("ngbNavItem",2),s(4),l("ngbNavItem",3),s(4),l("ngbNavOutlet",o)}}var rt=(()=>{let t=class t{constructor(p,r){this.activatedRoute=p,this.dataService=r,this.starshipId=this.activatedRoute.snapshot.params.id}ngOnInit(){this.getStarshipDetail()}getStarshipDetail(){this.dataService.getItem(`${this.dataService.rootEntrypoints.starships}${this.starshipId}`).subscribe(p=>this.starship=p)}};t.\u0275fac=function(r){return new(r||t)(v(T),v(P))},t.\u0275cmp=_({type:t,selectors:[["app-starship-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["starshipTemplate",""],[1,"row"],[1,"col-12"],[1,"link-secondary",3,"routerLink"],[1,"bi","bi-arrow-left"],[1,"text-center"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink","",1,"detail-nav-link"],["ngbNavContent",""],[1,"mt-4",3,"ngbNavOutlet"],[1,"col-sm-4"],[1,"col-sm-8"],[1,"col-4","m-auto","text-center"],[1,"list-group"],[3,"filmUrl",4,"ngFor","ngForOf"],[3,"filmUrl"],[3,"personUrl",4,"ngFor","ngForOf"],[3,"personUrl"]],template:function(r,h){if(r&1&&c(0,dt,1,0,"app-main-loader",0)(1,xt,24,7,"ng-template",null,1,w),r&2){let x=S(2);l("ngIf",!h.starship)("ngIfElse",x)}},dependencies:[L,D,Q,R,U,A,G,$,q,z,H,W,Z,B]});let e=t;return e})();var St=[{path:"",component:it,children:[{path:"",component:nt},{path:":id",component:rt}]}],at=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=E({type:t}),t.\u0275inj=C({imports:[k.forChild(St),k]});let e=t;return e})();var zt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=E({type:t}),t.\u0275inj=C({imports:[V,at,X,Y,tt]});let e=t;return e})();export{zt as StarshipsModule};