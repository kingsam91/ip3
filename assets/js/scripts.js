$(document).ready(function(){
   $(".what-we-do").css("text-align", "center");
   $(".d-icon").click(function() {
     $("#design-description").toggle();
   });
   $(".dev-icon").click(function() {
     $("#dev-description").toggle();
   });
   $(".p-icon").click(function() {
     $("#product-mgt-description").toggle();
   });
})
