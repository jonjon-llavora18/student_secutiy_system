var Monitor = React.createClass({
    getInitialState: function() {
      return {
        studentData: [],
        activePage: "initial",
        sec: 1,
        reset: true,
        time: 1000
      }
    },

    componentDidMount: function() {
      this.checkData();
    },

    checkData: function() {
      var $this = this
      $this.setState({reset: true});
      $.ajax({
        url: "/get_api",
        dataType: "json",
        data: {seconds: $this.state.sec}
      }).success(function(data){
        if (data != null){
          $this.setState({reset: false});
          $this.setState({ activePage: "success" });
              
          var obj = document.createElement("audio");
	        obj.src="https://www.soundjay.com/misc/sounds/censor-beep-01.mp3";
	        obj.volume=0.10;
	        obj.autoPlay=false;
	        obj.preLoad=true;
	        obj.controls=true;       
	 
	        obj.play();
        } else if(data == "empty") {
          $this.setState({ activePage: "initial" });
        } else {
          $this.setState({reset: false});
          $this.setState({ activePage: "error" });
        }
      }).fail(function(){
        $this.setState({ activePage: "initial" });
      }).complete(function(){
      	$this.setState({ sec: 1, time: 1000 });
        if (!resetData) {
        	$this.setState({ sec: 5, time: 3000 });
        }
        setTimeout(function(){$this.checkData();}, $this.state.time);
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
            activePage = <DetailPage data={this.state.studentData} />;
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
