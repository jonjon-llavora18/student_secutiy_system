var SearchForm = React.createClass({
	propTypes: {
		id: React.PropTypes.string
	},

	onSubmit: function(e) {
		alert("Hello There");
		e.preventDefault();
	},

	render: function() {
		return (
			<form onSubmit={this.onSubmit}>
				<input className="form-control" type="text" />
			</form>
		)
	}
});