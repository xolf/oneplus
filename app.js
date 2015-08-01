function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$( document ).ready(function() {
    $("#lightbox").css("top","-" + $(window).height() + "px");
    console.log("+--------------------------------------------------------------------+");
    console.log("|                                                                    |");
    console.log("| Coded by Florian Theimer:                                          |");
    console.log("| * A big OnePlus nerd                                               |");
    console.log("| * Web developer                                                    |");
    console.log("| * Music listener                                                   |");
    console.log("| * Freelancer                                                       |");
    console.log("|                                                                    |");
    console.log("| Enjoy using this page                                              |");
    console.log("| If you want to talk with me send me a mail: florian(at)xolf(dot)de |");
    console.log("| PS: It would be great if I'm going to get a OnePlus 2  ;-D         |");
    console.log("|                                                                    |");
    console.log("+--------------------------------------------------------------------+");
    $("#how-to").click(function(){
        $("#lightbox").css("top","0px");
        $("#lightbox").css("opacity","1");
        $("#lightbox").css("z-index","1000");
        $("#lightbox").css("overflow","scroll");
    });
    $(".lightbox-got-it").click(function(){
        $("#lightbox").css("top","-" + $(window).height() + "px");
        $("#lightbox").css("opacity","0");
        $("#lightbox").css("z-index","-10");
        $("#lightbox").css("overflow","none");
    });
    $("#phone-name").keyup(function() {
        var strCounter = $("#phone-name").val().length, i = 0, typeString = "", count = 0;
        var strCounter = strCounter - Math.round(strCounter * 0.6);
        setTimeout(function(){
               var phone = $("#phone-name").val().charCodeAt(strCounter),
               i = phone.toString().length - 1;
               typeString = phone.toString()[i];
               console.log(typeString);
               if(typeString == "N") typeString = getRandomInt(0, 9);
               if(typeString % 2 != 1){
                   var space = "64 GB";
                   if(typeString == 0) var color = "Kevlar", src = "kevlar";
                   if(typeString == 2) var color = "Sandstone Black", src = "sandstone-black";
                   if(typeString == 4) var color = "Bamboo", src = "bamboo";
                   if(typeString == 6) var color = "Rosewood", src = "apricot";
                   if(typeString == 8) var color = "Black Apricot", src = "rosewood";
                   if(typeString == 10) var color = "Kevlar", src = "kevlar";
               }else{
                   var space = "16 GB";
                   if(typeString == 1) var color = "Sandstone Black", src = "sandstone-black";
                   if(typeString == 3) var color = "Bamboo", src = "bamboo";
                   if(typeString == 5) var color = "Rosewood", src = "apricot";
                   if(typeString == 7) var color = "Black Apricot", src = "rosewood";
                   if(typeString == 9) var color = "Kevlar", src = "kevlar";
               }
               $("#result-img").attr("src", "//content.oneplus.net/skin/frontend/oneplus2015/default/images/feature/two/style-swap-" + src + ".png")
               $("#result-text").html("OnePlus 2 with the '" + color + "' cover and " + space + " space.");
               //$("#result-space").html(space);
        }, 800);
    });
});
