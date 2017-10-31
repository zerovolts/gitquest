class CreateAchievementOwnership < ActiveRecord::Migration[5.1]
  def change
    create_table :achievement_ownerships do |t|
      t.belongs_to :user, index: true, null: false
      t.belongs_to :achievement, index: true, null: false
      t.index [:user_id, :achievement_id], unique: true

      t.timestamps
    end
  end
end
