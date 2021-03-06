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

ActiveRecord::Schema.define(version: 20160205043041) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "pursuit", null: false
  end

  create_table "activity_taggings", force: :cascade do |t|
    t.integer "activity_id",  null: false
    t.integer "adventure_id", null: false
  end

  add_index "activity_taggings", ["activity_id", "adventure_id"], name: "index_activity_taggings_on_activity_id_and_adventure_id", unique: true, using: :btree
  add_index "activity_taggings", ["activity_id"], name: "index_activity_taggings_on_activity_id", using: :btree
  add_index "activity_taggings", ["adventure_id"], name: "index_activity_taggings_on_adventure_id", using: :btree

  create_table "adventures", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.integer  "author_id",   null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "adventures", ["author_id"], name: "index_adventures_on_author_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "path",         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "adventure_id", null: false
  end

  add_index "images", ["adventure_id"], name: "index_images_on_adventure_id", using: :btree

  create_table "user_adventures", force: :cascade do |t|
    t.integer  "adventure_id",                  null: false
    t.integer  "adventuree_id",                 null: false
    t.boolean  "completed",     default: false, null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "user_adventures", ["adventure_id"], name: "index_user_adventures_on_adventure_id", using: :btree
  add_index "user_adventures", ["adventuree_id"], name: "index_user_adventures_on_adventuree_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
