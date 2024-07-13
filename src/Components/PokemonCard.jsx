import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css';

function PokemonCard({ name, link }) {
  const [data, setData] = useState(null);


  useEffect(() => {
    const getData = async () => {
      const response = await axios(link);
      console.log(response.data.sprites)
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="card">
      <img src={data?.sprites?.front_default} alt="" />
      <h2>{name}</h2>
    </div>
  );
}

export default PokemonCard;
