class AddPlaceToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :place, :string
  end
end
