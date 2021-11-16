const express = require("express");
const path = require("path");

// Create our Express app
const app = express();

// Indicar a exoress qye use EJS como view engine
app.set("view engine", "ejs");

// Base middlewares
app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Define routes
app.get("/profile/:id", function(req, res) {
    res.render("profile", { user: req.params.id })
});

app.get("/blog", function(req, res) {
    res.render("blog", { blog: { title: "Mw first blog", popular: false } })
});

app.get("/blogs", function(req, res) {
    res.render("blogs", { blogs: [
        { title: "My first blog", popular: false },
        { title: "My second blog", popular: true },
        { title: "My third blog", popular: false }
    ]})
});

// Start server
const port = 4000;
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.adress().port}`);
});

