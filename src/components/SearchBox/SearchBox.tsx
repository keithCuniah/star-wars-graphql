import React, { ChangeEventHandler } from 'react';
import classes from './SearchBox.module.scss';

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  className: string;
  placeholder: string;
}) => (
  <div>
    {' '}
    <input
      className={`${classes.searchbox} ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
