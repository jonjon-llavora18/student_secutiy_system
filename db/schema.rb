# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170422063037) do

  create_table "student_informations", force: :cascade do |t|
    t.string   "first_name",        limit: 255
    t.string   "last_name",         limit: 255
    t.string   "phone_number",      limit: 255
    t.string   "guardian_name",     limit: 255
    t.string   "guardian_contacts", limit: 255
    t.text     "student_photo",     limit: 65535
    t.string   "address",           limit: 255
    t.date     "birthday"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "student_records", force: :cascade do |t|
    t.string   "description",            limit: 255
    t.integer  "student_information_id", limit: 4,   null: false
    t.date     "record_date"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name",                   limit: 255
    t.string   "record_time",            limit: 255
  end

  add_index "student_records", ["student_information_id"], name: "index_student_records_on_student_information_id", using: :btree

  create_table "student_schedules", force: :cascade do |t|
    t.integer  "student_information_id", limit: 4,   null: false
    t.string   "subject",                limit: 255
    t.datetime "schedule_start"
    t.datetime "schedule_end"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
