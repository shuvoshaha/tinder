import React, { useState } from 'react'
import TinderCards from 'react-tinder-card'
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
        console.log("removing" +nameToDelete)
    }

    const outOfFrame = () =>{
        
    }


    return (
        <div className="tinder_cards">
            <TinderCards 
             onSwipe={onSwipe}
             onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
             preventSwipe={['right', 'left']}
            />
        </div>
    )
}

export default TinderCard
