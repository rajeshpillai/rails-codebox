class AddFieldsToCodes < ActiveRecord::Migration[6.0]
  def change
    add_column :codes, :html, :string
    add_column :codes, :css, :string
  end
end
