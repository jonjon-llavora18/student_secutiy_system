function marquee(a, b) {
  var width = b.width();
  var start_pos = a.width();
  var end_pos = -width;

  function scroll() {
    if (b.position().left <= -width) {
      b.css("left", start_pos);
      scroll();
    }
    else {
      time = (parseInt(b.position().left, 10) - end_pos) * (90000 / (start_pos - end_pos));
      b.animate({
        "left": -width
      }, time, "linear", function() {
        scroll();
      });
    }
  }

  b.css({
    "width": width,
    "left": start_pos
  });
  scroll(a, b);

  b.mouseenter(function() {
    b.stop();
    b.clearQueue();
  });

  b.mouseleave(function() {
    scroll(a, b);
  });
}

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
      marquee($(".home-announcement"), $(".announcement-text"));
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
          $this.setState({ activePage: "success", studentData: data });

          var obj = document.createElement("audio");
	        obj.src="https://www.soundjay.com/button/sounds/beep-22.mp3";
	        obj.volume=1;
	        obj.autoPlay=false;
	        obj.preLoad=true;
	        obj.controls=true;

	        obj.play();
        } else if(data == "empty") {
          $this.setState({ activePage: "initial" });
        } else {
          $this.setState({reset: false});
          $this.setState({ activePage: "error" });

          var obj = document.createElement("audio");
	        obj.src="https://www.soundjay.com/button/sounds/beep-027.mp3";
	        obj.volume=1;
	        obj.autoPlay=false;
	        obj.preLoad=true;
	        obj.controls=true;

	        obj.play();
        }
      }).fail(function(){
        $this.setState({ activePage: "initial" });
      }).complete(function(){
      	$this.setState({ sec: 1, time: 1000 });
        if (!$this.state.reset) {
        	$this.setState({ sec: 5, time: 3000 });
        }
        setTimeout(function(){$this.checkData();}, $this.state.time);
      });
    },

    render: function() {
        var activePage;
        if(this.state.activePage == "initial") {
            activePage = <InitialPage date_today={this.props.date_today} />;
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
                    BIBO GLOBAL OPPORTUNITY
                  <span className="date_today">{this.props.date_today}</span>
                </h1>
                {activePage}
                <div className="home-announcement">
        					<p className="announcement-text">
        						<strong>Announcement:</strong>
        						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        					</p>
        				</div>
             </div>
        )
    }
});
