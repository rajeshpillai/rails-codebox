class ChangeBodyToCode < ActiveRecord::Migration[6.0]
  def change
    rename_column :codes, :body, :code
  end
end
