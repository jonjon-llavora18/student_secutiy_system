var sec = 1;
function checkData() {
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
        } else if(data == "empty") {
          $this.setState({ activePage: "initial" });
        } else {
          $this.setState({reset: false});
          $this.setState({ activePage: "error" });
        }
      }).fail(function(){
        $this.setState({ activePage: "initial" });
      }).complete(function(){
        $this.setState({time: 1000});
        $this.setState({sec: 1});
        if (!$this.state.reset) {
          $this.setState({time: 3000});
          $this.setState({sec: 5});
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
