namespace :setup do
  # http://vladigleba.com/blog/2014/04/10/deploying-rails-apps-part-6-writing-capistrano-tasks/

  desc "Check the size of production log."
  task :tail_active_production_log do
    on roles(:app) do
      execute "cd; tail -200lf tibetan/shared/log/production.log"
    end
  end

  desc "Get current release"
  task :current_release do
    on roles(:app) do
      execute "ls -la tibetan/current"
    end
  end

  desc "Upload database.yml file."
  # cap production setup:upload_database_yml
  task :upload_database_yml do
    on roles(:app) do
      execute "mkdir -p #{shared_path}/config"
      execute "ls -la #{shared_path}/config"
      upload! StringIO.new(File.read("config/database.yml.default")), "#{shared_path}/config/database.yml.default"
      execute "chmod 664 #{shared_path}/config/database.yml.default"
      execute "ls -la #{shared_path}/config"
    end
  end

  # cap production setup:seed_db
  desc "Seed the database."
  task :seed_db do
    on roles(:app) do
      within "#{current_path}" do
        with rails_env: :production do
          execute :rake, "db:seed"
        end
      end
    end
  end

  # desc 'Reload nginx'
  # task :reload do
  #   on roles(:web), in: :sequence do
  #     # sudo asks for confirmation, doesn't work
  #     # sudo :service, :nginx, :reload
  #   end
  # end


  # on server: sudo visudo
  # deploy ALL=NOPASSWD:/etc/init.d/nginx, /etc/init.d/postgresql
  # cap production setup:nginx_restart
  desc 'Restart nginx'
  task :nginx_restart do
    on roles(:web), in: :sequence do
      execute "sudo /etc/init.d/nginx restart"
    end
  end

  # desc "Symlinks config files for Nginx and Unicorn."
  # task :symlink_config do
  #   on roles(:app) do
  #     execute "rm -f /etc/nginx/sites-enabled/default"
  #
  #     execute "ln -nfs #{current_path}/config/nginx.conf /etc/nginx/sites-enabled/#{fetch(:application)}"
  #     execute "ln -nfs #{current_path}/config/unicorn_init.sh /etc/init.d/unicorn_#{fetch(:application)}"
  #  end
  # end

end
