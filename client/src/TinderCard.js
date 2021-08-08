import React, { useState } from 'react'
import TinderCards from 'react-tinder-card'
import "./TinderCard.css"

const TinderCard = () => {
    const  [person, setPerson] = useState([
        {
            name: "Jhon Doe",
            imgURL: 'https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_960_720.jpg'
        },
        {
            name: "Alex Doe",
            imgURL: 'https://cdn.pixabay.com/photo/2017/08/05/20/28/couple-2585328_640.jpg'
        },
        {
            name: "Martin Joe",
            imgURL: 'https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_640.jpg'
        }

    ])

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
