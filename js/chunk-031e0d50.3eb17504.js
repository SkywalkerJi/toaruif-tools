(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-031e0d50"],{"13b3":function(t,e,n){},"1bfb":function(t,e,n){},"210b":function(t,e,n){},c3ef:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"help"},[n("v-card",[n("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"blue"}}),t._l(t.items,(function(e){return n("v-tab",{key:e},[t._v(" "+t._s(e)+" ")])}))],2),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(t){return n("v-tab-item",{key:t},[n("strengthen")],1)})),1)],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",t._l(5,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[t._v(" 矢量操作 ")]),n("v-expansion-panel-content",[t._v(" 受到所属侧包含‘科学侧’的攻击的伤害的情况下，将伤害无效化再进行反击。 ")])],1)})),1)},o=[],r={name:"strengthen",data:function(){return{}}},l=r,c=n("2877"),h=n("6544"),u=n.n(h),d=n("5530"),p=n("4e82"),v=n("3206"),f=n("80d2"),b=n("58df"),m=Object(b["a"])(Object(p["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(v["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(d["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(f["s"])(this))}}),g=n("0789"),x=n("9d65"),w=n("a9ad"),y=Object(b["a"])(x["a"],w["a"],Object(v["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),C=y.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(t,e){var n=this;t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((function(){return n.isActive=t}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(g["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(f["s"])(e))])]})))}}),$=n("9d26"),B=n("5607"),O=Object(b["a"])(w["a"],Object(v["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),I=O.extend().extend({name:"v-expansion-panel-header",directives:{ripple:B["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(f["s"])(this,"actions")||[this.$createElement($["a"],this.expandIcon)];return this.$createElement(g["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(d["a"])(Object(d["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(f["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),T=(n("0481"),n("210b"),n("604c")),j=n("d9bd"),A=T["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},T["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(j["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(j["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var n=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(i)}}}),S=Object(c["a"])(l,a,o,!1,null,null,null),k=S.exports;u()(S,{VExpansionPanel:m,VExpansionPanelContent:C,VExpansionPanelHeader:I,VExpansionPanels:A});var P={name:"Help",data:function(){return{tab:null,items:["强化状态","弱体化状态","技能·必杀技的效果","关于强化状态与弱体化状态的攻击方向"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in."}},components:{strengthen:k},methods:{}},R=P,V=n("b0af"),_=(n("ac1f"),n("5319"),n("1c87")),E=n("7560"),D=Object(b["a"])(_["a"],Object(p["a"])("tabsBar"),E["a"]),H=D.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({"v-tab":!0},_["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,n=this.generateRouteLink(),i=n.tag,s=n.data;return s.attrs=Object(d["a"])(Object(d["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),s.on=Object(d["a"])(Object(d["a"])({},s.on),{},{keydown:function(t){t.keyCode===f["x"].enter&&e.click(t),e.$emit("keydown",t)}}),t(i,s,this.$slots.default)}}),z=n("c3f0"),G=Object(b["a"])(x["a"],Object(p["a"])("windowGroup","v-window-item","v-window")),N=G.extend().extend().extend({name:"v-window-item",directives:{Touch:z["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(f["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(f["h"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),W=N.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=N.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),L=(n("a9e3"),n("b0c0"),n("1bfb"),n("b85c")),M=n("7efd"),q=n("d10f"),J=Object(b["a"])(M["a"],q["a"],E["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},M["a"].options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=M["a"].options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var n,i=this.items,s=t.path,a=e.path,o=!1,r=!1,l=Object(L["a"])(i);try{for(l.s();!(n=l.n()).done;){var c=n.value;if(c.to===a?r=!0:c.to===s&&(o=!0),o&&r)break}}catch(h){l.e(h)}finally{l.f()}!o&&r&&(this.internalValue=void 0)}}},render:function(t){var e=M["a"].options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),F=(n("99af"),n("7db0"),n("c740"),n("13b3"),n("afdd")),K=T["a"].extend({name:"v-window",directives:{Touch:z["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(d["a"])(Object(d["a"])({},T["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,n=e?"-reverse":"";return"v-window-".concat(t).concat(n,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i,s,a,o=this,r={click:function(t){t.stopPropagation(),o.changedByDelimiters=!0,n()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},c=null!=(i=null==(s=(a=this.$scopedSlots)[t])?void 0:s.call(a,{on:r,attrs:l}))?i:[this.$createElement(F["a"],{props:{icon:!0},attrs:l,on:r},[this.$createElement($["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},c)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){var s=this.genIcon("next",i,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,n=this.items[e];return n.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,n=this.items[e];return n.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,i=n-1;return n<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}}),Q=K.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},K.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||T["a"].options.methods.getValue.call(this,t,e)}}}),U=Object(b["a"])(w["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),X=n("a452"),Y=n("dc22"),Z=Object(b["a"])(w["a"],X["a"],E["a"]),tt=Z.extend().extend({name:"v-tabs",directives:{Resize:Y["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(d["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(f["h"])(this.slider.height),left:this.isReversed?void 0:Object(f["h"])(this.slider.left),right:this.isReversed?Object(f["h"])(this.slider.right):void 0,top:this.vertical?Object(f["h"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(f["h"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var n=e.$el;t.slider={height:t.vertical?n.scrollHeight:Number(t.sliderSize),left:t.vertical?0:n.offsetLeft,right:t.vertical?0:n.offsetLeft+n.offsetWidth,top:n.offsetTop,width:t.vertical?Number(t.sliderSize):n.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var n=this,i={style:{height:Object(f["h"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){n.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,i),this.setBackgroundColor(this.backgroundColor,i),this.$createElement(J,i,[this.genSlider(e),t])},genItems:function(t,e){var n=this;return t||(e.length?this.$createElement(Q,{props:{value:this.internalValue},on:{change:function(t){n.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(U,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,n=[],i=[],s=this.$slots.default||[],a=s.length,o=0;o<a;o++){var r=s[o];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":e=r;break;case"v-tabs-items":t=r;break;case"v-tab-item":n.push(r);break;default:i.push(r)}else i.push(r)}return{tab:i,slider:e,items:t,item:n}}},render:function(t){var e=this.parseNodes(),n=e.tab,i=e.slider,s=e.items,a=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(n,i),this.genItems(s,a)])}}),et=Object(c["a"])(R,i,s,!1,null,null,null);e["default"]=et.exports;u()(et,{VCard:V["a"],VTab:H,VTabItem:W,VTabs:tt,VTabsItems:Q,VTabsSlider:U})}}]);
//# sourceMappingURL=chunk-031e0d50.3eb17504.js.map