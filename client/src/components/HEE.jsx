import React, { useState } from 'react';
import { FaShare, FaBell, FaSignOutAlt, FaFlag } from 'react-icons/fa';

function HEE()  {
  const [shareTooltip, setShareTooltip] = useState(false);
  const [notificationsTooltip, setNotificationsTooltip] = useState(false);
  const [leaveGroupTooltip, setLeaveGroupTooltip] = useState(false);
  const [reportGroupTooltip, setReportGroupTooltip] = useState(false);

  return (
    <div className="">
      <section className="relative overflow-hidden bg-white border rounded-md shadow-md ">
        <div className="relative image-container">
          <img
            src="https://media.licdn.com/dms/image/C4D07AQFOs3pzsIS_Bw/group-heroimage-shrink_1125_282/0/1605830334455?e=1703689200&v=beta&t=HM5KiN_YVgbj2_934JbeEni5nCQAupzza-EPQ6MRW8s"
            alt="Group Cover"
            className="object-cover w-full h-40"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-white to-white"></div>
        </div>
        <div className="relative z-10 flex items-start p-8">
          <div className="logo-container ">
            <img
              src="https://media.licdn.com/dms/image/C4D07AQFK5LmvZWWTGg/group-logo_image-shrink_92x92/0/1630999696851?e=1703689200&v=beta&t=W6c_pFySH9TiMVQpR2e7QqKtg9SCx4d97wwkfF7teWI"
              alt="Group Logo"
              className="object-cover w-20 h-20 border-4 border-white rounded-full"
            />
          </div>
          <div className="ml-4">
            <h1 className="mb-1 text-2xl font-bold">JavaScript</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Public group
              </span>
              <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-full">
                Active Group
              </span>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center space-x-4 bottom-4 right-8">
          <div
            onMouseEnter={() => setShareTooltip(true)}
            onMouseLeave={() => setShareTooltip(false)}
          >
            <FaShare className="text-gray-500 cursor-pointer hover:underline" />
            {shareTooltip && (
              <div className="tooltip">Share</div>
            )}
          </div>

          <div
            onMouseEnter={() => setNotificationsTooltip(true)}
            onMouseLeave={() => setNotificationsTooltip(false)}
          >
            <FaBell className="text-gray-500 cursor-pointer hover:underline" />
            {notificationsTooltip && (
              <div className="tooltip">Manage notifications</div>
            )}
          </div>

          <div
            onMouseEnter={() => setLeaveGroupTooltip(true)}
            onMouseLeave={() => setLeaveGroupTooltip(false)}
          >
            <FaSignOutAlt className="text-gray-500 cursor-pointer hover:underline" />
            {leaveGroupTooltip && (
              <div className="tooltip">Leave this group</div>
            )}
          </div>

          <div
            onMouseEnter={() => setReportGroupTooltip(true)}
            onMouseLeave={() => setReportGroupTooltip(false)}
          >
            <FaFlag className="text-gray-500 cursor-pointer hover:underline" />
            {reportGroupTooltip && (
              <div className="tooltip hover:placeholder:text:Report this group">Report this group</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HEE;