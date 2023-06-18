# chat-project-devops

## Docker network
```sh
docker network create my-network
```

## Docker mongo
```sh
docker run \
  --name=my-mongo-name \
  --rm \
  --network=my-network \
  -e MONGO_INITDB_ROOT_USERNAME=my-username \
  -e MONGO_INITDB_ROOT_PASSWORD=my-password \
  mongo:6.0.6
```

## Docker backend
```sh
docker build -t my-docker-backend .
```

```sh
docker run \
  --name=my-backend \
  --rm \
  --network=my-network \
  -p=3000:3000 \
  -e MONGODB_URI=mongodb://my-mongo-name:27017/my-mongo-db \
  -e JWT_SECRET=my-jwt-secret \
  -e PORT=3000 \
  -e CLIENT_URI=https://localhost:3001 \
  -it \
  my-docker-backend
```
