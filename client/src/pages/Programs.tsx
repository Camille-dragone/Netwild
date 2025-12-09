import { useEffect, useState } from "react";

type Program = {
  id: string;
  title: string;
  poster: string;
  country: string;
  year: string;
  synopsis: string;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data: Program[]) => setPrograms(data));
  }, []);

  return (
    <>
      <h1>Liste des programmes</h1>

      <ul>
        {programs.map((p) => (
          <li key={p.id}>
            <h2>{p.title}</h2>

            <img src={p.poster} alt={p.title} />

            <p>
              <strong>Pays :</strong> {p.country}
            </p>
            <p>
              <strong>Année :</strong> {p.year}
            </p>

            <p>
              <strong>Synopsis :</strong> {p.synopsis}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Programs;
