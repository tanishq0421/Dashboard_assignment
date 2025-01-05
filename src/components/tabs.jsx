import { useState } from "react";

export const Tabs = () => {
    const tabs = ["New", "Contacted", "Nurturing", "Qualified", "Unqualified"];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return(
        <div className="flex w-full justify-between px-6 py-2 border-b-2">
            <div className="flex w-full justify-between">
                <div className="flex space-x-6">
                    {tabs.map((tab, index) => {
                        const isSelected = selectedTab === index;
                        return(
                            <div 
                                key={index} 
                                className={`flex flex-col items-center justify-center w-1/6 md:w-3/8 rounded-md h-10 cursor-pointer p-2 ${isSelected ? 'bg-orange-100 text-orange-500' : 'bg-gray-200 text-gray-400'}`}
                                onClick={() => setSelectedTab(index)}
                            >
                                <div className="text-md mx-2">{tab}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="bg-blue-900 text-center text-white w-3/8 rounded-md cursor-pointer px-8 py-2"> Mark as Converted</div>
            </div>
        </div>
    )
}