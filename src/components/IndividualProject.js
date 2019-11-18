import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [projects, setProjects] = useState();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };

  return (
    <>
      <span className='sidebar__dot'>&bull;</span>
      <span className='sidebar__project-name'>{project.name}</span>
      <span
        className='sidebar__project-delete'
        data-testid='delete-project'
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className='project-delete-modal'>
            <div className='project-delte-modal__inner'>
              <p>Do you really want to delete this project?</p>
              <button
                type='button'
                onClick={() => deleteProject(project.docId)}
              >
                Delete
                <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
              </button>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
