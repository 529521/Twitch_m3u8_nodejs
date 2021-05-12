const { response } = require('express');
const express = require('express');
const twitch = require("twitch-m3u8");

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/stream/:twitchname', (req, res) => {
    twitch.getStream(req.params.twitchname)

        .then(function (data) {
            // var parsed = JSON.parse(data);
            // console.log(parsed)
            console.log(data[7]);

            if (data[0] === undefined) {
                var q0_resolution = null;
                var q0_url = null;

            } else {

                var q0_resolution = `<label class="form-label">${data[0].resolution}</label> `;
                var q0_url = `<input type="text" class="form-control ${data[0].quality}" value="${data[0].url}" id="${data[0].resolution}"  >`;
            }


            if (data[1] === undefined) {
                var q1_resolution = null;
                var q1_url = null;

            } else {

                var q1_resolution = `<label class="form-label">${data[1].resolution}</label> `;
                var q1_url = `<input type="text" class="form-control ${data[1].quality}" value="${data[1].url}" id="${data[1].resolution}"  >`;
            }

            if (data[2] === undefined) {
                var q2_resolution = null;
                var q2_url = null;

            } else {

                var q2_resolution = `<label class="form-label">${data[2].resolution}</label> `;
                var q2_url = `<input type="text" class="form-control ${data[2].quality}" value="${data[2].url}" id="${data[2].resolution}"  >`;
            }


            if (data[3] === undefined) {
                var q3_resolution = null;
                var q3_url = null;

            } else {

                var q3_resolution = `<label class="form-label">${data[3].resolution}</label> `;
                var q3_url = `<input type="text" class="form-control ${data[3].quality}" value="${data[3].url}" id="${data[3].resolution}"  >`;
            }

            if (data[4] === undefined) {
                var q4_resolution = null;
                var q4_url = null;

            } else {

                var q4_resolution = `<label class="form-label">${data[4].resolution}</label> `;
                var q4_url = `<input type="text" class="form-control ${data[4].quality}" value="${data[4].url}" id="${data[4].resolution}"  >`;
            }


            if (data[5] === undefined) {
                var q5_resolution = null;
                var q5_url = null;

            } else {

                var q5_resolution = `<label class="form-label">${data[5].resolution}</label> `;
                var q5_url = `<input type="text" class="form-control ${data[5].quality}" value="${data[5].url}" id="${data[5].resolution}"  >`;
            }

            if (data[6] === undefined) {
                var q6_resolution = null;
                var q6_url = null;

            } else {

                var q6_resolution = `<label class="form-label">${data[6].resolution}</label> `;
                var q6_url = `<input type="text" class="form-control ${data[6].quality}" value="${data[6].url}" id="${data[6].resolution}"  >`;
            }

            if (data[7] === undefined) {
                var q7_resolution = null;
                var q7_url = null;

            } else {

                var q7_resolution = `<label class="form-label">${data[7].resolution}</label> `;
                var q7_url = `<input type="text" class="form-control ${data[7].quality}" value="${data[7].url}" id="${data[7].resolution}"  >`;
            }



            res.send(`
         
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script>
            if
            
            </script>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

            <div class=".container-fluid">
             ${q0_resolution}
             ${q0_url}

             ${q1_resolution}
             ${q1_url}

             ${q2_resolution}
             ${q2_url}


             ${q3_resolution}
             ${q3_url}

             ${q4_resolution}
             ${q4_url}

             ${q5_resolution}
             ${q5_url}

             ${q6_resolution}
             ${q6_url}

             ${q7_resolution}
             ${q7_url}



              
            </div>



            
            
            `)

        })
        .catch(err => res.send(err));

    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});


app.get('/stream/direct/:twitchname', (req, res) => {
    url = `https://www.twitch.tv/${req.params.twitchname}`

    twitch.getStream(url)
        .then(function (data) {
            // var parsed = JSON.parse(data);
            // console.log(parsed)
            console.log(data);


            res.send(`
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

            <div class=".container-fluid">
                <div class="input-group mb-3">
                    <input type="text" class ${data[0].quality}="form-control" value="${data[0].url}" id="myInput"  >

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

app.get('/login', (req, res) => {


    res.redirect('https://id.twitch.tv/oauth2/authorize?client_id=di5u96cpttmxapibsjpvmyr43x6hn3&redirect_uri=https://twitchm3u8.herokuapp.com/login/parm&response_type=token&scope=user:read:follows%20user:edit:follows%20user:read:subscriptions');


    // res.send(`
    //         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    //         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

           
    //         <a id="login"
    //         href="https://id.twitch.tv/oauth2/authorize?client_id=di5u96cpttmxapibsjpvmyr43x6hn3&redirect_uri=https://twitchm3u8.herokuapp.com/login/parm&response_type=token&scope=user:read:follows%20user:edit:follows%20user:read:subscriptions">Login</a>
            
            
    //         `)



    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});
app.get('/login/parm', (req, res) => {




    res.send(`
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style>
body{
    background: #0e1111!important;
color:white!important;
paddding:30px!important;
}
.col{
    text-align:center!important;
}

</style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <div class="container">
        <div class="row">
            <div class="col">
            <h2>Acces token</h2>
            <p>Copy the code below and return to the app</p>
            <input type="text" id="acces_token"/>
            <button onclick="myFunction()">Copy token</button>

            </div>
        </div>

    </div>

  <script>

  function myFunction() {
    var copyText = document.getElementById("acces_token");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }




    var parsedHash = new URLSearchParams(window.location.hash.substr(1));
    var access_token = parsedHash.get('access_token');
    $("#acces_token").val(access_token);


  </script>
    
    `)



    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});


const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`server start on ${PORT}`));