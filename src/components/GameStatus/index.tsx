import React from 'react';
import { IPlayersLabel } from './models';
import { IPlayer } from '@/entities/game';
import styles from './gameStatus.module.scss';

const GameStatus: React.FC<IPlayersLabel> = ({ players, status }) => {
  const playerCardComponent = (player: IPlayer) => <div className={styles['player-card']}>
    <div className={`${styles['player-image-container']} ${player.isCurrentMove && styles['player-image-container--active']}`}>
      <img 
        className={styles['player-image-container__image']} 
        alt='player-avatar'
        src='https://fastly.picsum.photos/id/36/200/200.jpg?hmac=VnDu-KXiZmaBJk0XmixLx-JdUPLqVQtLdiqMXOn4LZc'
      />
    </div>   
    <span className={styles['player-card__name']}>{player.userName}</span>
  </div>;

  const emptyPlayerComponent = () => 
    <div className={styles['player-card']}>
      <picture>
        <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.webp" type="image/webp"/>
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif" alt="🤔" width="32" height="32"/>
      </picture>
    </div>;

  return (
    <div className={styles['game-status']}>
      <div className={styles['game-status__text']}>{status}</div>
      <div className={styles['game-status__cards']}>
        {players && <>
          {playerCardComponent(players[0])}
            VS
          {players[1] !== undefined ? players[1].userName : emptyPlayerComponent()}
        </>}
      </div>
      
    </div>
  );
};

export default GameStatus;