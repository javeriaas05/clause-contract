


import React from 'react'

export const TaskManagementCompo = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-[#ebeee8] p-6 sm:p-8 lg:p-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083123] mb-4 sm:mb-6">
                        Task management
                    </h2>
                    <p className="text-base sm:text-lg text-[#083123] leading-relaxed">
                        Discuss contract queries, manage tasks, secure
                        approvals, track progress in the workspace.
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 bg-[#fafafa]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-12">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#083123]">Activity</h3>
                        <div className='shadow-2xl rounded-2xl'>
                            <button className="flex rounded items-center gap-2 text-green-800 font-semibold hover:text-green-900 transition-colors bg-white px-3 py-2 sm:px-4">
                                <span className="text-lg">+</span> Message
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* First Activity */}
                        
                        <div className="flex gap-3 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:py-3 p-4  sm:px-2">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500  rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                                BS
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold bg-white py-2 sm:py-4 px-2 text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Bill Sanders</h4>
                                <div className="flex items-center gap-3 bg-white rounded-xl p-3 sm:p-4">
                                
                                    <span className="text-gray-900 text-sm sm:text-base"> Hello @Ragip Diller, Could you sign the contract before
                                        the March 12? Thank you in advance 😊</span>
                                </div>
                            </div>
                        </div>

                        {/* Second Activity */}
                        <div className="flex gap-3 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:py-5 p-4  sm:px-2">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                                JC
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold bg-white py-2 sm:py-4 px-2 text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Jane Cooper</h4>
                                <div className="flex items-center gap-3 bg-white rounded-xl p-3 sm:p-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded"></div>
                                    </div>
                                    <span className="text-gray-500 text-sm sm:text-base">Uploaded new contract</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManagementCompo;