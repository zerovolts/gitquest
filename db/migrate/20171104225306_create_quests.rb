class CreateQuests < ActiveRecord::Migration[5.1]
  def change
    create_table :quests do |t|
      t.string :title, null: false
      t.integer :github_id, null: false
      t.string :github_url, null: false
      t.boolean :is_complete, null: false, default: false
      t.text :body, null: false
      t.integer :reward, null: false, default: 0

      t.integer :assignee_id
      t.belongs_to :repository
    end
  end
end
