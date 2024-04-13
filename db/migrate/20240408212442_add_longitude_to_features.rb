class AddLongitudeToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :longitude, :decimal
  end
end
