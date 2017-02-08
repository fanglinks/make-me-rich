webpackJsonp([1],{17:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(6),i=o(s);t["default"]={name:"Rich",data:function(){return{type:1,user:{amount:"",days:20},rate:{3:9,6:10,9:11,12:12},maxYear:5,maxAmount:1e12}},computed:{month:function(){return this.$data.user.days<15?1:Math.round(this.$data.user.days/30)},showMonth:function(){return this.month<3?3:3*Math.round(this.month/3)},income:function(){return this.countRepay(+this.$data.user.amount,this.$data.rate[this.showMonth],30*this.showMonth)},yearInterest:function(){for(var n=Number(this.$data.user.amount)+this.income,t=2;t<=this.$data.maxYear;t++)n+=this.countRepay(n,this.$data.rate[12],365);return n}},methods:{checkAmount:function(){+this.$data.user.amount>this.$data.user.maxAmount&&(this.$data.user.amount=this.$data.user.maxAmount,window.alert("我有一个不成熟的小建议，要不您换个地方算吧~"))},countRepay:function(n,t,e){var o=i["default"].repayPlanByDays(this.$data.type);return o(n,t,e)}}}},46:function(n,t,e){t=n.exports=e(10)(),t.push([n.id,".rich{background:#f1df91}.rich-title{text-align:center;font-size:1.3rem;color:#212121}.rich .container{width:80%}.rich .form-section{margin:20px auto;color:#696868;font-size:1.1rem}.rich .form-section.result{min-height:80px;text-align:center;font-size:.9rem;line-height:200%}.rich .form-section .amount-container{display:inline-block;width:68%;border-bottom:1px solid #fff;margin-right:10px}.rich .form-section .amount{width:100%;height:25px;line-height:20px;padding-left:3px;color:#696868;border:none;-webkit-appearance:none;background:transparent}.rich .tips{margin-top:10px;font-size:.7rem;line-height:100%}.rich .g-btn{color:#e8760c;border:1px solid #e8760c}","",{version:3,sources:["/./src/components/Rich.vue"],names:[],mappings:"AACA,MACE,kBAAoB,CACrB,AACD,YACE,kBAAmB,AACnB,iBAAkB,AAClB,aAAe,CAChB,AACD,iBACE,SAAW,CACZ,AACD,oBACE,iBAAkB,AAClB,cAAe,AACf,gBAAkB,CACnB,AACD,2BACE,gBAAiB,AACjB,kBAAmB,AACnB,gBAAkB,AAClB,gBAAkB,CACnB,AACD,sCACE,qBAAsB,AACtB,UAAW,AACX,6BAA8B,AAC9B,iBAAmB,CACpB,AACD,4BACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,cAAe,AACf,YAAa,AACb,wBAAyB,AACzB,sBAAwB,CACzB,AACD,YACE,gBAAiB,AACjB,gBAAkB,AAClB,gBAAkB,CACnB,AACD,aACE,cAAe,AACf,wBAA0B,CAC3B",file:"Rich.vue",sourcesContent:["\n.rich {\n  background: #f1df91;\n}\n.rich-title {\n  text-align: center;\n  font-size: 1.3rem;\n  color: #212121;\n}\n.rich .container {\n  width: 80%;\n}\n.rich .form-section {\n  margin: 20px auto;\n  color: #696868;\n  font-size: 1.1rem;\n}\n.rich .form-section.result {\n  min-height: 80px;\n  text-align: center;\n  font-size: 0.9rem;\n  line-height: 200%;\n}\n.rich .form-section .amount-container {\n  display: inline-block;\n  width: 68%;\n  border-bottom: 1px solid #fff;\n  margin-right: 10px;\n}\n.rich .form-section .amount {\n  width: 100%;\n  height: 25px;\n  line-height: 20px;\n  padding-left: 3px;\n  color: #696868;\n  border: none;\n  -webkit-appearance: none;\n  background: transparent;\n}\n.rich .tips {\n  margin-top: 10px;\n  font-size: 0.7rem;\n  line-height: 100%;\n}\n.rich .g-btn {\n  color: #E8760C;\n  border: 1px solid #E8760C;\n}\n"],sourceRoot:"webpack://"}])},49:function(n,t,e){var o=e(46);"string"==typeof o&&(o=[[n.id,o,""]]);e(11)(o,{});o.locals&&(n.exports=o.locals)},55:function(n,t){n.exports='<section class="rich center"> <div class=container> <img src=https://ol1unnb9h.qnssl.com/FiQgI98h3Wbut0nW_iuP5YQUybw_ class=avatar> <h2 class=rich-title>看看你能挣多少钱</h2> <section class=form-section> <span class=key>我有：</span> <span class=amount-container> <input type=number class=amount onafterpaste="this.value=this.value.replace(/\\D/g,\'\')" onpropertychange="this.value=this.value.replace(/\\D/g,\'\')" oninput="this.value=this.value.replace(/\\D/g,\'\')" v-model=user.amount @keyup=checkAmount> </span> <span class=unit>元</span> </section> <section class=form-section> <span class=key>我存：</span><span class=days v-text=showMonth></span><span class=unit>个月</span> </section> <section class=form-section> <input type=range min=1 max=365 class=range v-model=user.days> </section> <section class="form-section result"> <p v-show="income > 0"> 那么<span v-text=showMonth></span>个月后, 利息<span v-show="income > 10000">居然</span>有<br> <span v-text="income | numberFormat"></span>元 </p> <p v-show="showMonth === 12 && income > 0"> 如果利率保持不变,存<span v-text=maxYear></span>年,连本带息会有<br> <span v-text="yearInterest | numberFormat"></span>元 </p> <p class=tips v-show="income > 0">* 以上投资利率参考了『懒投资』的平均利率。</p> </section> <div> <a href="https://lantouzi.com/union/invite?pcode=h76q" class=g-btn>去挣利息</a> <a v-link="{path: \'/\'}" class=g-btn>返回首页</a> </div> </div> </section>'},59:function(n,t,e){var o,s;e(49),o=e(17),s=e(55),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),s&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=s)}});
//# sourceMappingURL=1.0792aefaa0351ac5c7f3.js.map