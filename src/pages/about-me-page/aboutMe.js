import React from 'react'
import FrontPage from './front-page/frontPage';
import CodingEducation from './coding-education/CodingEducation.js';
import whatIKnow from './what-i-know/whatIKnow'
export default function aboutMe() {
    return (
        <div>
           <FrontPage />
           <CodingEducation />
           <whatIKnow />

        </div>
    )
}
