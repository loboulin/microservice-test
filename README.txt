sudo docker build -t produit-service:latest Dockerfile
sudo docker build -t commande-service:latest ./Dockerfile

sudo docker-compose up -d