json.notice flash[:notice]
json.extract! @review, :name, :rating, :notes, :image, :price, :ate
json.edit_path edit_review_path(@review)
json.back_path reviews_path