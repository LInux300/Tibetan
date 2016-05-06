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
      on roles(:app) do
        # execute "/etc/init.d/unicorn_#{fetch(:application)} #{command}"
        execute "sudo service postgresql #{command}"
        # execute "cd; ls -la tibetan/shared/log/production.log"
      end
    end
  end

  desc "Check the size of production log."
  task :check_production_log do
    execute "ls -la tibetan/shared/log/production.log"
  end

  before :deploy, "deploy:check_revision"
  # after :deploy, "deploy:restart"
  # after :deploy, "deploy:check_production_log"
  after :rollback, "deploy:restart"
end
