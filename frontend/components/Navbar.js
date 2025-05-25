import { useState } from 'react';
import { logout } from '../utils/auth';
import { useRouter } from 'next/router';

export default function Navbar({ onScrape }) {
  const router = useRouter();
  const [url, setUrl] = useState('');

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const handleScrapeClick = () => {
    if (!url) return alert("Please enter a URL");
    onScrape(url);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Admin Panel</span>
        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter URL to scrape"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: '300px' }}
          />
          <button className="btn btn-primary" onClick={handleScrapeClick}>Scrape Now</button>
          <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}
