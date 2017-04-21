var ErrorPage = React.createClass({
	render: function() {
		return (
			<div>
				<div className="swipe-error">
			    <div className="student-photo student-information-div">
			      <img src="../images/error-mascott.png" className="error-mascott" />
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
