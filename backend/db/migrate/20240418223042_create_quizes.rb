class CreateQuizes < ActiveRecord::Migration[7.1]
  def change
    create_table :quiz do |t|
      t.string :status
      t.string :recipient_name
      t.string :title
      t.time :time_limit
      t.datetime :expiry_date
      t.integer :score
      t.timestamps
    end
  end
end
