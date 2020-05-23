class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    enable_extension "hstore"
    create_table :accounts do |t|
      t.string :first_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :address1, null: false, default: ''
      t.string :address2, null: false, default: ''
      t.string :city, null: false, default: ''
      t.string :state, null: false, default: ''
      t.string :zip_code, null: false, default: ''
      t.string :phone_number, null: false, default: ''
      t.string :email, null: false, default: ''
      t.timestamps
    end
  end
end
