var SearchForm = React.createClass({
	propTypes: {
		id: React.PropTypes.string
	},

	handleSubmit: function(e) {
		var inputVal = this.refs.inputSimulator.value;

		

		e.preventDefault();
	},

	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input className="form-control" type="text" ref="inputSimulator" />
			</form>
		)
	}
});