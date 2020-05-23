# frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :handle,             null: false, default: ''
      t.string :email,              null: false, default: ''

      t.string :encrypted_password, null: false, default: ''

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      t.timestamps null: false
    end

    change_table :accounts do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :sales_associate, index: true
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
          CREATE TYPE role AS ENUM (
            'user',
            'sales',
            'admin'
          );
          ALTER TABLE accounts
            ADD CONSTRAINT sales_associate_fk FOREIGN KEY (sales_associate_id) REFERENCES users (id);
        SQL
      end

      dir.down do
        execute <<-SQL
          DROP TYPE role;
        SQL
      end
    end

    add_column :users, :role, :role

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true

    add_index :users, :role
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
