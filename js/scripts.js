$(document).ready(function(){
  var x=[1,2,3];
  var a=[2,3,1];
  var cond=1;

  var counter=0;
    // while(counter<3){
    $("#imges-move").click(function(){
     if(counter===3){
       counter=0;
     }
     // $("#p1").fadeOut();
     // $("#p2").fadeIn();
     // counter++;
      $("#p"+x[counter]).hide();
      $("#p"+a[counter]).show();
      counter++;
      // $("#p"+i).fadeIn("3000")
    });






var name,land,color,sleep,kids,season,ride;
var max=0,acount=0,bcount=0,ccount=0;
   $("button#sub").click(function(event){
      acount=0;
      bcount=0;
      ccount=0;
      max=0;
      var index=0,
     name=$("#fname").val();
     land=$("#input:radio[name=land]:checked").val();
     color=$("input:radio[name=color]:checked").val();
     sleep=$("input:radio[name=sleep]:checked").val();
     kids=$("input:radio[name=kids]:checked").val();
     season=$("input:radio[name=season]:checked").val();
     ride=$("input:radio[name=ride]:checked").val();
     // alert(name);


      var  answer=[land,color,sleep,kids,season,ride];

    // alert(index);

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

       // alert(acount+bcount);

  if((acount>=bcount)&(acount>=ccount)){
     $("#final-info").prepend(name+" , You choose mostly a's you have to book a trip to  New-Mexico<br> click here to know more :");
     $("#vacation-survey").hide();
      $("#final-info").show();
    // alert("acount")
    max=acount;
  }
    else if((bcount>=acount)&(bcount>=ccount)){
      $("#final-info").prepend(name+" , You choose mostly b's you have to book a trip to  Jordan<br> click here to know more :");
      $("#vacation-survey").hide();
       $("#final-info").show();

      max=bcount;
    }
     else{

      $("#final-info").prepend(name+" , You choose mostly c's you have to book a trip to  Italy<br> click here to know more :");
      $("#vacation-survey").hide();
        $("#final-info").show();

          max=ccount;
          // alert("ccount");
      }

 $("#home").show();

event.preventDefault();
 });

 $("#final-info").click(function(){
   //alert(max);
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
   $("#final-info").hide();
   $("#final-info").text("");
   $("#vacation-survey").show();
   $("#sub").hide();
  $("#fname").show();


 });
 $("button#go").click(function(event){
   $("#go").hide();
  $("#fname" ).hide();
   $("#question1").fadeIn();
   // alert("hellow")
   event.preventDefault();
 });

 $("#question1").click(function(){
  //  alert("q2");
   $("#question2").fadeIn();
   $("#question1").fadeOut();

 });
 $("#question2").click(function(){
   $("#question2").fadeOut();
   $("#question3").fadeIn();
 });
 $("#question3").click(function(){
   $("#question3").fadeOut();
   $("#question4").fadeIn();
 });
 $("#question4").click(function(){
  $("#question4").fadeOut();
   $("#question5").fadeIn();
 });
 $("#question5").click(function(){
   $("#question5").fadeOut();
   $("#question6").fadeIn();
 });

 $("#question6").click(function(){
   $("#question6").fadeOut();
   $("#sub").fadeIn();
 });


 });
