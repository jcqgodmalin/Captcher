# Captcher
Simple Captcha Generator and Validator

#What does it do
Incase you need a simple Captcha Generator, You can use Captcher. Captcher will check if the code entered match or generate a new one if it doesn't.

#Sample
See the sample [Here](https://rawgit.com/Lezirhc/Captcher/master/Sample/sample.html).

#How to use
##Embedding the project:
1. Simply embed the Captcher source file in your html page.

    ```html  
        <script type='text/javascript' src='path-to-Captcher-Source-File.js'></script>
    ```
2. Call the ``` run() ``` function on page load or anytime you want the Captcher to generate a code.
    ```html
        <body onload='run()'>
    ```
    
3. Create 2 labels or any sort that will hold the generated code by the Captcher and the result then give it an id named ``` code ``` & ``` result-label ```. Next, Make a textbox that has an id named ```tbCode```. Lastly, Make a button that calls the ```validate()``` function in its ```onClick=""``` event.
      ```html
        <p id='code'></p>
        <input type='text' id='tbCode'>
        <button onclick='validate()'>Submit</button>
        <p id='result-label'></p>
      ```

##Generating a new code ("Try new code" purposes)
To generate a new code, Simply call the ```run()``` function.

##Modify code length
To modify the number of characters of the captcha code, simply edit the value of the variable ```c_myCodeLength``` to the length you want. The default is 6.

#Note:
This is just purely javascript made as this is a project in one of my subjects in school. Will use jQuery next time.

#License
This work is licensed under [GNU GPL v3.0](http://www.gnu.org/licenses/gpl-3.0.txt)
