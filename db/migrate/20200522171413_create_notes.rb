class CreateNotes < ActiveRecord::Migration[6.0]
  def up
    create_table :notes do |t|
      t.belongs_to :account
      t.text :conversation
      t.timestamps
    end

    execute <<-SQL
      CREATE TYPE cycle_status AS ENUM (
        'no_answer',
        'started_pitch',
        'finished_pitch',
        'conversion' );
    SQL
    add_column :notes, :status, :cycle_status
  end

  def down
    remove_column :notes, :status
    execute <<-SQL
      DROP TYPE project_status;
    SQL
    drop_tables :notes
  end
end
