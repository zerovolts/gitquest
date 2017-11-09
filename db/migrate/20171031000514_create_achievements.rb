class CreateAchievements < ActiveRecord::Migration[5.1]
  def change
    create_table :achievements do |t|
      t.string :slug, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.integer :value, null: false, default: 0
      t.string :language
      t.string :icon_url
      t.integer :owner_count, null: false, default: 0

      t.timestamps
    end

    add_index :achievements, :slug, unique: true
  end
end
