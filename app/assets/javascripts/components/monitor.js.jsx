var Monitor = React.createClass({
    getInitialState: function() {
        return {
            sec: 1,
            studentData: [],
            activePage: "initial",
     				time: 1000
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
          $this.setState({ activePage: "success", studentData: data });

          var obj = document.createElement("audio");
	        obj.src="https://www.soundjay.com/misc/sounds/censor-beep-01.mp3";
	        obj.volume=0.10;
	        obj.autoPlay=false;
	        obj.preLoad=true;
	        obj.controls=true;       
	 
	        obj.play();
        } else if(data == "error") {
        	resetData = false;
          $this.setState({ activePage: "error" });
      	} else {
      		$this.setState({ activePage: "initial" });
      	}
      }).fail(function(){
        console.log("fail");
      }).complete(function(){
      	$this.setState({ sec: 1, time: 1000 });
        if (!resetData) {
        	$this.setState({ sec: 5, time: 3000 });
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
