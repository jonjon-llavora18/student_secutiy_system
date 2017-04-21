class AddTimeStampStudentInformation < ActiveRecord::Migration
  def change
    add_timestamps(:student_informations)
  end
end
