var sec = 1;
function check_data() {
  resetData = true;
  $.ajax({
    url: "/get_api",
    dataType: "json",
    data: {seconds: sec}
  }).success(function(data){
    if (data != null){
      resetData = false;
    }
    console.log(data);
  }).fail(function(){
    console.log("Cannot load view");
  }).complete(function(){
    time = 1000;
    sec = 1;
    if (!resetData) {
      time = 5000;
      sec = 5;
    }
    setTimeout(function(){check_data();}, time);
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
				<DetailPage />
		 	</div>
		)
	}
});
