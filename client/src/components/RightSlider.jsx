import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RightSlider() {
    const [id, setId] = useState(1);
    const [showAll, setShowAll] = useState(false);
    const [displayMutualCount, setDisplayMutualCount] = useState(5);
    const [displayCount, setDisplayCount] = useState(3);
    const [members, setMembers] = useState([]);
    const [groupsData, setGroupsData] = useState([]);
    const [showAllGroups, setshowAllGroups] = useState(false);
    const [displayCountGroups, setDisplayCountGroups] = useState(3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const membersResponse = await axios.get('http://localhost:4000/Users');
                console.log('Fetched Users data:', membersResponse.data);
                setMembers(membersResponse.data);

                const groupsResponse = await axios.get('http://localhost:8080/groups');
                setGroupsData(groupsResponse.data);
                console.log('Fetched Groups data:', groupsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleToggleShow = () => {
        if (showAll) {
            setDisplayCount(3);
        }
        setShowAll(!showAll);
    };

    const handleToggleShowGroups = () => {
        if (showAllGroups) {
            setDisplayCountGroups(3);
        }
        setshowAllGroups(!showAllGroups);
    };

    const handleAddUser = async (id) => {
        try {
            const apiUrl = 'http://localhost:8080/ADDUSER';
            const response = await axios.post(apiUrl, { id });
            console.log('Response:', response.data);
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
        }
    };

    const displayedMutualMembers = showAll
        ? members.slice(0, Math.min(5, members.length))
        : members.slice(0, Math.min(5, displayMutualCount));

    const displayedAdmins = showAll ? members : members.slice(0, displayCount);


    return (
        <div>
            {/* First set of data */}
            <div className='min-h-fit w-[350px] bg-white border-2 rounded-lg mx-auto '>

                <div className='mt-4 ml-4 '>
                    <p className='font-bold'>{members.length} members</p>
                    <p className='mt-2 leading-5 '>Including Mossa Jehad and 2 other connections</p>
                    <div className='flex mt-4 space-x-1 '>
                        {displayedMutualMembers && displayedMutualMembers.length > 0 ? (
                            displayedMutualMembers.map((member) => (
                                <img
                                    key={member.id}
                                    src={member.imageURL}
                                    alt={`Member ${member.id}`}
                                    className='w-[50px] h-[50px] rounded-full'
                                />
                            ))
                        ) : (
                            <p>No members available</p>
                        )}
                    </div>
                </div>
                <hr className='mt-4'></hr>
                <Link to="/AllMembers"><div
                    className='hover:bg-[#bfbfbf] h-12 rounded-b-lg font-medium hover:cursor-pointer'

                >
                    <div className='relative text-[#858585] w-20 mx-auto h-full py-3'>
                        <p className=''>Show all →</p>
                    </div>
                </div>
                </Link>
            </div>



            {/* Your existing code for the second set of data */}
            <div className='min-h-fit w-[350px] bg-white border-2 rounded-lg mx-auto mt-4 '>
                <div className='mt-4 ml-4 '>
                    <p className='font-bold'>Admins</p>
                </div>
                <div className='flex flex-col mt-4 space-x-1 '>
                    {displayedAdmins && displayedAdmins.length > 0 ? (
                        displayedAdmins.map((member) => (
                            <div key={member.id} className='flex flex-col items-center space-x-2'>
                                <div className='flex flex-row my-2 '>
                                    <img
                                        src={member.imageURL}
                                        alt={`Admin ${member.id}`}
                                        className='w-[60px] h-[60px] rounded-full'
                                    />
                                    <div className='flex flex-col ml-4'>
                                        <div className='flex flex-col'>
                                            <p className='font-bold w-fit'>{member.UserName}</p>
                                            <div className='flex flex-row'>
                                                <p className='text-[#858585] text-sm ml-2'>{member.ConnectionDeg}</p>
                                                <p className='text-[#3a3a3a] text-sm ml-2 bg-[#e8e8e8] px-2'>{member.Role}</p>
                                            </div>
                                        </div>
                                        <p className='break-all w-52 line-clamp-2'>{member.Desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No admins available</p>
                    )}
                </div>
                <div
                    className='hover:bg-[#bfbfbf] h-12 rounded-b-lg font-medium hover:cursor-pointer'
                    onClick={handleToggleShow}
                >
                    <div className='relative text-[#858585] w-fit mx-auto h-full py-3'>
                        <p className='w-fit'>{showAll ? 'Show less' : 'Show more →'}</p>
                    </div>
                </div>
            </div>


            {/*Groups*/}
            <div className='min-h-fit w-[350px] bg-white border-2 rounded-lg mx-auto mt-4'>
                <div className='mt-4 ml-4'>
                    <p className='font-bold'>Groups you might be interested in</p>
                </div>
                <div className='flex flex-col mt-4 space-y-1'>
                    {groupsData && groupsData.length > 0 ? (
                        groupsData.map((group) => (
                            <div key={group.id} className='flex flex-col items-center space-x-2'>
                                <div className='flex flex-row my-2 '>
                                    <img
                                        src={group.imageURL}
                                        alt={`Admin ${group.id}`}
                                        className='w-[60px] h-[60px] rounded-full'
                                    />
                                    <div className='flex flex-col ml-4'>
                                        <div className='flex flex-col'>
                                            <p className='font-bold break-all w-52 line-clamp-2 hover:underline hover:decoration-2'>{group.groupName}</p>
                                            <p className='text-[#b4b4b4] text-sm mt-1'>{group.memberCount} members</p>
                                            <button onClick={handleAddUser(id)} className='w-16 px-4 py-1 mt-1 border-2 border-black rounded-full'>Join</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Groups available</p>
                    )}
                </div>
                <Link to="/AllGroups"><div
                    className='hover:bg-[#bfbfbf] h-12 rounded-b-lg font-medium hover:cursor-pointer'
                    onClick={handleToggleShowGroups}
                >
                    <div className='relative text-[#858585] w-fit mx-auto h-full py-3'>
                        <p className='w-fit'>{showAllGroups ? 'Show less' : 'Show more →'}</p>
                    </div>
                </div>
                </Link>
            </div>


        </div>
    );
}

export default RightSlider;