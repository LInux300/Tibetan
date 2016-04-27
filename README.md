# tibetan
The Tibetan

<!--  Apache & Passenger development-->

sudo apt-get update
sudo apt-get install -y libapache2-mod-passenger
sudo a2enmod passenger
sudo /etc/init.d/apache2 restart

<!-- check installation -->
sudo /usr/bin/passenger-config validate-install
sudo /usr/sbin/passenger-memory-stats

vim /etc/apache2/sites-available/tibetan.conf
<!--
<VirtualHost *:80>
    ServerName tibmedicine.com
    ServerAlias www.tibmedicine.com
    ServerAdmin webmaster@localhost
    DocumentRoot /home/kuntuzangpo/code/tibetan/public
    RailsEnv development
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
    <Directory "/home/kuntuzangpo/code/tibetan/public">
        Options FollowSymLinks
        Require all granted
    </Directory>
    -->
</VirtualHost>
<!--  RailsEnv  production -->


<!--  Disable the default site, enable your new site, and restart Apache: -->
sudo a2dissite 000-default
sudo a2ensite tibetan
sudo /etc/init.d/apache2 restart

<!-- tail -200lf /var/log/apache2/error.log -->


<!--  cmd-->
RAILS_ENV=production rake db:migrate
RAILS_ENV=production rake assets:clean assets:precompile

RAILS_ENV=production rails s
# or
rails server -e production
