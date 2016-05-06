# config valid only for current version of Capistrano
lock '3.5.0'

set :application, 'tibetan'
set :repo_url, 'git@github.com:rudolfvavra/tibetan.git'

set :passenger_restart_with_touch, true

set :deploy_user, "deploy"
# set :rbenv_ruby, "2.3.0"

set :deploy_to, '/home/deploy/tibetan'

set :default_env, { path: "~/.rbenv/shims:~/.rbenv/bin:$PATH" }

# not share files?dirs publickly
set :linked_files, %w{config/database.yml config/secrets.yml}
set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

set :keep_releases, 3

# set :cap_notify_emails, [ 'info@tibetanmedicine.eu' ]
# set :cap_notify_from, 'deploy@tibetanmedicine.eu'
# set :cap_notify_callsign, 'Tibetan Medicine'
# set :cap_notify_latest_commit, proc { `git rev-parse HEAD`.strip }

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5


# I am evoking this task by running 'cap seed'.
# namespace :seed do
#   desc "Run a task on a remote server."
#   # run like: cap staging rake:invoke task=a_certain_task
#   task :default do
#     run("cd #{deploy_to}/current; /usr/bin/env bundle exec rake #{ENV['db:seed']} RAILS_ENV=#{rails_env}")
#   end
# end


namespace :deploy do
  #
  # desc "reload the database with seed data"
  # task :seed do
  #   # run "cd #{current_path}; rake db:seed RAILS_ENV=#{rails_env}"
  #   run("cd #{deploy_to}/current; /usr/bin/env bundle exec rake #{ENV['db:seed']} RAILS_ENV=#{rails_env}")
  # end

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

end
