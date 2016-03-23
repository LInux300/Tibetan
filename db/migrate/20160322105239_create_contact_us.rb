class CreateContactUs < ActiveRecord::Migration
  def change
    create_table :contact_us do |t|
      t.string :email
      t.string :type
      t.string :name
      t.string :subject
      t.string :message
      t.integer :user_id
      t.boolean :answered
      t.string :answer
      t.string :text
      t.string :parent_id
      t.string :integer
      t.string :child_id
      t.string :integer

      t.timestamps null: false
    end
  end
end
