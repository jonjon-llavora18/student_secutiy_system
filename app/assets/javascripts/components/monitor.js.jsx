var sec = 1;
var hasData = false;
function check_data() {
  if (sec <= 5) {
    hasData = false;
    sec += 1
  } else {
    sec = 1
  }
  $.ajax({
    url: "/get_api",
    dataType: "json",
    data: {seconds: sec}
  }).success(function(data){
  }).fail(function(){
    console.log("Cannot load view");
  }).complete(function(){
    setTimeout(function(){check_data();}, 1000);
  });
}

var Monitor = React.createClass({
	getInitialState: function() {
		return {
			studentData: []
		}
	},
	componentDidMount: function() {
    check_data();
	},

	render: function() {
		return (
			<div>
				<h1 className="home-header homeHeader">
					<img src="images/logo.png" />
					Student Security System
				</h1>
				<ErrorPage />
		 	</div>
		)
	}
});
