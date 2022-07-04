
$(document).ready(function () {

  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });


  //post
  if(window.location.href.indexOf("index") > -1){
  var posts = [
    {
      title: "prueba de titulo1",
      date: "publicado el dia " + moment().date() + " del mes de " + moment().format("MMMM") + " " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur non labore accusantium explicabo magni reprehenderit cupiditate exercitationem dolorum dolor possimus illum culpa sunt reiciendis, voluptatum sit libero, esse magnam.",
    },
    {
      title: "prueba de titulo2",
      date: "publicado el dia " + moment().date() + " del mes de " + moment().format("MMMM") + " " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur non labore accusantium explicabo magni reprehenderit cupiditate exercitationem dolorum dolor possimus illum culpa sunt reiciendis, voluptatum sit libero, esse magnam.",

    },
    {
      title: "prueba de titulo3",
      date: "publicado el dia " + moment().date() + " del mes de " + moment().format("MMMM") + " " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur non labore accusantium explicabo magni reprehenderit cupiditate exercitationem dolorum dolor possimus illum culpa sunt reiciendis, voluptatum sit libero, esse magnam.",
    },
    {
      title: "prueba de titulo4",
      date: "publicado el dia " + moment().date() + " del mes de " + moment().format("MMMM") + " " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur non labore accusantium explicabo magni reprehenderit cupiditate exercitationem dolorum dolor possimus illum culpa sunt reiciendis, voluptatum sit libero, esse magnam.",
    },
    {
      title: "prueba de titulo5",
      date: "publicado el dia " + moment().date() + " del mes de " + moment().format("MMMM") + " " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur non labore accusantium explicabo magni reprehenderit cupiditate exercitationem dolorum dolor possimus illum culpa sunt reiciendis, voluptatum sit libero, esse magnam.",
    },
    {
      title: "prueba de titulo6",
      date: "publicado el dia " + moment().date() + " del mes de " + moment().format("MMMM") + " " + moment().format("YYYY"),
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur non labore accusantium explicabo magni reprehenderit cupiditate exercitationem dolorum dolor possimus illum culpa sunt reiciendis, voluptatum sit libero, esse magnam.",
    },

  ]
  
  posts.forEach((item, index) => {
    var post = `

    <article class="post">
    <h2> ${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>${item.content}</p>
    <a href="#" class="button-more">leer mas</a>
    </article>`;

    $("#post").append(post)
  });
  }
  // Reloj
  if(window.location.href.indexOf("reloj") > -1){
  var hora = moment().format("hh:mm:ss");
  $("#reloj").html(hora)
  }
 
  

  // Selectores de tema

  var theme = $("#theme");

  $("#toGreen").click(function () {
    theme.attr("href", "css/green.css")
  });


  $("#toRed").click(function () {
    theme.attr("href", "css/red.css")
  });


  $("#toBlue").click(function () {
    theme.attr("href", "css/blue.css")
  });


  //subir scroll

  $(".subir").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });


  //  Guardar datos en el localStorage de inicio y cierre de session
  if(window.location.href.indexOf("reloj") > -1){
  $("form").submit(function () {
    var formNombre = $("#formNombre").val();

    localStorage.setItem("formNombre", formNombre)
  })

  var formNombre = localStorage.getItem("formNombre")
  if (formNombre != null && formNombre != undefined) {
    var about = $("#about p")

    about.html("<br> Bienvenido " + formNombre);
    about.append("<a href='#' id='logout'> Cerrar sesion </a>");
    $("#login").hide();

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    })

  }
  }
  // Acordion para about

  if(window.location.href.indexOf("about") > -1)
  $("#acordion").accordion();



});

