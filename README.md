# Captcher v2.0
Simple Captcha Generator and Validator

#What's New?
1. Coded with jQuery
2. Enable/Disable "Try another Code"
3. Enable/Disable Case-Sensitive feature.
4. Interface
5. Short Implementation

#What does it do
Incase you need a simple Captcha Generator, You can use Captcher. Captcher will check if the code entered match or generate a new one if it doesn't.

#Sample
See the sample [Here](https://rawgit.com/Lezirhc/Captcher/master/vendors/sample.html).

#How to use
##Embedding the project:
###1. Captcher needs jQuery
Embed the jQuery library. See example below:
```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
```
###2. Captcher needs itself
Embed the Captcher source file in your html page. See example below:
```html  
    <script type='text/javascript' src='path-to-Captcher-Source-File.js'></script>
```
###3. Captcher needs place
Add 2 ```<div>```'s inside the ```<body>``` tag of your html page. Make it a ```<div>``` inside a ```<div>```. Parent ```<div>``` must have the class of "captcher-box". The child ```<div>``` has the class of box. See example below:
```html
    <div class='captcher-box'>
        <div class='box'>
        </div>
    </div>
```

##Enabling/Disabling Try Another Code feature
Set the ```allowTryAnotherCode``` variable to ```true``` to enable, ```false``` to disable.

##Enabling/Disabling Case Sensitive feature
Set the ```caseSensitive``` variable to ```true``` to enable, ```false``` to disable.

##Modify code length
To modify the number of characters of the captcha code, simply edit the value of the variable ```codeLength``` to the length you want. The default is 5.

#License
This work is licensed under [GNU GPL v3.0](http://www.gnu.org/licenses/gpl-3.0.txt)
