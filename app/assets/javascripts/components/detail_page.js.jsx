var DetailPage = React.createClass({
	render: function() {
		return (
			<div>
				<div className="student-information clearfix">
			    <div className="student-photo student-information-div">
			      <img src="https://unsplash.it/800/800/?random" className="student-photo-img" />
			    </div>
			    <div className="student-text-info student-information-div">
			      <span className="student-txt-inf student-name">{this.props.data.first_name} {this.props.data.last_name}</span>
			      <span className="student-txt-inf student-id">2nd year, ECE</span>
			    </div>
			  </div>
		 	</div>
		)
	}
});
