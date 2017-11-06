class Quest < ApplicationRecord
  belongs_to :assignee, class_name: "User"
  belongs_to :repository
end
