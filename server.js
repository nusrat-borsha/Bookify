const express   = require("express"),
    axios       = require('axios')
    app         = express(),     
    app.use(express.static("public"));
    app.set("view engine", "ejs");
let i=0;
let flag=0;
app.get("/", function(req, res){ 
    res.render("index.ejs");
}
)

app.get("/book", (req, res) => { 
    const keywords = req.query.search;
    axios('https://www.googleapis.com/books/v1/volumes?q='+keywords)
    .then((response)=> {
        if(response.status==200){
            
            res.render("books", 
            {
                data : response.data,
            }); 
        }
      })

      .catch(function (response) {
        console.log("error",response);
      });
}
)

const port = process.env.PORT || 5000;
app.listen(port, function(){  //http://127.0.0.1:5000
    console.log("Server has started!!");
})
