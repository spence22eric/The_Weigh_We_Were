const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const Models = require('./models');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('./assets/images/login_image.jpeg'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});
  
// Route to display dynamic src images
app.get("/dynamic", (req, res) => {
    imageList = [];
    imageList.push({ src: "./assets/images/login_image.jpeg", name: "login_image" });
    res.render("dynamic", { imageList });
});

app.use(require('./controllers/'));

app.use("/bootstrap", express.static(__dirname+"/node_modules/bootstrap/dist"))

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});