json.extract!(
  account,
  :id,
  :first_name,
  :last_name,
  :phone_number,
  :email,
  :address1,
  :address2,
  :city,
  :state,
  :zip_code,
  :created_at,
  :updated_at
)

json.url account_url(account, format: :json)
