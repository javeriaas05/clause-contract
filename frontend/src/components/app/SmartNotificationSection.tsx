// import React from 'react'

import TaskManagementCompo from './TaskManagementCompo'
import SmartNotificationCompo from './SmartNotificationCompo'
// import AnnouncementSwitch from '../utils/AnnouncementsSwitch'

const SmartNotifications = () => {
    return (
        <div className='bg-white p-2'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-8">
                {/* Smart Notifications Component */}
                <SmartNotificationCompo />

                {/* Task Management Component */}
                <TaskManagementCompo />


                {/* <AnnouncementSwitch/> */}

            </div>
        </div>
    )
}

export default SmartNotifications;













