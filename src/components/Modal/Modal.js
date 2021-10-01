import React, { useState } from 'react';
import './Modal.scss';

function Modal({ setModalOpen, onConfirmCard, editedCard }) {
  const initialStars = ['1', '1', '1', '0', '0'];
  const [stars, setStars] = useState(initialStars);
  const starOnClick = (id) => {
    let count = [...stars];
    count = count.map((item, i) => {
      if (i < id + 1) {
        return (item = '1');
      } else {
        return (item = '0');
      }
    });
    setStars(count);
    renderStars();
  };
  const renderStars = () => {
    return stars.map((item, index) => {
      const classNames = item === '1' ? 'fa fa-star checked' : 'fa fa-star';
      return (
        <span onClick={() => starOnClick(index)} className={classNames}></span>
      );
    });
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setModalOpen(false)}>X</button>
        </div>
        <div className="card__body">
          <div className="card__body-image">
            <img src={editedCard.src} alt="" />
          </div>
          <h2 className="card__body-title mrgn-top10">{editedCard.title}</h2>
          <div className="car__body-star mrgn-top10">{renderStars()}</div>
          <p className="card__body-description mrgn-top20">{editedCard.body}</p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirmCard(editedCard.id, stars);
              setModalOpen(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
