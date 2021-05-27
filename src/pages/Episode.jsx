import React, { useState, useEffect } from "react";
import { getEpisodesByIdChar } from "../services/characters";
import { getAllEpisodes } from "../services/episodes";
import Loading from "../components/Loading";
import "../css/episode.css";

const Episode = ({ match }) => {
  const idCharacter = parseInt(match.params.idCharacter, 10) || 1;
  const [urlEpisodes, setUrlEpisodes] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  const EpisodesByIdChar = async () => {
    setLoading(true);
    let res = await getEpisodesByIdChar(idCharacter);
    setUrlEpisodes(res.data.episode);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    EpisodesByIdChar();
  }, [idCharacter]);

  const getEpisodesByUrl = async () => {
    setLoading(true);
    let res = await getAllEpisodes();
    setEpisodes(res.data.results);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    getEpisodesByUrl();
  }, []);

  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="containerEpisode">
        <h2>Episodios</h2>
        <table className="table">
          <tr>
            <th scope="row">Episodio</th>
            <th>Nombre</th>
            <th>Fecha al aire</th>
          </tr>
          {episodes.map((episode) => {
            let indexcli = urlEpisodes.findIndex((url) => url === episode.url);
            if (indexcli >= 0) {
              episode = episodes[indexcli];
            } else {
              return null;
            }
            return (
              <>
                <tr key={episode.id}>
                  <td>{episode.episode} </td>
                  <td>{episode.name} </td>
                  <td>{episode.air_date} </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    );
};

export default Episode;
