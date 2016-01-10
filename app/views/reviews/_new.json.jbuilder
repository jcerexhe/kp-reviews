json.back_path reviews_path
json.form_method "post"
json.form_path reviews_path
json.csrf_token form_authenticity_token
json.partial! 'reviews/form.json', review: @review