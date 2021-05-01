const { response } = require('express');
const express = require('express');
const twitch = require("twitch-m3u8");

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();});

app.get('/stream/:twitchname' ,(req, res) => {
    twitch.getStream(req.params.twitchname)
        .then(function(data){
            // var parsed = JSON.parse(data);
            // console.log(parsed)
            console.log(data);


            res.send(`
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

            <div class=".container-fluid">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" value="${data[0].url}" id="myInput" width:1px; >

                </div>
                <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" id="button-addon1" onclick="myFunction()">Copy text and past above</button>

                </div>
            </div>   
            <script> 
            function myFunction() {

            var copyText = document.getElementById("myInput");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            }
            </script>

            
            
            `)

        })
        .catch(err => res.send(err));

    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});


app.get('/stream/direct/:twitchname' ,(req, res) => {
    url = `https://www.twitch.tv/${req.params.twitchname}`

    twitch.getStream(url)
        .then(function(data){
            // var parsed = JSON.parse(data);
            // console.log(parsed)
            console.log(data);


            res.send(`
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

            <div class=".container-fluid">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" value="${data[0].url}" id="myInput" width:1px; >

                </div>
                <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" id="button-addon1" onclick="myFunction()">Copy text and past above</button>

                </div>
            </div>   
            <script> 
            function myFunction() {

            var copyText = document.getElementById("myInput");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            }
            </script>

            
            
            `)

        })
        .catch(err => res.send(err));

    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});




const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`server start on ${PORT}`));