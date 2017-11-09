class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      # OAuth
      t.string :provider, null: false
      t.string :uid, null: false

      # Data from Github
      t.string :token, null: false
      t.string :login, null: false
      t.string :github_url, null: false
      t.string :name
      t.string :email
      t.string :location
      t.string :avatar_url
      t.text :bio
      t.integer :public_repos
      t.integer :followers
      t.integer :following
      t.boolean :hireable
      t.datetime :github_created_at
      t.datetime :github_updated_at

      t.integer :experience, null: false, default: 0
      t.integer :coins, null: false, default: 0

      t.timestamps
    end

    add_index :users, :login, unique: true
  end
end
