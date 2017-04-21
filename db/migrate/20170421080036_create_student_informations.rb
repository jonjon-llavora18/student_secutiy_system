class CreateStudentInformations < ActiveRecord::Migration
  def change
    create_table :student_informations do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :guardian_name
      t.string :guardian_contacts
      t.text   :student_photo
      t.string :address
      t.date   :birthday
    end
  end
end
