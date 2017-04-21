var Monitor = React.createClass({
	getInitialState: function() {
		return {
			studentData: []
		}
	},

	componentDidMount: function() {
		$.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
      success: function(data) {
        data.map(function(item, index) {
         	this.state.studentData.push(item.name);
        });
        console.log(this.state.studentData);
      },
      type: 'GET'
   });
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