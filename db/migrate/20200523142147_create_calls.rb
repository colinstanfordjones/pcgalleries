class CreateCalls < ActiveRecord::Migration[6.0]
  def change
    create_table :calls do |t|
      t.string :sid
      t.string :recording
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :note, index: true, foreign_key: true
      t.timestamps
    end
  end
end
