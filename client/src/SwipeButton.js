import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import FavoritIcon from '@material-ui/icons/Favorite'
import StarRate from '@material-ui/icons/StarRate'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import './SwipeButton.css'

const SwipeButton = () => {
    return (
        <div className="swipe_button_container">
            <div className="swipe_buttons">
            <IconButton >
                <ReplayIcon fontSize="large" className="swipeButtons_repeat"/>
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRate fontSize="large" />
            </IconButton>
            <IconButton  className="swipeButtons_right">
                <FavoritIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lighting">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
        </div>
    )
}

export default SwipeButton;