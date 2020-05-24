FactoryBot.define do
  factory :user do
    handle { 'Fake McFake' }
    email { 'test@test.com' }
    role { 'sales' }
    password { 'testpass' }
  end
end
