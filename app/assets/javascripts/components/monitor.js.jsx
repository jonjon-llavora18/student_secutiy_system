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
				<DetailPage />
		 	</div>
		)
	}
});