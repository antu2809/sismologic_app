require 'httparty'

namespace :obtain_and_persist_data do
  desc "Obtain and persist seismic data"
  task :execute => :environment do
    url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    
    # Obtener los datos sismológicos desde el sitio USGS
    response = HTTParty.get(url)
    data = JSON.parse(response.body)

    # Iterar sobre cada evento sismológico y persistir los datos en la base de datos
    data['features'].each do |feature|
      attributes = feature['properties']

      next if Feature.exists?(external_id: attributes['id'])

      coordinates = feature['geometry']['coordinates']
      longitude = coordinates[0]
      latitude = coordinates[1]

      next if attributes['title'].nil? || attributes['url'].nil? || attributes['place'].nil? || attributes['magType'].nil? || longitude.nil? || latitude.nil?

      magnitude = attributes['mag']
      tsunami = attributes['tsunami']
      mag_type = attributes['magType']
      title = attributes['title']
      external_id = attributes['id']
      place = attributes['place']
      time = Time.at(attributes['time'] / 1000) # Convertir milisegundos a segundos

      Feature.create(
        external_id: external_id,
        magnitude: magnitude,
        place: place,
        time: time,
        url: attributes['url'],
        tsunami: tsunami,
        mag_type: mag_type,
        title: title,
        longitude: longitude,
        latitude: latitude
      )
    end
  end
end