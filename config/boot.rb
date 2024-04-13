require 'bundler/setup' 

require_relative 'environment'

# hook of initiation
if defined?(Rails::Server)
    at_exit do
      system('rake obtain_and_persist_data:execute')
    end
  end

ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.
