import React, { useState, useEffect } from "react";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import Input from "./components/Input.jsx";
import Loading from "./components/Loading.jsx";
import { getAll, getCharactersPerPage } from "./services/characters";
import { Link } from "react-router-dom";
import "./App.css";

function App({ match }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titleCharacter, setTitleCharacter] = useState("");
  const page = parseInt(match.params.id, 10) || 1;
  const [pages, setPages] = useState(0);

  const getCharacter = async () => {
    setLoading(true);
    let res = await getCharactersPerPage(page);
    let dataFilter = res.data.results.filter(
      (character) => character.status !== "unknown"
    );
    setCharacters(dataFilter);
    setPages(res.data.info.pages);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    getCharacter();
  }, [page]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    setTitleCharacter(form.get("name"));
  };
  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="App">
        <form action="" onSubmit={handleSubmit}>
          <Input className="input" name="name" />
        </form>
        <div className="container">
          {characters
            .filter((character) => {
              if (titleCharacter === "") {
                return character;
              } else if (
                character.name
                  .toLowerCase()
                  .includes(titleCharacter.toLowerCase())
              ) {
                return character;
              }
            })
            .map((character) => (
              <div key={character.id} className="div-card">
                <Link to={`${page}/episode/${character.id}`}>
                  <Card
                    urlImage={character.image}
                    name={character.name}
                    gender={character.gender}
                    origin={character.origin?.name}
                    type={character.type}
                    status={character.status}
                    color={
                      character.status === "Alive" ? "#40CC5899" : "#E0404099"
                    }
                  />
                </Link>
              </div>
            ))}
        </div>
        <div className="div-buttons">
          {!titleCharacter && (
            <>
              <div className="btn">
                <Button
                  linkTo={`/${page - 1}`}
                  buttonName="Anterior"
                  disabled={page === 1}
                />

                <Button
                  linkTo={`/${page + 1}`}
                  buttonName="Siguiente"
                  disabled={pages === page ? true : false}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
}

export default App;
