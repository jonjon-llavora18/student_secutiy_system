var DetailPage = React.createClass({
	componentDidMount: function() {
		console.log(this.props.data);
	},

	render: function() {
		return (
			<div>
				<div className="student-information clearfix">
			    <div className="student-photo student-information-div">
			      <img src="../images/dummy_101.jpg" className="student-photo-img" />
			    </div>
			    <div className="student-text-info student-information-div">
			      <span className="student-txt-inf student-name">{this.props.data.first_name} {this.props.data.last_name}</span>
			      <span className="student-txt-inf student-id">Placeholder</span>
			      <span className="student-txt-inf student-timein">IN: 03:44:36</span>
			    </div>
			  </div>
		 	</div>
		)
	}
});
