import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "../css/loading.css";

const Loading = () => {
  return (
    <div className="container-loading">
      <Player
        className="player-one"
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_4jsnlwpe.json"
        autoplay={true}
      />
      <Player
        className="player-two"
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_yTjvtJ.json"
        autoplay={true}
      />
    </div>
  );
};

export default Loading;
