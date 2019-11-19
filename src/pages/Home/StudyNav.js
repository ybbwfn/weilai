import React from 'react'
import './StudyNav.less'

function StudyNav(){
    return <ul className="studyNav">
        <li>
            <span>前</span>
            <span>前端</span>
        </li>
        <li>
            <span>后</span>
            <span>后端</span>
        </li>
        <li>
            <span>测</span>
            <span>测试</span>
        </li>
        <li>
            <span>运</span>
            <span>运维</span>
        </li>
    </ul>
}

export default StudyNav;