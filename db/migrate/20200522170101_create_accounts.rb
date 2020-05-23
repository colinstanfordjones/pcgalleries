class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        execute <<-SQL
        CREATE TYPE states AS ENUM (
          'DC',
          'AS',
          'FM',
          'GU',
          'MH',
          'MP',
          'PR',
          'PW',
          'VI',
          'UM',
          'AL',
          'AK',
          'AZ',
          'AR',
          'CA',
          'CO',
          'CT',
          'DE',
          'FL',
          'GA',
          'HI',
          'ID',
          'IL',
          'IN',
          'IA',
          'KS',
          'KY',
          'LA',
          'ME',
          'MD',
          'MA',
          'MI',
          'MN',
          'MS',
          'MO',
          'MT',
          'NE',
          'NV',
          'NH',
          'NJ',
          'NM',
          'NY',
          'NC',
          'ND',
          'OH',
          'OK',
          'OR',
          'PA',
          'RI',
          'SC',
          'SD',
          'TN',
          'TX',
          'UT',
          'VT',
          'VA',
          'WA',
          'WV',
          'WI',
          'WY');
        SQL
      end

      dir.down do
        execute <<-SQL
        DROP TYPE states;
        SQL
      end
    end

    create_table :accounts do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number, null: false
      t.string :email
      t.string :address1
      t.string :address2
      t.string :city
      t.column :state, :states
      t.integer :zip, :limit => 5
      t.integer :zipplus, :limit => 4
      t.timestamps
    end

    add_index :accounts, :state
    add_index :accounts, :zip
  end
end
