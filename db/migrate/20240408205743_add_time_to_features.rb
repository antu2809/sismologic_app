class AddTimeToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :time, :datetime
  end
end
