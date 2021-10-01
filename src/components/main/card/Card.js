import React from 'react';
import './Card.scss';

function Card({ id, title, body, src, stars, handleEdit, handleDelete }) {
  const renderStars = () => {
    return stars.map((item, index) => {
      const classNames = item === '1' ? 'fa fa-star checked' : 'fa fa-star';
      return <span key={index} className={classNames}></span>;
    });
  };
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__body-image">
          <img src={src} alt="" />
        </div>
        <h2 className="card__body-title mrgn-top20">{title}</h2>
        <div className="car__body-star mrgn-top10">
          {renderStars()}
          <p className="card__body-description mrgn-top20">{body}</p>
        </div>
        <button
          className="card__body-btn mrgn-top20 "
          onClick={() => handleEdit(id)}
        >
          Edit
        </button>
        <button
          className="card__body-btn red-color mrgn-top20"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
