# engaged-web
web site for engagedai.org

```bash
# Install Node.js and npm
sudo apt update
sudo apt install nodejs npm

# Clone your project repository
git clone [this-repository-url]

# Change ownership of the entire web directory to www-data (Nginx user)
sudo chown -R www-data:www-data engaged-web

# Install dependencies and build
cd engaged-web
npm install
npm audit fix
npm run build

# Install and configure Nginx
sudo apt install nginx

# Configure Nginx to serve your built files
sudo nano /etc/nginx/sites-available/default

# Add this configuration:
server {
    listen 80;
    server_name your_domain_or_ip;
    root /path/to/your/project/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Give access rights to both ubuntu and nginx users
sudo usermod -a -G www-data ubuntu
sudo chmod -R 755 /home/ubuntu/engaged-web
sudo chown -R www-data:www-data /home/ubuntu/engaged-web
sudo chmod +x /home/ubuntu

# Restart Nginx
sudo systemctl restart nginx

# Let Nginx start by every reboot
sudo systemctl enable nginx
```


