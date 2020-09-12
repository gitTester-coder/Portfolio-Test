$("span.kalyan").on("click",function(){
  $("span.kalyan").slideUp().slideDown();

});
$("span.kalyan").on("mouseover",function(){
$("span.kalyan").addClass("ccc ddd");
setTimeout(function(){
  $("span.kalyan").removeClass("ccc ddd");
},1000);
});
