var Parents = React.createClass({
  getInitialState: function() {
    return {
      studentData: [],
    }
  },

  componentDidMount: function() {
    var $this = this;
    this.studentInformation();

    setInterval(function() {
      $this.studentInformation();
    }, 4000);
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
          <td>{item.record_time}</td>
          <td>{item.description}</td>
        </tr>
      );
    });

    return (
      <div>
        <table className="student-checkin-table table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Description</th>
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
