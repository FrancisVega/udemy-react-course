// @format
import React, { Component } from "react";

const person = props => {
  const { name, age, children } = props;
  return (
    <h1 className="Heading-1">
      Hi, I'm {name} and I'm {age}
      <p>{children}</p>
    </h1>
  );
};

export default person;
