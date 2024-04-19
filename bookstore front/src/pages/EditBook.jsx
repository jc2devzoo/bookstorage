import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false)
      }).catch((err) => {
        setLoading(false);
        alert('an error happened. Please chack console');
        console.log(err);
      });

  }, [])

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        alert('an error happened. Please chack console');
        console.log(err);
      })
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3x1 my-4'>Edit a Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className="text-x1 mr-4 text-gray-500"> Title </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500'
          />
        </div>
        <div className='my-4'>
          <label className="text-x1 mr-4 text-gray-500"> Author </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500'
          />
        </div>
        <div className='my-4'>
          <label className="text-x1 mr-4 text-gray-500"> Publish Year </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}> Save edit</button>
      </div>
    </div>
  )
}

export default EditBooks
