var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Xander123",
  database: "buddyFnder_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM lostpets", function (err, result, fields) {
    if (err) throw err;
    console.log(result, fields);
  });
});