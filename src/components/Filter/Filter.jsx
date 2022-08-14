import React from 'react';
import { FilterLabel, FilterInput, FilterWrapper } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux/es/exports';
import { changeFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const filterId = nanoid(5);
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </FilterWrapper>
  );
};
