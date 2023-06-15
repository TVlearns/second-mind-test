import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const MainContent = ({ addNote, updateNote, currentNote, setCurrentNote, notes, deleteNote, fetchNote }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCurrentNote(null);
      fetchNote(id);
    }
  }, [id]);

  if (id && currentNote === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {id ? (
        <NoteForm
          updateNote={updateNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          navigate={navigate}
          action='edit'
        />
      ) : (
        <>
          <button onClick={() => navigate('/notes/new')}>Add Note</button>
          <NoteList
            notes={notes}
            deleteNote={deleteNote}
            setCurrentNote={setCurrentNote}
            navigate={navigate}
          />
        </>
      )}
    </>
  );
};

export default MainContent;