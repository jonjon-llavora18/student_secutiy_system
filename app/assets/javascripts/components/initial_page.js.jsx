function digitalClock() {
	function clock() {
		var time = new Date(),
		hours = time.getHours(),
		minutes = time.getMinutes(),
		seconds = time.getSeconds();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12;

		document.querySelectorAll(".home-clock")[0].innerHTML = "<span class='box-hr'>" + z(hours) + "</span>" + ":" + "<span class='box-hr'>" + z(minutes) + "</span>" + ":" + "<span class='box-hr'>" + z(seconds) + "</span> " + ampm;

		function z(standIn) {
			if (standIn < 10) {
				standIn = "0" + standIn
			}
			return standIn;
		}
	}
	setInterval(clock, 1000);
}

var InitialPage = React.createClass({
	componentDidMount: function() {
		digitalClock();
	},

	render: function() {
		return (
			<div className="home-clock"></div>
		)
	}
});
