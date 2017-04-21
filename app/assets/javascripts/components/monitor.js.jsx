var Monitor = React.createClass({
    getInitialState: function() {
        return {
            sec: 1,
            studentData: [],
            activePage: "initial",
     				time: 3000
        }
    },

    componentDidMount: function() {
    	setInterval(this.checkData, this.state.time);
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
          $this.setState({ activePage: "success" });
        } else if(data == "error") {
          $this.setState({ activePage: "error" });
      	} else {
      		$this.setState({ activePage: "initial" });
      	}
      }).fail(function(){
        console.log("fail");
      }).complete(function(){
      	$this.setState({ sec: 1, time: 3000 });
        if (!resetData) {
        	$this.setState({ sec: 5, time: 5000 });
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
