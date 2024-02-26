import { useEffect, useState } from "react";

function GithubAPI() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/etheoo98/repos")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Kunde inte hämta data från API"));
  }, []);

  return (
    <>
      {loading ? (
        <p>Hämtar projekt...</p>
      ) : (
        <>
          {posts.map((repo) => (
            <div key={repo.id} className="repository-item">
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url} className="github-link">
                Till repository <i className="fa-solid fa-link"></i>
              </a>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default GithubAPI;
