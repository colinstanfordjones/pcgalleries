class CreateCalls < ActiveRecord::Migration[6.0]
  def change
    create_table :calls do |t|
      t.belongs_to :note
      t.timestamps
    end
  end
end
