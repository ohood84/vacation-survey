$(document).ready(function(){
  $("#div1").fadeIn("slow");
  // $("#div1").fadeToggle("slow");
  // $("#first-suggestor").fadeIn("3000");
var name,land,color,sleep,kids,season,ride;
var max=0;
var acount=0;
var bcount=0;
var ccount=0;
   $("form#vac").submit(function(event){
     name=$("#fname").val();
     land=$("#land").val();
     color=$("input:radio[name=color]:checked").val();
     sleep=$("input:radio[name=sleep]:checked").val();
     kids=$("input:radio[name=kids]:checked").val();
     season=$("input:radio[name=season]:checked").val();
     ride=$("input:radio[name=ride]:checked").val();
     alert(name);

     // $("#final-info").text(name+" , You choose mostly a's you have to book to New-Mexico");
     // s$("#final-info").text(name+land+color+sleep+kids+season+ride);

 // put the answers in an array
  var  answer=[land,color,sleep,kids,season,ride];
  // alert(answer[0]+" "+answer[5]);
    //var max-counter=0;
    // alert("hellow");

   alert(acount);

 for (index =0; index<6; index+=1){
    if(answer[index]==="a") {
      acount+=1;
      // alert("a"+acount);
   }
      else if (answer[index]==="b"){
        bcount+=1;
        // alert("b"+bcount);
   }
      else {
        ccount+=1;
        // alert("c"+ccount);
 }
// alert("hellow")
 // alert("index="+index)
}


//  $("#final-info").append(name+" , You choose mostly a's you have to book to New-Mexico");
//  alert("hellow");
//
// // find the biggest counter
if((acount>=bcount)&(acount>=ccount)){
   $("#final-info").prepend(name+" , You choose mostly a's you have to book a trip to  New-Mexico<br> click here to know more :");

  //$("#first-suggestor").show();
  $("#vacation-survey").hide();
  // $("p").slideDown();
  max=acount;
}


  if((bcount>=acount)&(bcount>=ccount)){
    $("#final-info").prepend(name+" , You choose mostly b's you have to book a trip to  Jordan<br> click here to know more :");

   //$("#first-suggestor").show();
   $("#vacation-survey").hide();
   // $("p").slideDown();
    // $("#second-suggestor").show();
    max=bcount;
      // $("p").slideToggle();
  }


  if((ccount>=bcount)&(ccount>=acount)){

    $("#final-info").prepend(name+" , You choose mostly c's you have to book a trip to  Italy<br> click here to know more :");

   //$("#first-suggestor").show();
   $("#vacation-survey").hide();
   // $("p").slideDown();
      // $("#third-suggestor").show();
        // $("p").slideup();
        max=ccount;
    }
//
 $("#home").show();

event.preventDefault();
 });

 $("#final-info").click(function(){
   alert(max);
  if (max===acount){
     $("#first-suggestor").slideToggle();}
    else if (max===bcount){
      $("#second-suggestor").slideToggle();}
     else {
       $("#third-suggestor").slideToggle();

    }

 });
 $("#home").click(function(){
   $("#first-suggestor").hide();
   $("#second-suggestor").hide();
   $("#third-suggestor").hide();
   $("#home").hide();
   $("#final_info").text("");
   $("#vacation-survey").show();


 });
});
