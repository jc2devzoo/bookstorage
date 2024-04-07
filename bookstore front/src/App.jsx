import React from 'react'
import {Routes, Route} from 'react-router-dom'
import home from './pages/Home'
import CreateBook from './page/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'

const App = () => {
  return (
      <Routes>
        < Route path = '/' element={ <home/>} />
        < Route path = '/books/create' element={ <CreateBook/>} />
        < Route path = '/books/details/:id' element = { <ShowBook/>} />
        < Route path = '/books/edit/:ID' element = { <EditBook/>} />
        < Route path = '/books/delete/:id' element = { <DeleteBook/>} />
      </Routes>
  )
}

export default App
