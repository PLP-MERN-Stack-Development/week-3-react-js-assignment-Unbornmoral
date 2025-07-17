// filepath: src/pages/ApiData.jsx
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`${API_URL}?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">API Data</h2>
      <input
        className="border rounded px-2 py-1 mb-4 w-full"
        placeholder="Search posts"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <ul>
        {filtered.map((item) => (
          <li key={item.id} className="border-b py-2">
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </Card>
  );
};

export default ApiData;