define(["ojs/ojcore","knockout","jquery","appController","config/appconfig","ojs/ojknockout","ojs/ojgauge","ojs/ojtabs","ojs/ojconveyorbelt"],function(e,o,n,t,r){return new function(){var c=this,u=r.get("baseURL"),s=r.get("pointsEndpoint"),i=r.get("couponEndpoint"),l=t.userid();c.points=new o.observable(0),c.coupon=new o.observable(0),c.selectedItem=new o.observable,c.currentItem=new o.observable(null),c.distance=o.pureComputed(function(){return"Collect "+(3-this.points())+" more Stars for another Reward"},this),c.target=o.pureComputed(function(){return this.points()+" / 3"},this),c.rewards=new o.observable,c.rewardsHistory=new o.observable,c.credit=function(){c.currentItem(null),n.post(u+s+"/"+l,null,function(e,o){if(c.points(e.points),console.log("after credit new point we have: "+c.points()),0===c.points()){console.log("we have zero points means add one coupon we now have "+c.coupon());var n=c.rewards(),t=n.totalSize()+1;console.log("adding coupon number: "+t),n.add({id:t,name:"Free Coffee"}),c.rewards(n);var r=c.coupon();r++,c.coupon(r),console.log("after adding one we now have "+c.coupon())}})},c.freecoffee=function(){var e=c.selectedItem();console.log("using coupon number: "+e),c.currentItem(null),n.post(u+i+"/"+l,null,function(e,o){c.coupon(e.coupon),console.log("after using coupon we now have "+c.coupon());var n=c.rewards(),t=c.coupon()+1;n.remove({id:t}),c.rewards(n)})},c.logSelected=function(e,o){console.log("selected item "+c.selectedItem()),"selection"===o.option&&null!=o.value&&null!=o.value[0]&&(console.log("currentItem="+c.currentItem()),null!=c.currentItem()&&c.currentItem()[0]==c.selectedItem()[0]?(c.currentItem(null),console.log("Reset currentItem to "+c.currentItem())):c.currentItem(c.selectedItem()))},c.connected=function(){n.get(u+s+"/"+l,function(e,o){c.points(e.points),console.log("points = "+c.points())}),n.get(u+i+"/"+l,function(o,n){c.coupon(o.coupon),console.log("coupon = "+c.coupon());var t=new e.ArrayTableDataSource([],{idAttribute:"id"});console.log("initialize coupon, total: "+c.coupon());for(var r=1;r<=c.coupon();r++)t.add({id:r,name:"Free Coffee"});c.rewards(t)}),n.getJSON("data/rewards_history.json",function(o){c.rewardsHistory(new e.ArrayTableDataSource(o,{idAttribute:"id"}))})},c.disconnected=function(){},c.transitionCompleted=function(){}}});