var c_myCode = "";
var c_myCodeLength = 6;
function run(){
  var c_code = generate();
  document.getElementById('code').innerHTML = c_code;
  this.c_myCode = c_code;
}
function generate(){
  var c_chars = [" ","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var c_code = "";
  var c_x = 1;
  while (c_x<=c_myCodeLength){
    var c_i = Math.floor((Math.random() * 36) + 1);
    c_code = c_code + c_chars[c_i];
    c_x = c_x + 1;
  }
  return c_code;
}
function validate(){
  var c_currentCode = this.c_myCode;
  var c_enteredCode = document.getElementById('tbCode').value;
  if (c_currentCode == c_enteredCode.toUpperCase()){
    document.getElementById('result-label').innerHTML = "Validated";
  }else if((c_enteredCode == "") || (c_enteredCode == null)){
    document.getElementById('result-label').innerHTML = "Must enter something";
  }else{
    document.getElementById('result-label').innerHTML = "Code doesn't match";
    run();
  }
}
