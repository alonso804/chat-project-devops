# chat-project-devops

## Clone repositories

```sh
# Backend
git clone https://github.com/alonso804/chat-project-backend.git

# Frontend
git clone https://github.com/alonso804/chat-project-frontend.git
```

After clone the repositories, follow `README.md`'s instructions

## Install tools
* [Kubectl](https://kubernetes.io/docs/tasks/tools/)
* [Minikube](https://minikube.sigs.k8s.io/docs/start/)
* [Prometheus and Grafana](https://brain2life.hashnode.dev/prometheus-and-grafana-setup-in-minikube)

## Docker
1. Build frontend:
```sh
cd path/to/frontend

docker build encrypted-chat-frontend .
```

2. Build backend:
```sh
cd path/to/backend

docker build encrypted-chat-backend .
```

## Minikube
1. Start minikube
```sh
minikube start
```

2. Upload images to minikube
```sh
# Frontend
minikube image load encrypted-chat-frontend

# Backend
minikube image load encrypted-chat-backend
```

## Kubectl
1. Download `kube` folder
2. Fill the `.yaml` files with your env variables
3. Apply
```sh
cd path/to/kube

cd ..

kubectl apply -f kube
```
4. Open frontend
```sh
minikube service encrypted-chat-frontend --url
```
