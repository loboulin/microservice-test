sudo docker build -t produit-service:latest ./Dockerfile-produit
sudo docker build -t commande-service:latest ./Dockerfile-commande

sudo docker-compose up -d