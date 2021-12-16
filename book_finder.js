const express   = require("express"),
    axios       = require('axios')
    app         = express(),     
    app.use(express.static("public"));
    app.set("view engine", "ejs");

app.get("/", function(req, res){ 
    res.render("index.ejs");
}
)

app.get("/book", (req, res) => { 
    const keywords = req.query.search;
    axios('https://www.googleapis.com/books/v1/volumes?q='+keywords)
    .then((response)=> {
        if(response.status==200){
            res.render("books", {data : response.data}); //data.items
        }
      })

      .catch(function (response) {
        console.log("error",response);
      });
}
)

app.listen(5000, function(){  //http://127.0.0.1:5000
    console.log("Server has started!!");
})
