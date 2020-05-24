require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Pcg
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.active_record.schema_format = :sql

    config.autoload_paths << Rails.root.join('lib')

    config.generators do |g|
      g.test_framework :rspec
      g.template_engine :jbuilder
    end
  end
end
