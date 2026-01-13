import React, { Component } from 'react'
import PersonInfo from './personInfo';

export class PersonsList extends Component {
  render() {
    const persons=[
        {
            id:1,
            name:"semon",
            age:20,
            skill:"Angular"
        },
        {
            id:2,
            name:"john",
            age:25,
            skill:"JavaScript"
        },
        {
            id:3,
            name:"ahmed",
            age:30,
            skill:"React19"
        }
    ]

    const personsParagraphs=persons.map((person, index) => 
        // (<p key={person.id} >Iam {person.name}. Iam {person.age} and i'm good at {person.skill}</p>)
        <PersonInfo key={person.id} index={index} info={person}></PersonInfo>
    );

    return (
      <div>
        {this.props.children}
        {personsParagraphs}
      </div>
    )
  }
}

export default PersonsList

