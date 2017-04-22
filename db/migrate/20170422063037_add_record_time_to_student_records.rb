class AddRecordTimeToStudentRecords < ActiveRecord::Migration
  def change
    add_column "student_records", "record_time", "string"
  end
end
