import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table')
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:3000/books')
          .then((res)=>{
            setBooks(res.data);
            setLoading(false);
          })
          .catch((err)=>{
            console.log(err);
         });
    },[]);
  return (
      <div className='p-4'>
        <div className="flex justify-center items-center gap-x-4">
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g"
          onClick={(()=> setShowType('table'))}>
            table
          </button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-1g"
          onClick={(() => setShowType('card'))}>
          Card
        </button>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-3x1 my-8 '> Books</h1>
           <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4x1' /> 
           </Link>
         </div>
        {loading ? (
          <Spinner />
          ): showType ==='table'? (
           <BooksTable books={books} />
         ) : (
          <BooksCard books={books} />
          )}
      </div>
    
  )
}

export default Home