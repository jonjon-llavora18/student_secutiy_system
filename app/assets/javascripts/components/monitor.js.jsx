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
				<h1 className="home-header homeHeader">Student Security System</h1>

			  <div>
			    <div className="home-clock"></div>
			    <div className="school-announcement">
			      <p className="schoolAnnouncement">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			    </div>
			  </div>

			  <div className="student-information clearfix">
			    <div className="student-photo student-information-div">
			      <img src="dummy_101.jpg" className="student-photo-img" />
			    </div>
			    <div className="student-text-info student-information-div">
			      <span className="student-txt-inf student-name">Ivan Pilapil</span>
			      <span className="student-txt-inf student-id">F100033890</span>
			      <span className="student-txt-inf student-timein">IN: 03:44:36</span>
			    </div>
			  </div>

			  <div className="swipe-error">
			    <div className="student-photo student-information-div">
			      <img src="./images/error-mascott.png" className="error-mascott" />
			    </div>
			    <div className="student-text-info student-information-div">
			      <span className="student-txt-inf student-error-1">No Student</span>
			      <span className="student-txt-inf student-error-2">Found</span>
			    </div>
			  </div>
		 	</div>
		)
	}
});
