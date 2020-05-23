class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.text :text
      t.belongs_to :account, index: true, foreign_key: true
      t.timestamps
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
        CREATE TYPE status AS ENUM (
          'no_answer',
          'started_pitch',
          'finished_pitch',
          'conversion' );
        SQL
      end

      dir.down do
        execute <<-SQL
        DROP TYPE project_status;
        SQL
      end
    end

    add_column :notes, :status, :status
    add_index :notes, :status
  end
end
