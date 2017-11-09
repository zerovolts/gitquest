class CreateRepositories < ActiveRecord::Migration[5.1]
  def change
    create_table :repositories do |t|
      t.string :name, null: false
      t.boolean :linked, null: false, default: false
      t.string :github_url, null: false
      t.integer :stars, null: false
      t.integer :webhook_id
      t.string :clone_url
      t.text :description
      t.string :language
      t.belongs_to :user

      t.timestamps
    end

    add_index :repositories, :name, unique: true
  end
end
