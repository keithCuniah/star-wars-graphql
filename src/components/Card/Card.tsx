import React from 'react';
import { ICharacter } from '../../models/Character.model';
import { getCharacterIcon } from '../../utils/getStarWarsIcon';
import classes from './Card.module.scss';

const Card = ({
  id,
  name,
  gender,
  species,
  homeworld,
}: ICharacter) => {
  return (
    <>
      <li className={classes.card}>
        <h3> {name}</h3>
        <div className={classes.desc}>
          <i> SEXE : {gender} </i>
          <i>SPECIES : {species ? species.name : 'N/A'} </i>
          <i>FROM : {homeworld.name} </i>
        </div>
        <i className={`swg ${getCharacterIcon(id)} swg-3x`}></i>
      </li>
    </>
  );
};

export default Card;
