import React from 'react';
import styled from 'styled-components';

const Inpout = styled.input`
  opacity: 0.9;
  font-size: 20px;
  border-radius: 0.85rem;
  border: none;

  &::focus {
    border-color: transparent;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  @media (max-width: 768px) {
    margin: 0;
  }
  &:focus-within ul {
    display: block;
  }
`;
const DropDwonListLi = styled.li`
    list-style:none;
    padding: 5px 26px;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid;
}

&:hover{
cursor:pointer;
background-color:whitesmoke;

}`;
const DropDwonListUl = styled.ul`
  display: none;
  width: 18%;
  border-radius: 10px;
  position: absolute;
  background-color: whitesmoke;
  overflow: hidden;
  margin-top: 29px;
  padding: 0;
  @media (max-width: 768px) {
    width: 48%;
  }
`;

export default function SearchBar({ autoComplete, placeholder, value, onChange, selectFromList }) {
  const list = autoComplete
    ? autoComplete.map((v, i) => {
        return (
          <DropDwonListLi onMouseDown={() => selectFromList(v)} key={i}>
            {v.LocalizedName}
          </DropDwonListLi>
        );
      })
    : [];
  return (
    <Form>
      <Inpout placeholder={placeholder} value={value} onChange={onChange} />

      <DropDwonListUl> {list} </DropDwonListUl>
    </Form>
  );
}
