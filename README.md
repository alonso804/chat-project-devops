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
* [K6](https://k6.io/docs/get-started/installation/)
* [Helm](https://helm.sh/docs/intro/install/)
* Prometheus and Grafana

### Prometheus and Grafana
1. Add Prometheus to helm:
```sh
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
helm repo update
```

2. Install into cluster:
```sh
helm install prometheus prometheus-community/kube-prometheus-stack
```

3. Access to UI's:
```sh
# Prometheus
kubectl port-forward service/prometheus-kube-prometheus-prometheus 9090

# Grafana
kubectl port-forward deployment.apps/prometheus-grafana 3000
```

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

## Testing
1. Download `tests` folder
2. Update `httpHostname` and `wsHostname`
3. Run test
```sh
cd path/to/tests

k6 run socket-connections.js
```
