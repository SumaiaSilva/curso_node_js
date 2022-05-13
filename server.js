const express = require('express'); //criação de um servidor para mostrar o que está sendo feito
const app = express(); //instanciando

app.set("view engine", "ejs");

//rotas
app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/ serviços de forma mais fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title:"I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe Simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle, 
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

//comando para rodar
app.listen(8080);
console.log("Rodando");