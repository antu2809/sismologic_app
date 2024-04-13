class Feature < ApplicationRecord
    has_many :comments
    validates :title, :url, :place, :mag_type, :longitude, :latitude, presence: true
    validates :magnitude, inclusion: { in: -1.0..10.0 }
    validates :latitude, numericality: { greater_than_or_equal_to: -90.0, less_than_or_equal_to: 90.0 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180.0, less_than_or_equal_to: 180.0 }
  end