import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { DetailPagesContext } from '../../contexts/DetailPagesContext.context';
import CardDetail from '../../components/CardDetail/CardDetail';
import classes from './DetailPage.module.scss';
import { GET_CHARACTER_DETAIL } from '../../graphQL/queries/getCharacterDetail.query';
import { ICharacterDetail } from '../../models/Character.model';

const DetailPage = () => {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [characterDetail, setCharacterDetail] = useState<ICharacterDetail>();

  const { previousDetailPages, setPreviousDetailPages } =
    useContext<any>(DetailPagesContext);

  const { error, loading, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: { id: characterId },
  });

  // manage History pages
  const managePagesList = (pageList: string[], _characterId: string) => {
    pageList.pop(); //remove last page
    pageList.unshift(`/characters/${_characterId}`); //add current page in first position
    return pageList;
  };
  useEffect(() => {
    if (data) {
      const {
        person: {
          id,
          name,
          gender,
          species,
          homeworld,
          filmConnection: { films },
        },
      } = data;

      setCharacterDetail({ id, name, gender, species, homeworld, films });

      // FIXME : the setPreviousDetailPage list is update but the new value is not received in app neither the header
      const copyPreviousPages = managePagesList(previousDetailPages, id);
      setPreviousDetailPages(copyPreviousPages);
    }
  }, [data, loading, previousDetailPages, setPreviousDetailPages]);

  if (error) return <h1>There is an error on fetching data</h1>;
  if (characterDetail)
    return (
      <>
        <div className={classes['detail-page']}>
          <div className={classes['btn-area']}>
            <button
              className={classes.backBtn}
              onClick={() => {
                return navigate('/lister-page');
              }}
            >
              Back to List Link
            </button>
          </div>
          <CardDetail detail={characterDetail} />
        </div>
      </>
    );
  return <h1>Loading ...</h1>;
};

export default DetailPage;
