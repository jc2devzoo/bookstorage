import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';


export const Home = () => {
    const [books setBooks] = useState([]);
    const [loading setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true);
        axios
        .get('http://localhost:3000/books')
        .then((response)=>{
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
  return (
    <div>Home</div>
  )
}
