Access to device-device communication through IP routing is forbidden on trinity secure wifi

we use ngrok instead

MARCO WILL RUN SERVER!

install with 

npm install -g ngrok


// note that you must make an acc.  

ngrok config add-authtoken <TOKENHERE>


//using your local private ip (from ifconfig en0)


run

ngrok http 3000

//then it will generate an https secure url that we can use as the server side. Its different every time, so we will need to check stuff before and have the server runnning until our presentation is done




