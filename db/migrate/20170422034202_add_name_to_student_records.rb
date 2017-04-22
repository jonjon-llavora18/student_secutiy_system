class AddNameToStudentRecords < ActiveRecord::Migration
  def change
    add_column "student_records", "name", "string"
  end
end
