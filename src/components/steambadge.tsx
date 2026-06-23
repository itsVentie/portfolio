import React, { useEffect, useState } from "react";
import styles from "@styles/SteamBadge.module.scss";

interface SteamData {
  username: string;
  avatar: string;
  level: number;
  games: number;
  hours: number;
  lastGame: string;
  status: "Offline" | "Online" | "In Game";
}

interface SteamBadgeProps {
  steamId: string;
}

export const SteamBadge: React.FC<SteamBadgeProps> = ({
  steamId,
}) => {
  const [data, setData] = useState<SteamData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/steam/${steamId}`
        );

        const json = await res.json();

        setData(json);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [steamId]);

  if (!data)
    return (
      <div className={styles.loading}>
        Loading Steam profile...
      </div>
    );

  return (
    <a
      href={`https://steamcommunity.com/profiles/${steamId}`}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.header}>
        <img
          src={data.avatar}
          alt={data.username}
          className={styles.avatar}
        />

        <div className={styles.profileInfo}>
          <h3>{data.username}</h3>
          <span>Level {data.level}</span>

          <div
            className={`${styles.status} ${
              styles[data.status.replace(" ", "")]
            }`}
          >
            {data.status}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span>Games</span>
          <strong>{data.games}</strong>
        </div>

        <div className={styles.stat}>
          <span>Playtime</span>
          <strong>{data.hours} h</strong>
        </div>
      </div>

      <div className={styles.lastGame}>
        <span>Recently Played</span>
        <strong>{data.lastGame}</strong>
      </div>
    </a>
  );
};