import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import DataTable from '../components/DataTable';
import Navbar from '../components/Navbar';
import { isLoggedIn } from '../utils/auth';

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/data`
    );
    setData(res.data);
  };

  const handleScrape = async (url) => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/scrape`
      , { url });
    fetchData();
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar onScrape={handleScrape} />
      <div className="container mt-4">
        <DataTable data={data} />
      </div>
    </div>
  );
}
