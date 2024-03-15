cd produit-service
sudo docker build -t produit-service:latest .
sudo docker build -t commande-service:latest .

cd ..
sudo docker-compose up -d
