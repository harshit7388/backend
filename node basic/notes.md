run the code:
node .\script.js -> this will run the script.js file using node


node is basically combination of v8 engine that is written in c++ code and wrapped by js wrapper. js wrapper user ke through js code receive krega aur fir usko convert krega relevant c++ code main aur pass krdega v8 engine ko to create a server environment.

 js khud se server nahi create kr skta

 express isa framework for node.js
 express ka use krte hai for routing
 
 routing ke types -> get post put delete patch

 get route-> route m data dikh jaye.. koi issue nahi hai ..example (https://search.brave.com/search?q=cars&source=desktop)  cars search kia tha hamne aur wo route ya fir url m dikh rha hai.

 post route -> route m data na dikhe..example m jab facebook par login krunga to jo email and password maine fill kia hai ..wo url m show nahi hoga bcz wo sensitive info hai..tab post route use hota hai


after creating server, the data printed can not be changed while server is running with that data.
to update the server with the new data, we need to close the server using "ctrl +c on terminal" and then again run the js file 'node .\script.js' or whatever the file name is to restart the server, then the server will print the updated data

 to make it, that it starts on it own when the data is changed, we will use 'nodemon' and run the js file using  'npx nodemon .\script.js'  npx is used to handle the error,the actual statement is 'nodemon .\script.js'

 middleware ek aise funcction hai jo ksi route ke chalne se pehle chalta hai..if we want certain task to be execited before route then middleware is used. 
 app.use(function(req, res, next){
    //body
    //body

    next();
 })
middleware when executed ,jams the next request of routing, or doesnt lets the next route to happen. so we use next() to push to next route.

 
 