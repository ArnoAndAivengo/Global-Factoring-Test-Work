 // first slider
 $('.sl').slick( 
 	{dots: true});

// second slider
 $('.sl2').slick( 
 	{dots: false,
 	slidesToShow: 2
 	});

// dropdown menu event
 var dropdown = document.getElementsByClassName("dropdown-menu")[0];

 dropdown.onmouseleave = function(e) {
 	e.preventDefault();
	e = e || window.event;
     dropdown.style.display = "none";
 };

 dropdown.parentNode.onmouseover = function(e) {
 	e.preventDefault();
	e = e || window.event;
     dropdown.style.display = "block";
 };