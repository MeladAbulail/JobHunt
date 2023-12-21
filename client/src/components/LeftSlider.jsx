import React, { useState, useEffect } from 'react';
// import Box from './Box';

const MyBox = () => {
  const [user, setUser] = useState({
    name: 'Guest',
  });

  // Assume you have a function to fetch user information after login
  const fetchUserData = async () => {
    try {
      // Perform the user data fetch here, for example:
      const response = await fetch('http://example.com/api/user'); // endpoint
      const userData = await response.json();

      // Update the user state with the fetched data
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLinkClick = (groupId) => {
    const targetUrl = `http://localhost:3008/${groupId}`;
    window.location.href = targetUrl;
  };

  const recentGroups = [
    { id: 'recent-group-1', name: 'JavaScript Programming Jordan' },
    { id: 'recent-group-2', name: 'React Group' },
  ];

  useEffect(() => {
    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className="flex justify-center gap-10 ">
      {/* Left Section (User Profile, Recent Groups, Groups, Events) */}
      <div className="flex flex-col w-fit">
        {/* User Profile Section */}
        <div className="mb-8">
          <div className="overflow-hidden bg-white rounded-lg shadow-xl">
            <div className="h-32 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              />
            </div>
            <div className="relative w-16 h-16 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full ml-15">
              <img
                className="object-cover object-center h-16"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="font-semibold">{user.name}</h2>
            </div>
          </div>
        </div>

        {/* Recent Groups Section */}
        <div className="w-full mb-8">
          <h2 className="mb-2 text-xl font-semibold">Recent Groups:</h2>
          <ul>
            {recentGroups.map((group) => (
              <li key={group.id} className="mb-1">
                <a href="#" onClick={() => handleLinkClick(group.id)} className="text-blue-500 hover:underline">
                  {group.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Groups Section */}
        <div className="w-full mb-8 ">
          <h2 className="mb-2 text-xl font-semibold ">Groups:</h2>
          <ul>
            <li>
              <a href="#" id="javascript-group-link" onClick={() => handleLinkClick('javascript-group-id')} className="text-blue-500 hover:underlin">
                JavaScript Programming Jordan
              </a>
            </li>
            <li>
              <a href="#" id="react-group-link" onClick={() => handleLinkClick('react-group-id')} className="text-blue-500 hover:underlin">
                React Group
              </a>
            </li>
            <li>
              <a href="#" id="tailwind-group-link" onClick={() => handleLinkClick('tailwind-group-id')} className="text-blue-500 hover:underlin">
                Tailwind Group
              </a>
            </li>
          </ul>
        </div>

        {/* Events Section */}
        <div className="w-full mb-8">
          <h2 className="mt-4 mb-2 text-xl font-semibold">Events:</h2>
          <a href="http://localhost:3008/events" className="text-blue-500 hover:underline">
            View Events
          </a>
        </div>
      </div>

      {/* Right Section (Box) */}
      {/* <div className="w-[80%]" mb-32 mr-64> */}
      {/* Box Section */}
      {/* <Box /> */}
      {/* </div> */}
    </div>
  );
};

export default MyBox;