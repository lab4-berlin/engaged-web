# engaged-web
web site for engagedai.org

## 1. Install Node.js and npm
sudo apt update
sudo apt install nodejs npm

## 2. Clone your project repository
git clone [this-repository-url]
cd engaged-web

## 3. Install dependencies
npm install
npm audit fix

## 4. Build the project
npm run build

## 5. Install and configure Nginx
sudo apt install nginx

## 6. Configure Nginx to serve your built files
sudo nano /etc/nginx/sites-available/default

## Add this configuration:
server {
    listen 80;
    server_name your_domain_or_ip;
    root /path/to/your/project/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

## 7. Restart Nginx
sudo systemctl restart nginx

