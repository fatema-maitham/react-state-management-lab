// src/App.jsx
import { useState } from 'react';

// Images
import survivorImg from './assets/0c2d6b.png';
import scavengerImg from './assets/033a16.png';
import shadowImg from './assets/262c36.png';
import trackerImg from './assets/3c1e70.png';
import sharpshooterImg from './assets/4b2900.png';
import medicImg from './assets/5a1e02.png';
import engineerImg from './assets/5e103e.png';
import brawlerImg from './assets/67060c.png';
import infiltratorImg from './assets/ac3220.png';
import leaderImg from './assets/e41f26.png';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: survivorImg,
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: scavengerImg,
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: shadowImg,
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: trackerImg,
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: sharpshooterImg,
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: medicImg,
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: engineerImg,
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: brawlerImg,
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: infiltratorImg,
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: leaderImg,
    },
  ]);


  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money to add this fighter.');
      return;
    }

    setTeam([...team, fighter]);

    setZombieFighters(
      zombieFighters.filter((item) => item.id !== fighter.id)
    );

    setMoney(money - fighter.price);
  }

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((item) => item.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0);
  const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);


  return (
    <div>
      <h1>Zombie Fighters</h1>

      <p>Money: ${money}</p>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>

      <h2>Your Team</h2>

      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <h2>{fighter.name}</h2>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>

            </li>
          ))}
        </ul>
      )}

      <h2>Available Fighters</h2>

      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App;