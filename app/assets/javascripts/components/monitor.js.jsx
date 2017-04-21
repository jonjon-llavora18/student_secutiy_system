var Monitor = React.createClass({
	getInitialState: function() {
		return {
			sec: 1,
			studentData: [],
			activePage: "initial"
		}
	},

	componentDidMount: function() {
    setInterval(this.checkData, 1000);
	},

	checkData: function() {
		var resetData = true;
		var $this = this;

	  $.ajax({
	    url: "/get_api",
	    dataType: "json",
	    data: {seconds: $this.state.sec}
	  }).success(function(data){
	    if (data != null){
	      resetData = false;
	    }

	    console.log(data);

	    if(data != null) {
		    $this.setState({ activePage: "success" });
		  } else {
		  	$this.setState({ activePage: "error" });
		  }

		  setTimeout(function(){ $this.setState({ activePage: "initial" }); }, 3000);

	  }).fail(function(){
	    console.log("fail");
	  }).complete(function(){
	    time = 1000;
	    $this.setState({
	    	sec: 1
	    });
	    if (!resetData) {
	      time = 2500;
	      $this.setState({
	      	sec: 1
	      });
	    }
	  });
	},

	render: function() {
		var activePage;
		if(this.state.activePage == "initial") {
			activePage = <InitialPage />;
		} 
		if (this.state.activePage == "error") {
			activePage = <ErrorPage />;
		}
		if (this.state.activePage == "success") {
			activePage = <DetailPage />;
		} 

		return (
			<div>
				<h1 className="home-header homeHeader">
					<img src="images/logo.png" />
					Student Security System
				</h1>
				{activePage}
		 	</div>
		)
	}
});
