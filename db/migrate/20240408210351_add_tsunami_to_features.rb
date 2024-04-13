class AddTsunamiToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :tsunami, :boolean
  end
end
