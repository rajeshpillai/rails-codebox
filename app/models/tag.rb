class Tag < ApplicationRecord
  has_many :taggings 
  has_many :codes, through: :taggings 
end
