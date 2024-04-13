class AddMagTypeToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :mag_type, :string
  end
end
