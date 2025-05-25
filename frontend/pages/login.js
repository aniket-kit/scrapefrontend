import { useState } from 'react';
import { useRouter } from 'next/router';
import { login, isLoggedIn } from '../utils/auth';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (typeof window !== 'undefined' && isLoggedIn()) {
    router.push('/');
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (login(username, password)) {
      router.push('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
