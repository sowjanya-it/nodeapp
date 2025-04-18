var express = require('express');
var app = express();
const port = process.env.PORT || 8000;
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/" + "public/studreg.html");
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      stud_name:req.query.sname,
      stud_contact:req.query.scon,
      stud_gender:req.query.g,
      stud_address:req.query.sadd,
      stud_hobbies:req.query.shob,
      stus_skillset:req.query.sss,
      stud_highest_qualification:req.query.shq,
      stud_district:req.query.sdis
   };
   console.log(response);
   res.send(JSON.stringify(response));
});

   app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
