# Captcher
Captcha Generator and Validator

#Note:
This is just purely javascript made as this is a project in one of my subjects in school. jQuery will be used next time.

#How to use
1. Simply embed the Captcher source file in your html page.

    ```html  
        <script type='text/javascript' src='path-to-Captcher-Source-File.js'></script>
    ```
2. Call the ``` run() ``` function on page load or anytime you want the Captcher to generate a code.
    ```html
        <body onload='run()'>
    ```
    
3. Create 2 labels or any sort that will hold the generated code by the Captcher and the result then give it an id named ``` code ``` & ``` result-label ```. Next, Make a button that calls the ```validate()``` function in its ```onClick=""``` event.
      ```html
        <p id='code'></p>
        <button onclick='validate()'>Submit</button>
        <p id='result-label'></p>
      ```
