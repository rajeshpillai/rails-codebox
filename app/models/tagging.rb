class Tagging < ApplicationRecord
  belongs_to :code
  belongs_to :tag
end
