import { useState } from "react";
import bulb from "./../assets/light_bulb_icon.png";
import email from "./../assets/messages_icon.png";
import phone from "./../assets/phone_call_icon.png";
// import calender from "./../assets/calender_icon.png";
import plusIcon from "./../assets/plus_icon.png";

export const Activity = () => {
    const tabs = ["Activity", "Actionables", "Tasks", "Note & File"];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const events = [
        {
            name: "Log a Call",
            icon: phone,
        },
        {
            name: "Email",
            icon: email,
        },
        {
            name: "Event",
            icon: bulb,
        },
    ];
    return (
        <div className="w-full border-r-2 h-full border-b-2">
            <div className="flex flex-wrap md:flex-nowrap space-x-4 border-b-2 justify-start">
                {tabs.map((tab, index) => {
                    const isSelected = selectedTab === tab;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-md justify-center cursor-pointer p-2 ${
                                isSelected
                                    ? "text-blue-900 border-b-2 border-blue-900"
                                    : "text-gray-400"
                            }`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            <div className="text-md mx-4">{tab}</div>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between px-6 py-4 mr-10">
                {events.map((event, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center border-gray border-2 rounded-md cursor-pointer mb-4 md:mb-0"
                        >
                            <img
                                src={event.icon}
                                alt="phone"
                                className="h-10 w-10 bg-gray-200 p-1"
                            ></img>
                            <div className="px-4 text-black-500">{event.name}</div>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap md:flex-nowrap mx-6">
                <div className="w-full md:w-1/2 mr-0 md:mr-10 mb-2 md:mb-0">
                    <div className="text-md text-black-200 font-semibold mb-2">
                        Subject
                    </div>
                    <input
                        type="text"
                        className="h-10 w-full px-4 text-gray-400 border-gray border-2 rounded-md"
                        placeholder="Input text"
                    />
                    <div className="text-md text-black-200 font-semibold my-2">
                        Due Date
                    </div>
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="h-10 w-full px-4 text-gray-400 border-gray border-2 rounded-md pr-10"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:ml-10">
                    <div className="text-md text-black-200 font-semibold mb-2">
                        Add People
                    </div>
                    <input
                        type="text"
                        className="h-10 w-full px-4 text-gray-400 border-gray border-2 rounded-md"
                        placeholder="Input text"
                    />
                    <div className="text-md text-black-200 font-semibold my-2">Time</div>
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="h-10 w-full px-4 text-gray-400 border-gray border-2 rounded-md pr-10"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-6 my-4">
                <div className="text-black-500 text-md font-semibold mb-2">Description</div>
                <input type="text" placeholder="Input Text" className="text-gray-400 border-gray border-2 rounded-md w-full h-20"/>
            </div>
            <div className="flex flex-grow items-center justify-between mx-6 my-4">
                <div className="flex flex-grow items-center space-x-2">
                    <img src={plusIcon} alt="plusIcon" className="h-6 w-6"/>
                    <div className="text-gray-400 text-md">Add Team Member</div>
                </div>
                <button className="text-white text-center bg-blue-900 rounded-md h-10 px-6">Submit</button>
            </div>
        </div>
    );
};
