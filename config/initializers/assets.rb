Rails.application.config.assets.configure do |env|
    env.cache = Sprockets::Cache::FileStore.new("path/to/cache/directory")
  end
  