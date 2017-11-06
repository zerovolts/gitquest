class CreateQuests < ActiveRecord::Migration[5.1]
  def change
    create_table :quests do |t|
      t.string :title, null: false
      t.string :github_url, null: false
      t.boolean :state, null: false, default: false
      t.text :body
      t.integer :reward

      t.integer :assignee_id
      t.belongs_to :repository
    end
  end
end
