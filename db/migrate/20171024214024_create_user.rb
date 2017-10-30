class CreateUser < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      # OAuth
      t.string :provider
      t.string :uid

      # Data from Github
      t.string :name
      t.string :login
      t.string :email
      t.string :github_url
      t.string :location
      t.string :avatar_url
      t.text :bio
      t.integer :public_repos
      t.integer :followers
      t.integer :following
      t.boolean :hireable
      t.datetime :github_created_at
      t.datetime :github_updated_at
    end
  end
end
