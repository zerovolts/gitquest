class CreateAchievementOwnership < ActiveRecord::Migration[5.1]
  def change
    create_table :achievement_ownerships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :achievement, null: false

      t.timestamps
    end
  end
end
