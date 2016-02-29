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

ActiveRecord::Schema.define(version: 20160228195565) do

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.string   "confirmation_token",     limit: 255
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email",      limit: 255
    t.integer  "failed_attempts",        limit: 4,   default: 0,  null: false
    t.string   "unlock_token",           limit: 255
    t.datetime "locked_at"
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  add_index "admins", ["confirmation_token"], name: "index_admins_on_confirmation_token", unique: true, using: :btree
  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree
  add_index "admins", ["unlock_token"], name: "index_admins_on_unlock_token", unique: true, using: :btree

  create_table "answers", force: :cascade do |t|
    t.integer  "question_id",            limit: 4
    t.text     "text",                   limit: 65535
    t.text     "short_text",             limit: 65535
    t.text     "help_text",              limit: 65535
    t.integer  "weight",                 limit: 4
    t.string   "response_class",         limit: 255
    t.string   "reference_identifier",   limit: 255
    t.string   "data_export_identifier", limit: 255
    t.string   "common_namespace",       limit: 255
    t.string   "common_identifier",      limit: 255
    t.integer  "display_order",          limit: 4
    t.boolean  "is_exclusive"
    t.integer  "display_length",         limit: 4
    t.string   "custom_class",           limit: 255
    t.string   "custom_renderer",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "default_value",          limit: 255
    t.string   "api_id",                 limit: 255
    t.string   "display_type",           limit: 255
    t.string   "input_mask",             limit: 255
    t.string   "input_mask_placeholder", limit: 255
  end

  add_index "answers", ["api_id"], name: "uq_answers_api_id", unique: true, using: :btree

  create_table "dependencies", force: :cascade do |t|
    t.integer  "question_id",       limit: 4
    t.integer  "question_group_id", limit: 4
    t.string   "rule",              limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dependency_conditions", force: :cascade do |t|
    t.integer  "dependency_id",  limit: 4
    t.string   "rule_key",       limit: 255
    t.integer  "question_id",    limit: 4
    t.string   "operator",       limit: 255
    t.integer  "answer_id",      limit: 4
    t.datetime "datetime_value"
    t.integer  "integer_value",  limit: 4
    t.float    "float_value",    limit: 24
    t.string   "unit",           limit: 255
    t.text     "text_value",     limit: 65535
    t.string   "string_value",   limit: 255
    t.string   "response_other", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "question_groups", force: :cascade do |t|
    t.text     "text",                   limit: 65535
    t.text     "help_text",              limit: 65535
    t.string   "reference_identifier",   limit: 255
    t.string   "data_export_identifier", limit: 255
    t.string   "common_namespace",       limit: 255
    t.string   "common_identifier",      limit: 255
    t.string   "display_type",           limit: 255
    t.string   "custom_class",           limit: 255
    t.string   "custom_renderer",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "api_id",                 limit: 255
  end

  add_index "question_groups", ["api_id"], name: "uq_question_groups_api_id", unique: true, using: :btree

  create_table "questions", force: :cascade do |t|
    t.integer  "survey_section_id",      limit: 4
    t.integer  "question_group_id",      limit: 4
    t.text     "text",                   limit: 65535
    t.text     "short_text",             limit: 65535
    t.text     "help_text",              limit: 65535
    t.string   "pick",                   limit: 255
    t.string   "reference_identifier",   limit: 255
    t.string   "data_export_identifier", limit: 255
    t.string   "common_namespace",       limit: 255
    t.string   "common_identifier",      limit: 255
    t.integer  "display_order",          limit: 4
    t.string   "display_type",           limit: 255
    t.boolean  "is_mandatory"
    t.integer  "display_width",          limit: 4
    t.string   "custom_class",           limit: 255
    t.string   "custom_renderer",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "correct_answer_id",      limit: 4
    t.string   "api_id",                 limit: 255
  end

  add_index "questions", ["api_id"], name: "uq_questions_api_id", unique: true, using: :btree

  create_table "refinery_image_translations", force: :cascade do |t|
    t.integer  "refinery_image_id", limit: 4,   null: false
    t.string   "locale",            limit: 255, null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "image_alt",         limit: 255
    t.string   "image_title",       limit: 255
  end

  add_index "refinery_image_translations", ["locale"], name: "index_refinery_image_translations_on_locale", using: :btree
  add_index "refinery_image_translations", ["refinery_image_id"], name: "index_refinery_image_translations_on_refinery_image_id", using: :btree

  create_table "refinery_images", force: :cascade do |t|
    t.string   "image_mime_type", limit: 255
    t.string   "image_name",      limit: 255
    t.integer  "image_size",      limit: 4
    t.integer  "image_width",     limit: 4
    t.integer  "image_height",    limit: 4
    t.string   "image_uid",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_title",     limit: 255
    t.string   "image_alt",       limit: 255
  end

  create_table "refinery_page_part_translations", force: :cascade do |t|
    t.integer  "refinery_page_part_id", limit: 4,     null: false
    t.string   "locale",                limit: 255,   null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.text     "body",                  limit: 65535
  end

  add_index "refinery_page_part_translations", ["locale"], name: "index_refinery_page_part_translations_on_locale", using: :btree
  add_index "refinery_page_part_translations", ["refinery_page_part_id"], name: "index_refinery_page_part_translations_on_refinery_page_part_id", using: :btree

  create_table "refinery_page_parts", force: :cascade do |t|
    t.integer  "refinery_page_id", limit: 4
    t.string   "slug",             limit: 255
    t.text     "body",             limit: 65535
    t.integer  "position",         limit: 4
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title",            limit: 255
  end

  add_index "refinery_page_parts", ["id"], name: "index_refinery_page_parts_on_id", using: :btree
  add_index "refinery_page_parts", ["refinery_page_id"], name: "index_refinery_page_parts_on_refinery_page_id", using: :btree

  create_table "refinery_page_translations", force: :cascade do |t|
    t.integer  "refinery_page_id", limit: 4,   null: false
    t.string   "locale",           limit: 255, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "title",            limit: 255
    t.string   "custom_slug",      limit: 255
    t.string   "menu_title",       limit: 255
    t.string   "slug",             limit: 255
  end

  add_index "refinery_page_translations", ["locale"], name: "index_refinery_page_translations_on_locale", using: :btree
  add_index "refinery_page_translations", ["refinery_page_id"], name: "index_refinery_page_translations_on_refinery_page_id", using: :btree

  create_table "refinery_pages", force: :cascade do |t|
    t.integer  "parent_id",           limit: 4
    t.string   "path",                limit: 255
    t.string   "slug",                limit: 255
    t.string   "custom_slug",         limit: 255
    t.boolean  "show_in_menu",                    default: true
    t.string   "link_url",            limit: 255
    t.string   "menu_match",          limit: 255
    t.boolean  "deletable",                       default: true
    t.boolean  "draft",                           default: false
    t.boolean  "skip_to_first_child",             default: false
    t.integer  "lft",                 limit: 4
    t.integer  "rgt",                 limit: 4
    t.integer  "depth",               limit: 4
    t.string   "view_template",       limit: 255
    t.string   "layout_template",     limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "refinery_pages", ["depth"], name: "index_refinery_pages_on_depth", using: :btree
  add_index "refinery_pages", ["id"], name: "index_refinery_pages_on_id", using: :btree
  add_index "refinery_pages", ["lft"], name: "index_refinery_pages_on_lft", using: :btree
  add_index "refinery_pages", ["parent_id"], name: "index_refinery_pages_on_parent_id", using: :btree
  add_index "refinery_pages", ["rgt"], name: "index_refinery_pages_on_rgt", using: :btree

  create_table "refinery_resource_translations", force: :cascade do |t|
    t.integer  "refinery_resource_id", limit: 4,   null: false
    t.string   "locale",               limit: 255, null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "resource_title",       limit: 255
  end

  add_index "refinery_resource_translations", ["locale"], name: "index_refinery_resource_translations_on_locale", using: :btree
  add_index "refinery_resource_translations", ["refinery_resource_id"], name: "index_refinery_resource_translations_on_refinery_resource_id", using: :btree

  create_table "refinery_resources", force: :cascade do |t|
    t.string   "file_mime_type", limit: 255
    t.string   "file_name",      limit: 255
    t.integer  "file_size",      limit: 4
    t.string   "file_uid",       limit: 255
    t.string   "file_ext",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "response_sets", force: :cascade do |t|
    t.integer  "user_id",      limit: 4
    t.integer  "survey_id",    limit: 4
    t.string   "access_code",  limit: 255
    t.datetime "started_at"
    t.datetime "completed_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "api_id",       limit: 255
  end

  add_index "response_sets", ["access_code"], name: "response_sets_ac_idx", unique: true, using: :btree
  add_index "response_sets", ["api_id"], name: "uq_response_sets_api_id", unique: true, using: :btree

  create_table "responses", force: :cascade do |t|
    t.integer  "response_set_id",   limit: 4
    t.integer  "question_id",       limit: 4
    t.integer  "answer_id",         limit: 4
    t.datetime "datetime_value"
    t.integer  "integer_value",     limit: 4
    t.float    "float_value",       limit: 24
    t.string   "unit",              limit: 255
    t.text     "text_value",        limit: 65535
    t.string   "string_value",      limit: 255
    t.string   "response_other",    limit: 255
    t.string   "response_group",    limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "survey_section_id", limit: 4
    t.string   "api_id",            limit: 255
  end

  add_index "responses", ["api_id"], name: "uq_responses_api_id", unique: true, using: :btree
  add_index "responses", ["survey_section_id"], name: "index_responses_on_survey_section_id", using: :btree

  create_table "seo_meta", force: :cascade do |t|
    t.integer  "seo_meta_id",      limit: 4
    t.string   "seo_meta_type",    limit: 255
    t.string   "browser_title",    limit: 255
    t.text     "meta_description", limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "seo_meta", ["id"], name: "index_seo_meta_on_id", using: :btree
  add_index "seo_meta", ["seo_meta_id", "seo_meta_type"], name: "id_type_index_on_seo_meta", using: :btree

  create_table "survey_sections", force: :cascade do |t|
    t.integer  "survey_id",              limit: 4
    t.string   "title",                  limit: 255
    t.text     "description",            limit: 65535
    t.string   "reference_identifier",   limit: 255
    t.string   "data_export_identifier", limit: 255
    t.string   "common_namespace",       limit: 255
    t.string   "common_identifier",      limit: 255
    t.integer  "display_order",          limit: 4
    t.string   "custom_class",           limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "survey_translations", force: :cascade do |t|
    t.integer  "survey_id",   limit: 4
    t.string   "locale",      limit: 255
    t.text     "translation", limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "surveys", force: :cascade do |t|
    t.string   "title",                  limit: 255
    t.text     "description",            limit: 65535
    t.string   "access_code",            limit: 255
    t.string   "reference_identifier",   limit: 255
    t.string   "data_export_identifier", limit: 255
    t.string   "common_namespace",       limit: 255
    t.string   "common_identifier",      limit: 255
    t.datetime "active_at"
    t.datetime "inactive_at"
    t.string   "css_url",                limit: 255
    t.string   "custom_class",           limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "display_order",          limit: 4
    t.string   "api_id",                 limit: 255
    t.integer  "survey_version",         limit: 4,     default: 0
  end

  add_index "surveys", ["access_code", "survey_version"], name: "surveys_access_code_version_idx", unique: true, using: :btree
  add_index "surveys", ["api_id"], name: "uq_surveys_api_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "validation_conditions", force: :cascade do |t|
    t.integer  "validation_id",  limit: 4
    t.string   "rule_key",       limit: 255
    t.string   "operator",       limit: 255
    t.integer  "question_id",    limit: 4
    t.integer  "answer_id",      limit: 4
    t.datetime "datetime_value"
    t.integer  "integer_value",  limit: 4
    t.float    "float_value",    limit: 24
    t.string   "unit",           limit: 255
    t.text     "text_value",     limit: 65535
    t.string   "string_value",   limit: 255
    t.string   "response_other", limit: 255
    t.string   "regexp",         limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "validations", force: :cascade do |t|
    t.integer  "answer_id",  limit: 4
    t.string   "rule",       limit: 255
    t.string   "message",    limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
