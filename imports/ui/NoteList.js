import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Notes} from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => {
    return (
        <div>
            NoteList{props.notes.length}
            <NoteListHeader/>
            {
                props.notes.map((note) =>{
                    return <NoteListItem key={note._id} note={note}/>
                })
            }
        </div>
    );
};

export default createContainer(() => {
    Meteor.subscribe('notes');

    return {
        notes:Notes.find().fetch()
    };
  }, NoteList);
 