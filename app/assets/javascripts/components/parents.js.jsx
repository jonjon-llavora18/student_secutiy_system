var Parents = React.createClass({
  getInitialState: function() {
    return {
      studentData: [],
    }
  },

  componentDidMount: function() {
    this.studentInformation();
  },

  studentInformation: function() {
    var $this = this;

    $.ajax({
      url: "/student_api",
      dataType: "json"
    }).success(function(data){
      $this.setState({
        studentData: data
      });
    });
  },

  render: function() {
    var studentDatas = this.state.studentData;
    var dataList = studentDatas.map(function(item, key) {
      return (
        <tr key={key}>
          <td>{item.record_date}</td>
          <td>{item.updated_at}</td>
          <td>08:45:00 PM</td>
        </tr>
      );
    });

    return (
      <div>
        <div className="clearfix parent-header">
          <div className="pull-right">
            <span className="parent-student-id">Student ID: F100033890</span>
          </div>
        </div>

        <div className="clearfix parent-student-information">
          <div className="pull-left">
            <img src="../images/dummy_101.jpg" className="parent-student-photo" />
          </div>
          <div className="pull-left parent-student-inf">
            <div className="clearfix parent-inf-wrap">
              <span className="pull-left parent-label">Name :</span>
              <span className="pull-left parent-text">James Ivan Pilapil</span>
            </div>
            <div className="clearfix parent-inf-wrap">
              <span className="pull-left parent-label">Address :</span>
              <span className="pull-left parent-text">Fort Bonifacio, BGC, Taguig 3393</span>
            </div>
            <div className="clearfix parent-inf-wrap">
              <span className="pull-left parent-label">Phone Number :</span>
              <span className="pull-left parent-text">+639175596008</span>
            </div>
            <div className="clearfix parent-inf-wrap">
              <span className="pull-left parent-label">Birthdate :</span>
              <span className="pull-left parent-text">January 08 1999</span>
            </div>
            <div className="clearfix parent-inf-wrap">
              <span className="pull-left parent-label">Email :</span>
              <span className="pull-left parent-text">ivanpilapil@bibo.com.ph</span>
            </div>
          </div>
        </div>

        <table className="student-checkin-table table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time In</th>
              <th>Time Out</th>
            </tr>
          </thead>
          <tbody>
            {dataList}
          </tbody>
        </table>
      </div>
    )
  }
});
