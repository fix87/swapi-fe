import{a as Q,c as Z,g as ee}from"./chunk-XDLNSYOD.js";import{b as $,c as z,d as A,e as G,f as W,g as q,h as H,j as _,k as F,l as X,m as Y}from"./chunk-63Y3PRUE.js";import{B as v,C as S,Ca as N,G as E,Ga as R,H as w,Ha as L,La as B,Ma as U,P as s,Q as d,Ra as D,Sa as J,Ta as T,Ua as K,Wa as M,X as p,_ as u,da as a,ea as n,fa as f,ia as O,ka as y,la as g,oa as h,p as I,pa as l,qa as j,ra as m,ta as V,va as P,wa as b,x as C}from"./chunk-22BGJTN5.js";var ne=(()=>{let e=class e{get showLoader(){return this._showLoader}get planets(){return this.planetsResponse.results}get isNextPagePresent(){return!!this.planetsResponse.next}get isPreviousPagePresent(){return!!this.planetsResponse.previous}get totalResults(){return this.planetsResponse.count}constructor(o,i){this.dataService=o,this.router=i,this._showLoader=!1,this.planetsResponse={count:0,next:"",previous:"",results:[]}}ngOnInit(){this.getPlanets(this.dataService.rootEntrypoints.planets)}getPlanets(o){this._showLoader=!0,this.dataService.getItems(o).pipe(I(()=>this._showLoader=!1)).subscribe(i=>this.planetsResponse=i)}nextPage(){this.getPlanets(this.planetsResponse.next)}previousPage(){this.getPlanets(this.planetsResponse.previous)}getId(o){let i=o.split("/");return i.at(i.length-2)||""}goToPlanetDetail(o){let i=this.getId(o);i?this.router.navigate([i]):console.log("No detail for this planet")}};e.\u0275fac=function(i){return new(i||e)(d(_),d(T))},e.\u0275cmp=v({type:e,selectors:[["app-planets"]],decls:1,vars:0,template:function(i,c){i&1&&f(0,"router-outlet")},dependencies:[J]});let t=e;return t})();function pe(t,e){t&1&&f(0,"app-main-loader")}function me(t,e){if(t&1){let r=O();a(0,"button",8),y("click",function(){let c=E(r).$implicit,x=g(2);return w(x.goToPlanetDetail(c.url))}),l(1),n()}if(t&2){let r=e.$implicit;s(1),m(" ",r.name," ")}}function ce(t,e){if(t&1){let r=O();a(0,"div",2)(1,"div",3)(2,"div",4),u(3,me,2,1,"button",5),a(4,"div",6)(5,"button",7),y("click",function(){E(r);let i=g();return w(i.previousPage())}),l(6," Prev "),n(),a(7,"button",7),y("click",function(){E(r);let i=g();return w(i.nextPage())}),l(8," Next "),n()()()()()}if(t&2){let r=g();s(3),p("ngForOf",r.planets),s(2),p("disabled",!r.isPreviousPagePresent),s(2),p("disabled",!r.isNextPagePresent)}}var oe=(()=>{let e=class e{get showLoader(){return this._showLoader}get planets(){return this.planetsResponse.results}get isNextPagePresent(){return!!this.planetsResponse.next}get isPreviousPagePresent(){return!!this.planetsResponse.previous}get totalResults(){return this.planetsResponse.count}constructor(o,i,c){this.dataService=o,this.router=i,this.activatedRoute=c,this._showLoader=!1,this.planetsResponse={count:0,next:"",previous:"",results:[]}}ngOnInit(){this.getPlanets(this.dataService.rootEntrypoints.planets)}getPlanets(o){this._showLoader=!0,this.dataService.getItems(o).pipe(I(()=>this._showLoader=!1)).subscribe(i=>this.planetsResponse=i)}nextPage(){this.getPlanets(this.planetsResponse.next)}previousPage(){this.getPlanets(this.planetsResponse.previous)}getId(o){let i=o.split("/");return i.at(i.length-2)||""}goToPlanetDetail(o){let i=this.getId(o);i?this.router.navigate([i],{relativeTo:this.activatedRoute}):console.log("No detail for this planet")}};e.\u0275fac=function(i){return new(i||e)(d(_),d(T),d(D))},e.\u0275cmp=v({type:e,selectors:[["app-planets-list"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["planetTempalte",""],[1,"row"],[1,"col-xl-4","offset-xl-4","col-lg-6","offset-lg-3","col-md-8","offset-md-2"],[1,"list-group","text-center"],["type","button","class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","mt-2"],["type","button",1,"btn","btn-outline-light","border-light-subtle",3,"disabled","click"],["type","button",1,"list-group-item","list-group-item-action",3,"click"]],template:function(i,c){if(i&1&&u(0,pe,1,0,"app-main-loader",0)(1,ce,9,3,"ng-template",null,1,N),i&2){let x=h(2);p("ngIf",c.showLoader)("ngIfElse",x)}},dependencies:[R,L,F]});let t=e;return t})();function de(t,e){t&1&&f(0,"app-main-loader")}function ue(t,e){if(t&1&&(a(0,"div",2)(1,"dt",13),l(2,"Diameter"),n(),a(3,"dd",14),l(4),P(5,"number"),n(),a(6,"dt",13),l(7,"Population"),n(),a(8,"dd",14),l(9),P(10,"number"),n(),a(11,"dt",13),l(12,"Climate"),n(),a(13,"dd",14),l(14),n(),a(15,"dt",13),l(16,"Terrain"),n(),a(17,"dd",14),l(18),n(),a(19,"dt",13),l(20,"Surface Water"),n(),a(21,"dd",14),l(22),n(),a(23,"dt",13),l(24,"Graity"),n(),a(25,"dd",14),l(26),n(),a(27,"dt",13),l(28,"Rotation period"),n(),a(29,"dd",14),l(30),P(31,"number"),n(),a(32,"dt",13),l(33,"Orbital period"),n(),a(34,"dd",14),l(35),P(36,"number"),n()()),t&2){let r=g(2);s(4),m("",b(5,8,r.planet.diameter)," km"),s(5),m(" ",b(10,10,r.planet.population)," "),s(5),m(" ",r.planet.climate," "),s(4),m(" ",r.planet.terrain," "),s(4),m("",r.planet.surface_water,"%"),s(4),m("",r.planet.gravity," G"),s(4),m(" ",b(31,12,r.planet.rotation_period)," hours "),s(5),m(" ",b(36,14,r.planet.orbital_period)," days ")}}function fe(t,e){if(t&1&&f(0,"app-film-preview",18),t&2){let r=e.$implicit;p("filmUrl",r)}}function ge(t,e){if(t&1&&(a(0,"div",2)(1,"div",15)(2,"p"),l(3,"List of films that this planet has appeared in"),n(),a(4,"div",16),u(5,fe,1,1,"app-film-preview",17),n()()()),t&2){let r=g(2);s(5),p("ngForOf",r.planet.films)}}function ve(t,e){if(t&1&&f(0,"app-people-preview",20),t&2){let r=e.$implicit;p("personUrl",r)}}function _e(t,e){if(t&1&&(a(0,"div",2)(1,"div",15)(2,"p"),l(3,"List of residents that live on this planet"),n(),a(4,"div",16),u(5,ve,1,1,"app-people-preview",19),n()()()),t&2){let r=g(2);s(5),p("ngForOf",r.planet.residents)}}var xe=()=>["../"];function he(t,e){if(t&1&&(a(0,"div",2)(1,"div",3)(2,"a",4),f(3,"i",5),l(4," Planets"),n()()(),a(5,"div",2)(6,"div",3)(7,"h1",6),l(8),n(),a(9,"ul",7,8)(11,"li",9)(12,"button",10),l(13,"Details"),n(),u(14,ue,37,16,"ng-template",11),n(),a(15,"li",9)(16,"button",10),l(17,"Films"),n(),u(18,ge,6,1,"ng-template",11),n(),a(19,"li",9)(20,"button",10),l(21,"Residents"),n(),u(22,_e,6,1,"ng-template",11),n()(),f(23,"div",12),n()()),t&2){let r=h(10),o=g();s(2),p("routerLink",V(6,xe)),s(6),j(o.planet.name),s(3),p("ngbNavItem",1),s(4),p("ngbNavItem",2),s(4),p("ngbNavItem",3),s(4),p("ngbNavOutlet",r)}}var ae=(()=>{let e=class e{constructor(o,i){this.activatedRoute=o,this.dataService=i,this.planetId=this.activatedRoute.snapshot.params.id}ngOnInit(){this.getPlanetDetail()}getPlanetDetail(){this.dataService.getItem(`${this.dataService.rootEntrypoints.planets}${this.planetId}`).subscribe(o=>this.planet=o)}};e.\u0275fac=function(i){return new(i||e)(d(D),d(_))},e.\u0275cmp=v({type:e,selectors:[["app-planet-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["planetTemplate",""],[1,"row"],[1,"col-12"],[1,"link-secondary",3,"routerLink"],[1,"bi","bi-arrow-left"],[1,"text-center"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink","",1,"detail-nav-link"],["ngbNavContent",""],[1,"mt-4",3,"ngbNavOutlet"],[1,"col-sm-4"],[1,"col-sm-8"],[1,"col-4","m-auto","text-center"],[1,"list-group"],[3,"filmUrl",4,"ngFor","ngForOf"],[3,"filmUrl"],[3,"personUrl",4,"ngFor","ngForOf"],[3,"personUrl"]],template:function(i,c){if(i&1&&u(0,de,1,0,"app-main-loader",0)(1,he,24,7,"ng-template",null,1,N),i&2){let x=h(2);p("ngIf",!c.planet)("ngIfElse",x)}},dependencies:[R,L,K,F,$,G,A,z,q,W,H,Q,Z,B]});let t=e;return t})();var Pe=[{path:"",component:ne,children:[{path:"",component:oe},{path:":id",component:ae}]}],re=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({imports:[M.forChild(Pe),M]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=S({type:e}),e.\u0275inj=C({imports:[U,re,X,Y,ee]});let t=e;return t})();export{We as PlanetsModule};
