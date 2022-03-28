

import React from 'react'
import AnimalList from './components/AnimalList'

function AnimalFeature(props) {
   const animalList = [
       {
           id: 1,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 2,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 3,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 4,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 5,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 6,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 7,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 8,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 9,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 10,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
           title: 'Animal images & Picture'
       }
   ]

   return(
       
       <div>
           
           <h2>Animal images & Picture</h2>
           <AnimalList animalList={animalList}/>
       </div>
   )
}

export default AnimalFeature
