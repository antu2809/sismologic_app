class FeatureSerializer < ActiveModel::Serializer
    attributes :id, :external_id, :magnitude, :place, :time, :tsunami, :mag_type, :title, :coordinates
    link :external_url
  
    def coordinates
      {
        longitude: object.longitude,
        latitude: object.latitude
      }
    end
  end