import http from 'k6/http';
import ws from 'k6/ws';
import { sleep } from 'k6';

const httpHostname = `http://192.168.49.2:30001`;
const wsHostname = `ws://192.168.49.2:30001`;
const DEFAULT_PASSWORD = 'Aa1#234567';

export const options = {
  vus: 500,
  duration: '50s',
};

const user = {
  username: 'alonso',
  password: DEFAULT_PASSWORD,
};

export default function() {
  const payload = JSON.stringify({
    username: user.username,
    password: user.password,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const loginRes = http.post(`${httpHostname}/api/auth/login`, payload, params);

  const token = loginRes.json('token');

  if (token) {
    console.log(`User ${user.username} logged in successfully with token ${token}`);

    const res = http.get(`${httpHostname}/api/user/get-user-info`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });

    console.log(res);

    ws.connect(`${wsHostname}/socket.io/?token=${token}`, (socket) => {
      socket.on('open', () => {
        console.log('connected');
      });
    });

  }

  sleep(1);
}
