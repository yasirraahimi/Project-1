function sLogo(){
    console.log("Buton clicked successfully...")
}
function topim(){
    console.log("clicked")
    window.location.href="topim.html";
}
function home(){
    console.log(" home clicked")
    window.location.href="index.html";
}




// GENRE FUNCTION 
function genreFun(){
    console.log("Genre clicked");
  var x = document.getElementById("liGenre");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }



  // CONTACT FUNCTION 
  function contactFun(){
    console.log(" Contact clicked")
    window.location.href="contact.html";
  }
  function trendingFun(){
    console.log(" trending clicked")
    window.location.href="trending.html";
  }
  function accountFun(){
    console.log(" account clicked")
    window.location.href="account.html";
  }
  function netflixFun(){
    console.log(" netflix clicked")
    window.location.href="netflix.html";
  }