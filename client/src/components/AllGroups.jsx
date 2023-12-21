import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function AllGroups() {
    const [groupsData, setGroupsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const groupsResponse = await axios.get('http://localhost:4000/Groups');
                setGroupsData(groupsResponse.data);
                console.log('Fetched Groups data:', groupsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    return (
        <div className="w-full p-4 bg-white border-2 rounded-lg min-h-fit">
            <div className="flex flex-row justify-between"><Link to="/"><p className='text-xl w-fit'>&larr; Back to group</p></Link>
                <button className="p-1 text-sm text-blue-500 bg-white border-2 border-blue-500 rounded-full hover:bg-blue-200"> Add Group</button></div>
            <div className="flex flex-col mt-4 space-x-1">
                {groupsData && groupsData.length > 0 ? (
                    groupsData.map((group) => (
                        <div key={group.id} className="w-full">
                            <div className="relative flex flex-col items-center w-full space-x-2">
                                <div className="flex flex-row w-full my-2"> {/* Updated width to 100% */}
                                    <img
                                        src={group.imageURL}
                                        alt={`Group ${group.id}`}
                                        className="w-[60px] h-[60px] rounded-full"
                                    />
                                    <div className="flex flex-col w-full ml-4">
                                        <div className="flex flex-row w-full ">
                                            <p className="w-full font-bold">{group.groupName}</p>
                                            <p className="text-[#858585] text-sm ml-2">{group.memberCount}</p>
                                        </div>
                                        <p className="w-full min-w-[90%] break-all line-clamp-2 mr-2">{group.groupDesc}</p>
                                    </div>
                                </div>
                                <div className="w-full border-2 border-gray-100"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Groups available</p>
                )}
            </div>
        </div>
    );
}

export default AllGroups;