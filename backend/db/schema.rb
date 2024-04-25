# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_04_25_231402) do
  create_table "question", force: :cascade do |t|
    t.integer "quiz_id"
    t.string "question"
    t.string "description"
    t.string "options"
    t.string "answer"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quiz_id"], name: "index_question_on_quiz_id"
  end

  create_table "quiz", force: :cascade do |t|
    t.string "status"
    t.string "recipient_name"
    t.string "title"
    t.time "time_limit"
    t.datetime "expiry_date"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "key"
    t.index ["key"], name: "index_quiz_on_key", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "question", "quizzes"
end
