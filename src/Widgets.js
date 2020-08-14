import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetsContainer">
                <h2>what's happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="kathakkar1"
                    options = {{height : 400}}
                />
                <TwitterShareButton 
                    url={"https://facebook.com/cleverprogrammer"}
                    options = {{ text:"#react js is awesome", via: "anurag"}}
                />
            </div>
        </div>
    )
}

export default Widget;
