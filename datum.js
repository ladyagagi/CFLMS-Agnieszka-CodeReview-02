'use strict';
(function () {
	function init() {
		var datum = new Date();
		document.getElementById('zeit')
			.innerHTML = datum;
	}
	document.addEventListener("DOMContentLoaded", function () {
		init();
	});
}());