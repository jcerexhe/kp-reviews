json.new_review_path new_review_path()
json.notice flash[:notice]
json.reviews(@reviews) do |review|
  json.extract! review, :id, :name, :rating, :notes, :image, :price, :ate
  json.show_path review_path(review)
  json.edit_path edit_review_path(review)
  json.destroy_path review_path(review)
end