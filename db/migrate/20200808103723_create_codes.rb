class CreateCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :codes do |t|
      t.string :title
      t.string :type
      t.text :body
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
