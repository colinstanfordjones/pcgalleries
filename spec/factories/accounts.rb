FactoryBot.define do
  factory :account do
    first_name { 'McFake' }
    last_name { 'McFake' }
    email { 'test@test.com' }
    phone_number { 4152400492 }
  end
end
