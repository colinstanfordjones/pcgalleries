class Jwtblacklist < ActiveRecord::Migration[6.0]
  def change
    create_table :jwt_blacklist do |t|
      t.string :jti, null: false
      t.string :exp, null: false
    end

    add_index :jwt_blacklist, :jti
    add_index :jwt_blacklist, :exp
  end
end
