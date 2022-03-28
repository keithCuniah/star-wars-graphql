import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from '@apollo/client';
import { LOAD_CHARACTERS } from '../../graphQL/queries/getCharacters.query';
import { Link } from 'react-router-dom';
import classes from './ListerPage.module.scss';
import SearchBox from '../../components/SearchBox/SearchBox';
import Card from '../../components/Card/Card';
import { ICharacter } from '../../models/Character.model';

const ListerPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchField, setSearchField] = useState('');

  // pagination
  const charactersByPage = 10;
  const pagesVisited = pageNumber * charactersByPage;
  const pageCount = Math.ceil(filteredCharacters.length / charactersByPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  // datas to fetch and query
  const { error, loading, data } = useQuery(LOAD_CHARACTERS);

  useEffect(() => {
    if (!loading) {
      const {
        allPeople: { people },
      } = data;
      setCharacters(people);
    }
  }, [data, loading]);

  const renderAllCharacters = (
    characters: ICharacter[]
  ) => {
    if (loading) return <h2>Loading ...</h2>;
    if (error) return <h2>There is an error on fetching data</h2>;
    if (filteredCharacters.length === 0)
      return <i>There is no result matching the search query</i>;
    return characters
      .slice(pagesVisited, pagesVisited + charactersByPage)
      .map(({ id, name, gender, species, homeworld }: ICharacter) => {
        return (
          <Link key={id} className={classes.link} to={`/characters/${id}`}>
            <Card
              id={id}
              name={name}
              gender={gender}
              species={species}
              homeworld={homeworld}
            />
          </Link>
        );
      });
  };

  // Search
  const onSearchChange = (event: { target: { value: string } }) => {
    const searchFieldString = event.target.value.toLocaleUpperCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredCharacters = characters.filter((character: ICharacter) => {
      return character.name.toLocaleUpperCase().includes(searchField);
    });
    setFilteredCharacters(newFilteredCharacters);
  }, [characters, searchField]);

  return (
    <div className={classes.container}>
      <div className={classes['search-area']}>
        <SearchBox
          onChangeHandler={onSearchChange}
          className={''}
          placeholder={'Search for characters'}
        />
        <h2>List of Characters</h2>
        <p>click on a card to show details</p>
      </div>
      <div className={classes['list-characters']}>
        <ul>{renderAllCharacters(filteredCharacters)}</ul>
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBtns'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default ListerPage;
