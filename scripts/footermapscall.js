var popup_map = document.querySelector(".modal-map");
var close = popup_map.querySelector(".modal-close");

close.addEventListener("click", function ( evt) {
	evt.preventDefault();
	popup_map.classList.remove("modal-show");
} );

var footerscall = document.querySelector(".footer-mapscall");

	footerscall.addEventListener("click", function( evt ) {
	evt.preventDefault();
	popup_map.classList.add("modal-show");
});