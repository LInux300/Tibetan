set :stage, :staging

# Replace 127.0.0.1 with your server's IP address!
server '81.2.254.221', user: 'deploy', roles: %w{web app db}
