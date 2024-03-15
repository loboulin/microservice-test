docker build -t produit-service:latest ms-produit
docker build -t commande-service:latest ms-commande

docker-compose up -d
