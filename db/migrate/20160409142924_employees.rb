class Employees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :name
      t.string :email
      t.boolean :manager

      t.timestamps null: false
    end
  end
end
