namespace :deploy do

  desc "Makes sure local git is in sync with remote."
  task :check_revision do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` or 'git push --force' to sync changes."
      exit
    end
  end

  %w[start stop restart].each do |command|
    desc "#{command} Nginx server."
    task command do
      on roles(:web) do
        execute "sudo /etc/init.d/postgresql #{command}"
        execute "sudo /etc/init.d/nginx #{command}"
      end
    end
  end


  %w[start stop restart].each do |command|
    desc "#{command} Unicorn server."
    task command do
      on roles(:app) do
        execute "/etc/init.d/unicorn_#{fetch(:application)} #{command}"
      end
    end
  end

  desc "Check the size of production log."
  task :tail_production_log do
    on roles(:app) do
      execute "cd; tail -200l tibetan/shared/log/production.log"
    end
  end

  before :deploy, "deploy:check_revision"
  after :deploy, 'setup:current_release'
  after :deploy, 'setup:nginx_restart'
  # after :deploy, "deploy:tail_production_log"

  after :rollback, "deploy:restart"
end
