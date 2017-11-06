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

ActiveRecord::Schema.define(version: 20171104225306) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievement_ownerships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "achievement_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["achievement_id"], name: "index_achievement_ownerships_on_achievement_id"
    t.index ["user_id", "achievement_id"], name: "index_achievement_ownerships_on_user_id_and_achievement_id", unique: true
    t.index ["user_id"], name: "index_achievement_ownerships_on_user_id"
  end

  create_table "achievements", force: :cascade do |t|
    t.string "slug", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.integer "value", null: false
    t.string "language"
    t.string "icon_url"
    t.integer "owner_count", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_achievements_on_slug", unique: true
  end

  create_table "quests", force: :cascade do |t|
    t.string "title", null: false
    t.string "github_url", null: false
    t.boolean "state", default: false, null: false
    t.text "body"
    t.integer "reward"
    t.integer "assignee_id"
    t.bigint "repository_id"
    t.index ["repository_id"], name: "index_quests_on_repository_id"
  end

  create_table "repositories", force: :cascade do |t|
    t.string "name", null: false
    t.string "github_url", null: false
    t.string "clone_url", null: false
    t.integer "stars", null: false
    t.text "description"
    t.string "language"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_repositories_on_name", unique: true
    t.index ["user_id"], name: "index_repositories_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "token"
    t.string "login"
    t.string "name"
    t.string "email"
    t.string "github_url"
    t.string "location"
    t.string "avatar_url"
    t.text "bio"
    t.integer "public_repos"
    t.integer "followers"
    t.integer "following"
    t.boolean "hireable"
    t.datetime "github_created_at"
    t.datetime "github_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["login"], name: "index_users_on_login", unique: true
  end

end
