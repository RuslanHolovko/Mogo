

window.onload = function(){

	$('.to-top').click(function(){
		$("html, body").animate({scrollTop:0}, "slow");
	});

	$(".header-button").click(function(){
		$("html, body").animate({
			scrollTop: $(".about").position().top
		},1000);
	});


	$("a[rel='m_PageScroll2id']").mPageScroll2id({
		// highlightSelector: ".mobile-menu-list a",
		// forceSingleHighlight: true,
		clickedClass: "is-active",
		onComplete: function(){
			slideout.close ();
		}

	});


	wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       false,       // default
		live:         true        // default
		}
	)
	wow.init();

	//Slideout Plugin

	var slideout = new Slideout({
		'panel' : document.querySelector(".page"),
		'menu' : document.querySelector(".mobile-menu"),
		'padding' : 256,
		'tolerance' : 100,
		'easing': 'linear'
	});

	// slideout.disableTouch();


	//Toggle button
	var mnuBtn = document.querySelector(".fixed-top-line-button");
	mnuBtn.addEventListener('click', function (){
		slideout.toggle();
	});

	document.querySelector(".page-overlay").onclick = function () {
		slideout.close();
	};


	//Fixed page-top-line
	var fixed = document.querySelector('.fixed-top-line');

	slideout.on('translate', function(translated) {
	  fixed.style.transform = 'translateX(' + translated + 'px)';
	});

	slideout.on('beforeopen', function () {
	  fixed.style.transition = 'transform 300ms ease';
	  fixed.style.transform = 'translateX(256px)';
	});

	slideout.on('beforeclose', function () {
	  fixed.style.transition = 'transform 300ms ease';
	  fixed.style.transform = 'translateX(0px)';
	});

	slideout.on('open', function () {
	  fixed.style.transition = '';
	});

	slideout.on('close', function () {
	  fixed.style.transition = '';
	});

	//Animate Hamburger icon

	slideout.on('beforeopen', function(){
		document.querySelector(".page-overlay").classList.add("page-overlay-opened");
	});

	slideout.on('open', function(){
		mnuBtn.classList.add('openedbtn');
		document.querySelector(".page").classList.add("slideout-panel-open");
		// document.querySelector(".page-overlay").style.zIndex="10";
	});

	slideout.on('close', function(){
		mnuBtn.classList.remove('openedbtn');
		document.querySelector(".page").classList.remove("slideout-panel-open");
		document.querySelector(".page-overlay").classList.remove("page-overlay-opened");
		// document.querySelector(".page-overlay").style.zIndex="-10";
	});

	var el = document.querySelector(".accordion");
	new Accordion(el, {
	});

var headerHeight = $('.header').innerHeight();

	$(window).scroll(function(){
		if($(this).scrollTop() >= headerHeight/6 ){
			$(".fixed-top-line").addClass("fixed-top-line--red");
			$(".fixed-top-line-logo").addClass("fixed-top-line-logo-grey");
			$(".line").addClass("line-grey");
		}else{
			$(".fixed-top-line").removeClass("fixed-top-line--red");
			$(".fixed-top-line-logo").removeClass("fixed-top-line-logo-grey");
			$(".line").removeClass("line-grey");
		}
	});

	$(".reviews-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav: true,
		autoHeight: true,
		items:1,
		animateOut: 'fadeOut',
		animateIn: 'flipInX',
		dots: false,
		navText: [],
		responsive: {
			0:{
			
			},
			600:{
				
			}
		}
	});

		$(".reviewsSecond-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav: true,
		autoHeight: true,
		items:1,
		animateOut: 'fadeOut',
		animateIn: 'flipInX',
		dots: false,
		navText: [],
		responsive: {
			0:{
			
			},
			600:{
				
			}
		}
	});

		var btn   		= document.querySelector(".button-feedBack")
			modal 		= document.querySelector(".dialog")
			closeModal	= document.querySelector(".closeModal")
			html		= document.querySelector("html")

	btn.addEventListener('click', function(){
		modal.showModal();
		// html.style.overflow = "hidden";
	});

	closeModal.addEventListener('click', function(){
		modal.close();
	});

var mapMarker = document.querySelector('.googleMapMarker');
var	mapMarkerEl = document.getElementsByClassName('hiddenEl');

mapMarker.addEventListener('click', function () {
	// alert(mapMarkerEl.length);
	for(var i = 0; i < mapMarkerEl.length; i ++){
		mapMarkerEl[i].style.transform = "scale(0)"
	};
	// mapMarkerEl[0].style.opacity = "0"
	this.style.transform = "translateX(-100%)";
});

//Create Desktop Footer

var w = window.innerWidth;

if (w >= 1140) {

	// document.querySelector(".mobile-footer").style.display = "none";

	var divMogo = document.createElement("div");
	divMogo.className = ("desktop-footer-mogo");
	
	var divBlogs = document.createElement("div");
	divBlogs.className = ("desktop-footer-blogs");

	var divInstagram = document.createElement("div");
	divInstagram.className = ("desktop-footer-instagram");

	var container = document.createElement("div");
	container.className = ("container");
	
	var page = document.querySelector(".page");
	var footer = document.createElement("footer");

	footer.className = ("desktop-footer");
	footer.appendChild(container);
	page.appendChild(footer);

	//divMogo
	divMogo.innerHTML = ("<a class=\"fixed-top-line-logo\" href=\"#\">MoGo</a> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis nobis rem quasi, fuga, quis omnis illum quas magni distinctio.</p> <a class=\"folowers\" href=\"#\"><strong>15K</strong> followers</a> <div class=\"form-container\"><span>Follow Us:</span>  <a href=\"#\"><img src=\"./img/icons/facebook-footer.svg\"/></a> <a href=\"#\"><img src=\"./img/icons/twitter-footer.svg\"/></a> <a href=\"#\"><img src=\"./img/icons/instagram-footer.svg\"/></a> <div><form><input required placeholder=\"Enter your Email\" type=\"email\"/> <button type=\"submit\">Subscribe</button> </form></div> </div> ");

	//divBlogs
	divBlogs.innerHTML = ("<h4>BLOGS</h4> <ul class=\"footer-blogs-list\"><li><img src=\"./img/footer-blog-1.jpg\"/> <span class=\"blogs-list-descr\">lorem ipsum dolor sit amet!</span> <span class=\"blogs-list-date\">19 june, 2016</span></li> <li><img src=\"./img/footer-blog-2.jpg\"/> <span class=\"blogs-list-descr\">lorem ipsum dolor sit amet!</span> <span class=\"blogs-list-date\">19 june, 2016</span></li> <li><img src=\"./img/footer-blog-3.jpg\"/> <span class=\"blogs-list-descr\">lorem ipsum dolor sit amet!</span> <span class=\"blogs-list-date\">19 june, 2016</span></li></ul> ");

	//divInstagram
	divInstagram.innerHTML = (" <h4>INSTAGRAM</h4> <ul class=\"footer-instagram-list\"> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> <li> <img src=\"./img/instagram.jpg\"/> </li> </ul> <a href=\"#\">View more photos</a>");


	container.appendChild(divMogo);
	container.appendChild(divBlogs);
	container.appendChild(divInstagram);

	var input = document.querySelector(".form-container div form input[type=email]");
	input.setAttribute("placeholder", "Enter your email");

} else {
	return false;
}


};





	
