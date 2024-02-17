import './polyfills.server.mjs';
import{$ as we,A as ee,B as s,C as a,D as T,E as ve,F as _e,G as m,H as Ce,I as te,J as u,K as I,L as Ve,M as G,T as be,U as ie,W as De,X as Me,Y as Ae,Z as Ee,_ as Fe,a as ue,b as de,c as ce,ca as Ie,d as P,e as k,f as X,g as f,ga as Se,h as _,i as he,j as F,ja as ne,k as j,l as p,m as y,n as fe,o as pe,p as me,q as ge,r as K,s as J,t as h,u as l,v as ye,w,x as C,y as Q,z as V}from"./chunk-HWE3YBWK.mjs";import{a as v,b}from"./chunk-VVCT4QZE.mjs";var lt=[],Oe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[ne.forRoot(lt),ne]});let t=e;return t})();var M=(()=>{let e=class e{constructor(i){this.http=i}getBatches(){return this.http.get("http://localhost:8500/getBatches")}write(i){let{name:r,duration:o,fees:d}=i;return alert("Write Succesfully.."),this.http.get(`http://localhost:8500/writedata?name=${r}&fees=${d}&duration=${o}`)}delete(i){return this.http.get(`http://localhost:8500/deletedata?data=${i}`)}};e.\u0275fac=function(r){return new(r||e)(he(Ae))},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Re=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(l(J),l(K))},e.\u0275dir=y({type:e});let t=e;return t})(),ut=(()=>{let e=class e extends Re{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ge(e)))(o||e)}})(),e.\u0275dir=y({type:e,features:[C]});let t=e;return t})(),Ue=new _("NgValueAccessor");var dt={provide:Ue,useExisting:k(()=>$),multi:!0};function ct(){let t=ie()?ie().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ht=new _("CompositionEventMode"),$=(()=>{let e=class e extends Re{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ct())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(l(J),l(K),l(ht,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&m("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[G([dt]),C]});let t=e;return t})();var He=new _("NgValidators"),Le=new _("NgAsyncValidators");function We(t){return t!=null}function $e(t){return _e(t)?ue(t):t}function qe(t){let e={};return t.forEach(n=>{e=n!=null?v(v({},e),n):e}),Object.keys(e).length===0?null:e}function ze(t,e){return e.map(n=>n(t))}function ft(t){return!t.validate}function Ze(t){return t.map(e=>ft(e)?e:n=>e.validate(n))}function pt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){return qe(ze(n,e))}}function oe(t){return t!=null?pt(Ze(t)):null}function mt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){let i=ze(n,e).map($e);return ce(i).pipe(de(qe))}}function se(t){return t!=null?mt(Ze(t)):null}function xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function gt(t){return t._rawValidators}function yt(t){return t._rawAsyncValidators}function re(t){return t?Array.isArray(t)?t:[t]:[]}function R(t,e){return Array.isArray(t)?t.includes(e):t===e}function Pe(t,e){let n=re(e);return re(t).forEach(r=>{R(n,r)||n.push(r)}),n}function ke(t,e){return re(e).filter(n=>!R(t,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},E=class extends U{get formDirective(){return null}get path(){return null}},x=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ci=b(v({},vt),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{let e=class e extends H{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(l(x,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[C]});let t=e;return t})(),Xe=(()=>{let e=class e extends H{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(l(E,10))},e.\u0275dir=y({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[C]});let t=e;return t})();var S="VALID",B="INVALID",A="PENDING",O="DISABLED";function Ke(t){return(q(t)?t.validators:t)||null}function _t(t){return Array.isArray(t)?oe(t):t||null}function Je(t,e){return(q(e)?e.asyncValidators:t)||null}function Ct(t){return Array.isArray(t)?se(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Vt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[n])throw new P(1001,"")}function bt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new P(1002,"")})}var L=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===B}get pending(){return this.status==A}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(i=>{i.disable(b(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(b(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(v({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let n=$e(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(B)?B:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=_t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ct(this._rawAsyncValidators)}},W=class extends L{constructor(e,n,i){super(Ke(n),Je(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){bt(this,!0,e),Object.keys(e).forEach(i=>{Vt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var z=new _("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Dt(t,e){return[...e.path,t]}function Qe(t,e,n=Z){et(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),At(t,e),Ft(t,e),Et(t,e),Mt(t,e)}function je(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Mt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function et(t,e){let n=gt(t);e.validator!==null?t.setValidators(xe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=yt(t);e.asyncValidator!==null?t.setAsyncValidators(xe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();je(e._rawValidators,r),je(e._rawAsyncValidators,r)}function At(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&tt(t,e)})}function Et(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&tt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function tt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ft(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function wt(t,e){t==null,et(t,e)}function It(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function St(t){return Object.getPrototypeOf(t.constructor)===ut}function Ot(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Nt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===$?n=o:St(o)?i=o:r=o}),r||i||n||null}var xt={provide:E,useExisting:k(()=>ae)},N=Promise.resolve(),ae=(()=>{let e=class e extends E{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new w,this.form=new W({},oe(i),se(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){N.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),Qe(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){N.then(()=>{let r=this._findContainer(i.path),o=new W({});wt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){N.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Ot(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(l(He,10),l(Le,10),l(z,8))},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&m("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{options:[F.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[G([xt]),C]});let t=e;return t})();function Te(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ge(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Pt=class extends L{constructor(e=null,n,i){super(Ke(n),Je(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Te(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Te(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var kt={provide:x,useExisting:k(()=>le)},Be=Promise.resolve(),le=(()=>{let e=class e extends x{constructor(i,r,o,d,c,g){super(),this._changeDetectorRef=c,this.callSetDisabledState=g,this.control=new Pt,this._registered=!1,this.name="",this.update=new w,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Nt(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),It(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Be.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&be(r);Be.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Dt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(l(E,9),l(He,10),l(Le,10),l(Ue,10),l(ye,8),l(z,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[F.None,"disabled","isDisabled"],model:[F.None,"ngModel","model"],options:[F.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[G([kt]),C,fe]});let t=e;return t})(),it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=y({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var jt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({});let t=e;return t})();var Tt=new _("NgModelWithFormControlWarning");var nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[jt]});let t=e;return t})();var rt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:z,useValue:i.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[nt]});let t=e;return t})(),ot=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Tt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:z,useValue:i.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[nt]});let t=e;return t})();var st=(()=>{let e=class e{constructor(i){this.marservice=i,this.name="",this.duration="",this.fees=""}onSubmit(){this.marservice.write({name:this.name,fees:this.fees,duration:this.duration}).subscribe(i=>{console.log("Response from server:",i)})}deletedata(i){this.marservice.delete(i).subscribe(r=>{console.log("Response from server:",r)})}};e.\u0275fac=function(r){return new(r||e)(l(M))},e.\u0275cmp=j({type:e,selectors:[["app-write"]],decls:30,vars:4,consts:[[3,"ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name",1,"form-control",3,"ngModel","ngModelChange"],["for","fees",1,"form-label"],["type","text","id","fees","name","fees",1,"form-control",3,"ngModel","ngModelChange"],["for","duration",1,"form-label"],["type","text","id","duration","name","duration",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"],[1,"de"],["type","text","name","del","id","del1"],["del",""],[3,"click"]],template:function(r,o){if(r&1){let d=ve();s(0,"h1"),u(1,"Form : "),a(),s(2,"form",0),m("ngSubmit",function(){return o.onSubmit()}),s(3,"div",1)(4,"label",2),u(5,"Name"),a(),s(6,"input",3),m("ngModelChange",function(g){return o.name=g}),a()(),s(7,"div",1)(8,"label",4),u(9,"Fees"),a(),s(10,"input",5),m("ngModelChange",function(g){return o.fees=g}),a()(),s(11,"div",1)(12,"label",6),u(13,"Duration"),a(),s(14,"input",7),m("ngModelChange",function(g){return o.duration=g}),a()(),s(15,"button",8),u(16,"Submit"),a()(),s(17,"h1"),u(18,"Delete Activity"),a(),s(19,"div",9)(20,"label"),u(21,"You enter the id whose entry automatically deleted :"),a(),T(22,"br")(23,"input",10,11)(25,"br"),s(26,"button",12),m("click",function(){pe(d);let g=te(24);return me(o.deletedata(g.value))}),u(27,"Delete"),a(),s(28,"h1"),u(29),a()()}if(r&2){let d=te(24);h(6),V("ngModel",o.name),h(4),V("ngModel",o.fees),h(4),V("ngModel",o.duration),h(15),Ve("",d.value," entry gets deleted")}},dependencies:[it,$,Ye,Xe,le,ae],styles:["h1[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}form[_ngcontent-%COMP%]{max-width:400px;margin-bottom:2rem}.mb-3[_ngcontent-%COMP%]{margin-bottom:1.5rem}.form-label[_ngcontent-%COMP%]{font-weight:700}.form-control[_ngcontent-%COMP%]{width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#007bff;border-color:#007bff;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;cursor:pointer}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3;border-color:#0056b3}.de[_ngcontent-%COMP%]{margin-top:20px}.de[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.de[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:.375rem .75rem;font-size:1rem;line-height:1.5;border:1px solid #ced4da;border-radius:.25rem;margin-bottom:10px}.de[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;cursor:pointer;background-color:#007bff;border:1px solid #007bff;color:#fff}.de[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3;border-color:#0056b3}.de[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}"]});let t=e;return t})();function Rt(t,e){if(t&1&&(s(0,"tr")(1,"td"),u(2),a(),s(3,"td"),u(4),a(),s(5,"td"),u(6),a(),s(7,"td"),u(8),a()()),t&2){let n=e.$implicit;h(2),I(n._id||n.id),h(2),I(n.Name||n.name),h(2),I(n.Fees||n.fees),h(2),I(n.Duration||n.duration)}}function Ut(t,e){if(t&1&&(s(0,"div")(1,"table")(2,"thead")(3,"tr")(4,"th"),u(5,"ID"),a(),s(6,"th"),u(7,"Name"),a(),s(8,"th"),u(9,"Fees"),a(),s(10,"th"),u(11,"Duration"),a()()(),s(12,"tbody"),Q(13,Rt,9,4,"tr",2),a()()()),t&2){let n=Ce();h(13),V("ngForOf",n.message)}}var Y=(()=>{let e=class e{constructor(i){this.service=i,this.showMessage=!1}ngOnInit(){this.service.getBatches().subscribe(i=>{this.message=i})}ReadMessage(){this.showMessage=!0,alert("Read Successfully ..")}};e.\u0275fac=function(r){return new(r||e)(l(M))},e.\u0275cmp=j({type:e,selectors:[["app-root"]],decls:7,vars:1,consts:[[3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(r,o){r&1&&(s(0,"h1"),u(1,"Read Operation"),a(),s(2,"button",0),m("click",function(){return o.ReadMessage()}),u(3,"Read Message"),a(),Q(4,Ut,14,1,"div",1),T(5,"app-write")(6,"router-outlet")),r&2&&(h(4),V("ngIf",o.showMessage))},dependencies:[De,Me,Se,st],styles:["h1[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}button[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:1rem;line-height:1.5;border-radius:.25rem;cursor:pointer;background-color:#007bff;border:1px solid #007bff;color:#fff}button[_ngcontent-%COMP%]:hover{background-color:#0056b3;border-color:#0056b3}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.75rem;border:1px solid #dee2e6}th[_ngcontent-%COMP%]{background-color:#f2f2f2;font-weight:700}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}"]});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e,bootstrap:[Y]}),e.\u0275inj=f({providers:[we(),M],imports:[Fe,Oe,Ee,rt,ot]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e,bootstrap:[Y]}),e.\u0275inj=f({imports:[at,Ie]});let t=e;return t})();export{Ht as a};
