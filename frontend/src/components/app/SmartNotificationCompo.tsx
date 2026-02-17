

// import React from 'react'
// import { Switch } from '../ui/switch';

import AnnouncementSwitch from '../utils/AnnouncementsSwitch';

export const SmartNotificationCompo = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-1 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-[#ebeee8] p-6 sm:p-8 lg:p-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083123] mb-4 lg:mb-6">
                        Smart notifications
                    </h2>
                    <p className="text-base sm:text-lg text-[#083123] leading-relaxed">
                        Easily accessible from the notifications center, calendar
                        or email with the relevant activities.
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 bg-[#fafafa]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-2 border-[#e8e8e8] mb-6 pb-4 sm:pb-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#104937] mb-4 sm:mb-6">
                            Email notification
                        </h3>

                        <div className="shadow-xl rounded-2xl mb-4 sm:mb-6 self-start sm:self-auto">
                            <button className="text-green-800 font-semibold hover:text-green-900 transition-colors px-4 py-2 sm:px-3 bg-white shadow-2xl rounded-sm text-sm sm:text-base">
                                Save
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-2 border-[#e8e8e8] pb-4 sm:pb-6">
                            <span className="text-gray-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                                New messages, comment, or replies
                            </span>
                            <div className="self-start sm:self-auto">
                                <AnnouncementSwitch />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-2 border-[#e8e8e8] pb-4 sm:pb-6">
                            <span className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                                Social emails
                            </span>
                            <div className="self-start sm:self-auto">
                                <AnnouncementSwitch />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b-2 border-[#e8e8e8] pb-4 sm:pb-6">
                            <span className="text-gray-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                                Announcement and Update
                            </span>
                            <div className="self-start sm:self-auto">
                                <AnnouncementSwitch />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#e8e8e8] pb-4 sm:pb-6">
                            <span className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                                Reminders
                            </span>
                            <div className="self-start sm:self-auto">
                                <AnnouncementSwitch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmartNotificationCompo;