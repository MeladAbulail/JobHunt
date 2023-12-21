import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function AllMembers() {
    const [members, setMembers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const membersResponse = await axios.get("http://localhost:4000/Users");
                console.log("Fetched Users data:", membersResponse.data);
                setMembers(membersResponse.data);
                setShowAll(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        window.scrollTo(0, 0);

        fetchData();
    }, []);

    const handleToggleShow = () => {
        setShowAll(true);
    };

    const displayedMembers = showAll ? members : members.slice(0, 3);

    return (
        <div className="w-full p-4 bg-white border-2 rounded-lg min-h-fit">
            <Link to = "/"><p className='text-xl w-fit'>&larr; Back to group</p></Link>
            <div className="flex flex-col mt-4 space-x-1">
                {displayedMembers && displayedMembers.length > 0 ? (
                    displayedMembers.map((member) => (
                        <div key={member.id} className="relative flex flex-col items-center space-x-2">
                            <div className="flex flex-row my-2">
                                <img
                                    src={member.imageURL}
                                    alt={`Admin ${member.id}`}
                                    className="w-[60px] h-[60px] rounded-full"
                                />
                                <div className="flex flex-col ml-4 ">
                                    <div className="flex flex-row ">
                                        <p className="font-bold w-fit">{member.UserName}</p>
                                        <p className="text-[#858585] text-sm ml-2">{member.ConnectionDeg}</p>
                                        <p className="text-[#3a3a3a] text-sm ml-2 bg-[#e8e8e8] px-2">{member.Role}</p>

                                    </div>
                                    <p className="min-w-[90%] break-all line-clamp-2 mr-2">{member.Desc}</p>
                                </div>
                                {/* Message button */}
                                <button className="h-8 px-2 my-auto ml-auto text-blue-500 bg-transparent border-2 border-blue-500 rounded-full hover:bg-blue-200" >
                                    Message
                                </button>
                            </div>
                            <div className="w-full border-2 border-gray-100"></div>
                        </div>
                    ))
                ) : (
                    <p>No Members available</p>
                )}
            </div>
        </div>
    );
}

export default AllMembers;