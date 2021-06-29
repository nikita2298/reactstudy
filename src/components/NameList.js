import React from "react";
import Person from "./person";

function NameList() {
  const names = ["a", "b", "c"];
  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "nikita",
    },
    {
      id: 2,
      name: "om",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.name} person={person}></Person>
  ));
  return (
    <div>
      {nameList}
      {personList}
    </div>
  );
}

export default NameList;
