import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/Modal/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [editedCard, setEditedCard] = useState([]);
  const [InputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleDelete = (id) => {
    const deletedData = filteredData.filter((item) => item.id !== id);
    setFilteredData(deletedData);
    toast.error('Food deleted!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleSearch = (searchedData) => {
    setInputText(searchedData);
    const filtered = data.filter((item) =>
      Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(InputText.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };
  const handleEdit = (id) => {
    setModalOpen(true);
    const thisFood = filteredData.find((item) => item.id === id);
    setEditedCard(thisFood);
  };
  const onConfirmCard = (id, stars) => {
    let newData = filteredData.filter((item) => item.id !== id);
    let editedFood = filteredData.find((item) => item.id === id);
    editedFood = { ...editedFood, stars };
    newData = [...newData, editedFood].sort((a, b) => a.id - b.id);
    setFilteredData(newData);
    toast.success('Edited successfully', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    axios(
      'https://624f65c5-9b46-49dc-acd5-c9505bf314c0.mock.pstmn.io/foods'
    ).then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });
  }, []);

  return (
    <div className="app">
      <Header data={data} handleSearch={handleSearch} />
      <Main
        handleDelete={handleDelete}
        data={filteredData}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        handleEdit={handleEdit}
      />
      <Footer />
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          data={filteredData}
          onConfirmCard={onConfirmCard}
          editedCard={editedCard}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
