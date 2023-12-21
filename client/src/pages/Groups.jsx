import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RightSlider from "../components/RightSlider"
import HEE from "../components/HEE";
import AllMembers from "../components/AllMembers";
import LeftSlider from "../components/LeftSlider";
import AllGroups from "../components/AllGroups"

function Groups() {
    return (
        <div >
            <Router>
                <div className="flex flex-row m-20 space-x-8 ">
                    <div className="flex flex-row mx-auto">
                        <LeftSlider />

                    </div>

                    <Routes>
                        <Route path="/" element={<HEE/>} />
                        <Route path="/AllMembers" element={<AllMembers />} />
                        <Route path="/AllGroups" element={<AllGroups />} />
                    </Routes>

                    <RightSlider />
                </div>
            </Router>
        </div>
    );
}

export default Groups;