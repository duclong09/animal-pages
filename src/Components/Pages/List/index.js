

import React from 'react'
import AnimalList from './components/AnimalList'
import './styles.css'

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
           name: 'Wild',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 3,
           name: 'Flamingo',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 4,
           name: 'Fish',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 5,
           name: 'Dog',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1586959140255-aab0163e21cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 6,
           name: 'Panda',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 7,
           name: 'Deer',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 8,
           name: 'Eagle',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 9,
           name: 'Cat Bao Bao',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 10,
           name: 'Chickend',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1546272989-40c92939c6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 11,
           name: 'Giraffe',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       },
       {
           id: 12,
           name: 'Birds',
           thumbnaiUrl: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
           title: 'Animal images & Picture'
       }
   ]

   return(
       
       <div className='animal-rener'>
           
           <h2>Animal images & Picture</h2>
           <AnimalList animalList={animalList}/>
       </div>
   )
}

export default AnimalFeature
