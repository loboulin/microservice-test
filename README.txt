cd produit-service
sudo docker build -t produit-service:latest .
cd..

cd commande-service
sudo docker build -t commande-service:latest .
cd ..

sudo docker-compose up -d
