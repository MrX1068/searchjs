function openNav() {
    document.getElementById("navigation").style.width = "100%";
    document.getElementById("menuicon").style.display = "none";

   
    

}

function closeNav() {
    document.getElementById("navigation").style.width = "0";
    document.getElementById("menuicon").style.display = "block";

}

$('body').on('click', function(){
    if( parseInt( $('#navigation').css('width') ) > 0 ){
      closeNav();
    }
  });


  $('.search-course').search();

 
    
