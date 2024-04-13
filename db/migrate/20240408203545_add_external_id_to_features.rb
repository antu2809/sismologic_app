class AddExternalIdToFeatures < ActiveRecord::Migration[6.0]
  def change
    add_column :features, :external_id, :string
    add_column :features, :magnitude, :decimal
  end
end
