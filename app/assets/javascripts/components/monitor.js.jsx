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
			<h1 class="home-header homeHeader">Student Security System</h1>

		  <div>
		    <div class="home-clock"></div>
		    <!-- <div class="school-announcement">
		      <p class="schoolAnnouncement">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
		    </div> -->
		  </div>

		  <div class="student-information clearfix">
		    <div class="student-photo student-information-div">
		      <%= image_tag "dummy_101.jpg", class: "student-photo-img" %>
		    </div>
		    <div class="student-text-info student-information-div">
		      <span class="student-txt-inf student-name">Ivan Pilapil</span>
		      <span class="student-txt-inf student-id">F100033890</span>
		      <span class="student-txt-inf student-timein">IN: 03:44:36</span>
		    </div>
		  </div>

		  <div class="swipe-error">
		    <div class="student-photo student-information-div">
		      <%= image_tag "error-mascott.png", class: "error-mascott" %>
		    </div>
		    <div class="student-text-info student-information-div">
		      <span class="student-txt-inf student-error-1">No Student</span>
		      <span class="student-txt-inf student-error-2">Found</span>
		    </div>
		  </div>
		)
	}
});