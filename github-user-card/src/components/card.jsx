import React from "react";
import styled from "styled-components";

const StyleTag = styled.h2`
  font-size: 1.2rem;
  border: 1px solid lightgrey;
  margin: 10px;
  background: lightgrey;
  width: 150px;
`;

const Avatar = styled.img`
  height: auto;
  width: 200px;
  margin: 35px;
`;
function CardHolder(props) {
  return (
    <div>
      <Avatar src={props.data.avatar_url} />
      <StyleTag>Name: {props.data.name}</StyleTag>
      <StyleTag>Login: {props.data.login}</StyleTag>
    </div>
  );
}

export default CardHolder;
