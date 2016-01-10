class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :rating
      t.text :notes
      t.string :image

      t.timestamps null: false
    end
  end
end
