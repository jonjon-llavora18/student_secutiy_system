class CreateStudentRecords < ActiveRecord::Migration
  def change
    create_table :student_records do |t|
      t.string  :description
      t.integer :student_information_id, null: false
      t.date    :record_date
      t.timestamps
    end

    add_index :student_records, :student_information_id
  end
end
