# Toast Generator
A simple JS based toast generator for web projects.

# How to use it?
Download the script and include it on your code base, through HTML script import.

```
<script src="./toastGenerator.min.js"></script>
```

Alternatively, you can use the raw file from GitHub.
```
<script src="https://raw.githubusercontent.com/rrcerv/ToastGenerator/refs/heads/master/toastGenerator.min.js"></script>
```

Declare a new instance of the ToastGenerator. You can pass the language as the 'lang' argument. If you pass 'PT', the language will be brazilian Portuguese. Anything else, the language will be english:
```
let myToastGenerator = new ToastGenerator()
```

Then, you can use the .danger('message') and .success('message') functions to send important messages to your users. 
```
myToastGenerator.success('Success message');
myToastGenerator.danger('Error message');
```