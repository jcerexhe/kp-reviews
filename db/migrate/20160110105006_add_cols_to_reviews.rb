class AddColsToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :price, :integer
    add_column :reviews, :ate, :string
  end
end
