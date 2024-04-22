$(window).on("load", () => {
  setTimeout(()=>{
    $(".loading-screen").fadeOut(500, ()=>{
        $("body").css("overflow", "visible")
    })
  },500)
})

$(".sideBarBtn").click(function(){
    $("#sideBar").animate({ width:'15%'},500)
    $("#homeContent").animate({paddingLeft :'15%'},500)
})

$(".closebtn").click(function(){
    $("#sideBar").animate({ width:'0px'},500)
    $("#homeContent").animate({paddingLeft :'0px'},500)
})

$("#sideBar a").click(function(){ 
  var section= $(this).attr("myhref");
  var topOfSection = $(section).offset().top;
  $("html , body").animate({scrollTop:topOfSection},1000);
})

window.onload = function() { 
  countDate("31 december 2025 9:56:00");
}

function countDate(dateApply) {
  let myDate = new Date(dateApply);
  myDate = (myDate.getTime()/1000);
  
  let now = new Date();
  now = (now.getTime()/1000);

  timeDiff = (myDate - now);
        
  let days = Math.floor( timeDiff / (24*60*60));
  let hours = Math.floor((timeDiff - (days * (24*60*60))) / 3600);
  let mins = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600 )) / 60);
  let secs = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

  $(".days").html(`${days} d`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${ mins } m`);
  $('.seconds').html(`${ secs} s`)

  setInterval(() => {
    countDate(dateApply);}, 1000);
}

$('textarea').keydown(function() {
  var maxchar = 100;
  var length = $(this).val().length;
  var charLeft = (maxchar - length);
  if(charLeft<=0){
    $(".test").text("your available character finished");              
    $(".testo").text("");             
  }
  else{
    $(".test").text(charLeft);
    $(".testo").text(" Character Remaining");
  }
});
/****************************************/
let menuToggle = document.querySelector('.menuToggle');
let menu = document.querySelector('.menu');
menuToggle.onclick = function(){
    menu.classList.toggle('active');
}

$(".menu li").click((e) => {
  let selectedColor = $(e.target).css("--clr");

  $(".selectedColor").css("color", selectedColor)
})