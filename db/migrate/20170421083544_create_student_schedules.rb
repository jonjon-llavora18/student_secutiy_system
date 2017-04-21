class CreateStudentSchedules < ActiveRecord::Migration
  def change
    create_table :student_schedules do |t|
      t.integer  :student_information_id, null: false
      t.string   :subject
      t.datetime :schedule_start
      t.datetime :schedule_end
      t.timestamps
    end
  end
end
