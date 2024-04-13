class AddLatitudeToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :latitude, :float
  end
end
