import React, { useState, useEffect } from 'react'
import TinderCards from 'react-tinder-card'
import "./TinderCard.css"
import axios from './axios'

const TinderCard = () => {
    const  [person, setPerson] = useState([])

    // get person data using API
    useEffect(() =>{
        const fetchData = async () =>{
            await axios.get('/tinder/cards')
            .then(res => setPerson(res.data))
            .catch(err => { console.log(err) })
        }
        fetchData()
    }, [setPerson])

    console.clear()

    const onSwipe = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete)
    }

    const outOfFrame = (name) =>{
        console.log()
    }


    return (
        <div className="tinder_cards">
         <div className="container tinder-container">
         {
               person.map((person) =>{
                   return (
                    <TinderCards 
                    className="swipe"
                    key={person.name}
                    onSwipe={(dir) =>onSwipe(dir, person.name) }
                    onCardLeftScreen={() => outOfFrame(person.name)} 
                    preventSwipe={['right', 'left']}
                   >
                       <div className="card" style={{ backgroundImage: `url(${person.imgURL})`}}>
                           <h2>{person.name} </h2>
                       </div>
                   </TinderCards>
                   )
               })
           }
         </div>
        </div>
    )
}

export default TinderCard
