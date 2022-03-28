import React from 'react';
import { ICharacterDetail, IFilm } from '../../models/Character.model';
import { getCharacterIcon, getMoviesIcon } from '../../utils/getStarWarsIcon';
import classes from './CardDetail.module.scss';

const CardDetail = ({
  detail: { name, id, gender, species, homeworld, films },
}: {
  detail: ICharacterDetail;
}) => {
  return (
    <>
      <div className={classes['card-detail']}>
        <h2>
          Details of <span className={classes['detail-name']}>{name}</span>
        </h2>
        <i className={`swg ${getCharacterIcon(id)} swg-3x`}></i>
        <div className={classes['desc']}>
          <div className={classes['desc-item']}>
            <span className={classes['desc-label']}>Gender :</span> {gender}
          </div>
          <div className={classes['desc-item']}>
            <span className={classes['desc-label']}>Species :</span>
            {species ? species.name : 'N/A'}
          </div>
          <div className={classes['desc-item']}>
            <span className={classes['desc-label']}>Homeworld :</span>{' '}
            {homeworld!.name}
          </div>
          <div className={classes['desc-item']}>
            <span className={classes['desc-label']}>Movies :</span>
            <ul className={classes['movies']}>
              {films.map(({id, title}: IFilm) => {
                return (
                  <li key={id}>
                    <i>{title}</i>{' '}
                    <i className={`swg ${getMoviesIcon(id)} swg-5x`}></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
