//=====Global Variables=====
var codeLength = 5;
var caseSensitive = false;
var allowTryAnotherCode = true;
//=====End of Global Variables=====


//======Google font======
WebFontConfig = {
    google: { families: [ 'Fredoka+One::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
//======End of Google font======


$(document).ready(function(){
  //=====Captcher Box Structure=====
  $(".box").append("<p class='code'></p><input type='text' class='codeHolder'><br/><button class='validate'>Validate</button>");
  if(allowTryAnotherCode){
    if(caseSensitive){
      $("<p class='menu'><span>Note: Case Sensitive | </span><span class='getNew'>Try Another Code</span></p>").insertAfter($(".code"));
    }else{
      $("<p class='menu'><span>Not Case Sensitive | </span><span class='getNew'>Try Another Code</span></p>").insertAfter($(".code"));
    }

  }
  //===== End of Captcher Box Structure=====
  //===========Add Styles============
  //Captcher-Box
  $(".captcher-box").css("width","350px");
  $(".captcher-box").css("margin","0");
  $(".captcher-box").css("padding","0");
  $(".captcher-box").css("padding-bottom","15px");
  $(".captcher-box").css("padding-right","5px");
  $(".captcher-box").css("padding-left","5px");
  $(".captcher-box").css("border","1px solid #8c8c8c");
  $(".captcher-box").css("border-radius","3px");
  //Code
  $(".code").css("background-color","#80aaff");
  $(".code").css("color","#ffffff");
  $(".code").css("letter-spacing","30px");
  $(".code").css("padding-top","10px");
  $(".code").css("padding-bottom","10px");
  $(".code").css("text-align","center");
  $(".code").css("width","100%");
  $(".code").css("border-radius","3px");
  $(".code").css("font-size","25px");
  $(".code").css("font-family","'Fredoka One',cursive");
  //menu
  $(".menu").css("text-align","center");
  $(".menu").css("width","100%");
  $(".menu").css("font-size","13px");
  //Try New Code
  $(".getNew").css("cursor","pointer");
  //Code Holder
  $(".codeHolder").css("width","97.5%");
  $(".codeHolder").css("padding","5px 3px");
  $(".codeHolder").css("border","1px solid #8c8c8c");
  $(".codeHolder").css("text-align","center");
  $(".codeHolder").css("border-radius","3px");
  //Validate
  $(".validate").css("background-color","#80aaff");
  $(".validate").css("width","100%");
  $(".validate").css("color","#ffffff");
  $(".validate").css("padding","8px 6px");
  $(".validate").css("border","0");
  $(".validate").css("border-bottom","3px solid #4d88ff");
  $(".validate").css("border-radius","3px");
  $(".validate").css("cursor","pointer");
  $(".validate").css("font-size","17px");
  $(".validate").css("margin-top","8px");
  //=========End of Add Styles========
  //=========Print Code=========
  printCode();
  //=========End of Print Code=========
  //=====Button Click Event=====
  $(".validate").click(function(){
    //Check if it is validated
    var validated = validateCode($(".code").text(),$(".codeHolder").val());
    //Remove the last alert if it exist. Then Insert it again.
    $(".result-label").remove();
    $("<p class='result-label'></p>").insertAfter($(this));
    //Alert Styles
    $(".result-label").css("width","97.5%");
    $(".result-label").css("padding","8px 5px");
    $(".result-label").css("border-radius","3px");
    $(".result-label").css("text-align","center");
    //Print alert.
    if(validated){
      $(".result-label").css("background-color","#80ffaa");
      $(".result-label").css("color","white");
      $(".result-label").text("Code Validated!");
    }else{
      $(".result-label").css("background-color","#ff8080");
      $(".result-label").css("color","white");
      $(".result-label").text("Code Invalid. Try again.");
      printCode();
    }
  })
//=====End of Button Click Event=====
//=====New Code Click Event=====
  $(".getNew").click(function(){
    printCode();
  })
})
//=====End of New Code Click Event=====
//=====Methods and Functions=====
//=====Print Code Function=====
function printCode(){
  var code = generateCode();
  $(".code").text(code);
}
//=====End of Print Code Function=====
//=====Generate Code Function=====
function generateCode(){
  var a = "1qaz2wsxcde34rfvbtg56hyn7jumki8l9o0pAPQLZMXNSKOWEIJBDCVHFGYTRU";
  var c = "";
  for(var q=0;q<codeLength;q++){
    var r = Math.floor((Math.random() * 62));
    c = c + a.charAt(r);
  }
  return c;
}
//=====End of Generate Code Function=====
//=====Validate Code Function=====
function validateCode(cc,ec){
  if(caseSensitive){
    if(cc == ec){
      return true;
    }else{
      return false;
    }
  }else{
    if(cc.toUpperCase() == ec.toUpperCase()){
      return true;
    }else{
      return false;
    }
  }
}
//=====End of Validate Code Function=====
//=====End of Methods and Functions=====
