import { useAtom } from "jotai";
import { useEffect } from "react";
import { CreateEnemyCard } from "../../components/enemies/create-enemy";
import { EnemyCard } from "../../components/enemies/enemy-card";
import { Enemy } from "../../interfaces";
import { enemyAtom } from "../../state/enemiesAtom";
import { getEndpoint } from "../../utils/getEndpoint";
import { getHeaders } from "../../utils/getHeaders";
import "./index.scss";

export const EnemiesScreen = () => {
  const [enemies, setEnemies] = useAtom(enemyAtom);
  useEffect(() => {
    fetch(getEndpoint("/enemies"), {
      headers: getHeaders(),
    })
      .then((res) => res.json())
      .then((resJson) => setEnemies(resJson.enemies));
  }, []);
  return (
    <div className="enemies-screen">
      {enemies.map((enemy: Enemy) => (
        <EnemyCard {...enemy} />
      ))}
      <CreateEnemyCard />
    </div>
  );
};
