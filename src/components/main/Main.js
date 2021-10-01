import React from 'react';
import './Main.scss';
import Card from './card/Card';

function Main({ setModalOpen, data, handleEdit, handleDelete }) {
  return (
    <div className="main">
      {data.map((post) => (
        <Card
          handleEdit={handleEdit}
          {...post}
          key={post.id}
          setModalOpen={setModalOpen}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Main;
