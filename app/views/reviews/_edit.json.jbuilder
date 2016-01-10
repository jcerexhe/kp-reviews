json.show_path review_path(@review)
json.back_path reviews_path
json.form_method "put"
json.form_path review_path(@review)
json.csrf_token form_authenticity_token
json.partial! 'reviews/form.json', review: @review