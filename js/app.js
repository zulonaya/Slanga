//search

$('#close').click(function(){
  $(this).parent().toggleClass('closed');
    $(this).prev().focus();
});

setTimeout(function() {
    $('#close').click();
}, 100);

setTimeout(function() {
    $('#close').click();
}, 1500);

//nav bar
$(".toggleNav").click(function () {
    $("#subnav").toggleClass("active");
    $(".toggleNavButton").toggleClass("active");
 });


//login page
 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

//pagination
var btns = document.querySelectorAll('.btn-pagination');
var paginationWrapper = document.querySelector('.pagination-wrapper');
var bigDotContainer = document.querySelector('.big-dot-container');
var littleDot = document.querySelector('.little-dot');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', btnClick);
}

function btnClick() {
  if(this.classList.contains('btn--prev')) {
    paginationWrapper.classList.add('transition-prev');
  } else {
    paginationWrapper.classList.add('transition-next');  
  }
  
  var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if(paginationWrapper.classList.contains('transition-next')) {
    paginationWrapper.classList.remove('transition-next')
  } else if(paginationWrapper.classList.contains('transition-prev')) {
    paginationWrapper.classList.remove('transition-prev')
  }
}