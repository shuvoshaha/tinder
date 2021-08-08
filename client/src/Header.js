import React from 'react'
import IconItem from '@material-ui/core/IconButton';
import  PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
    return (
        <div className="header">
            <div className="container">
              <div className="header_wrapper">
              <IconItem>
                    <PersonIcon fontSize="large" className="header_icon" />
                </IconItem>

                <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png"
                    className="brand_logo" alt="tinder" />

                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large" />  
                </IconButton>  
            </div>
              </div>

        </div>
    )
}

export default Header
