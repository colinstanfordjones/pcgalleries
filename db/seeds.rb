# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

accounts = Dir.glob("**/*.csv")

%W[colinstanfordjones@gmail.com jgarofalo@pcgalleries.com msalvo@pcgalleries.com].each do |email|
  user = User.new
  user.email = email
  user.role = 'admin'
  user.password = 'password'
  user.save!
end

accounts.each do |file|
  CSV.foreach(file, headers: true) do |row|
    Account.create(
      first_name: row['first_name'],
      last_name: row['last_name'],
      email: row['email'],
      phone_number: Account.format_phone_number(row['phone_number']),
      address1: row['address1'],
      zip: row['zip_code'].to_i,
      city: row['city'],
      sales_associate: User.find_by_email('colinstanfordjones@gmail.com'),
      state: Account.format_state(row['state'])
    )
  end
end
