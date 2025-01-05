import profile from "./../assets/user.png";
import { useState } from "react";

export const Details = () => {
  const tabs = [
    "Basic Details",
    "Account Details",
    "Lead Details",
    "Team",
    "Other Contacts",
  ];

  const persons = [
    {
      name: "Pranab Biyani",
      designation: "Associate VP",
      vertical: "Sales Head",
    },
    {
      name: "Nayan Johal",
      designation: "Associate VP",
      vertical: "Sales Head",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="w-2/5 h-full border-r-2">
      <div className="flex px-6 pt-2 pb-4 justify-between border-b-2">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center mt-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
            <div className="text-md font-semibold text-yellow-500">
              Contacted
            </div>
          </div>
          <div className="font-semibold text-3xl">Mamta Naik</div>
          <div className="flex items-center mt-2">
            <img
              src={profile}
              alt="profile"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="text-gray-400 text-md">Aniruddh Naidu</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-gray-400">Pending Actions</div>
          <div className="flex space-x-4 my-2">
            <div className="bg-green-100 text-green-500 px-4 py-1 rounded-md">
              Create Account
            </div>
            <div className="bg-yellow-100 text-yellow-500 px-4 py-1 rounded-md">
              Create Contact
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b-2">
        {tabs.map((tab, index) => {
          const isSelected = selectedTab === tab;
          return (
            <div
              key={index}
              className={`flex flex-col items-center text-sm justify-center w-1/8 md:w-3/8 cursor-pointer p-2 ${
                isSelected
                  ? "text-blue-900 border-b-2 border-blue-500"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              <div className="text-md mx-4">{tab}</div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex justify-between px-6 py-4">
          <div>
            <div className="text-gray-500 font-semibold mb-2">Account</div>
            <select className="border bg-white text-gray-400 rounded-sm pl-4 pr-32 py-2">
              <option value="disabled">Select Option</option>
              <option value="account1">Account 1</option>
              <option value="account2">Account 2</option>
              <option value="account3">Account 3</option>
            </select>
          </div>
          <div>
            <div className="text-gray-500 font-semibold mb-2">Contact</div>
            <select className="border bg-white text-gray-400 rounded-sm pl-2 pr-32 p-2">
              <option value="disabled">Select Option</option>
              <option value="contact1">Contact 1</option>
              <option value="contact2">Contact 2</option>
              <option value="contact3">Contact 3</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {persons.map((person, index) => {
          return (
            <div className="px-6" key={index}>
              <div className="flex my-6 justify-between">
                <div>
                  <div className="text-blue-500 text-md">{person.name}</div>
                  <div className="text-gray-400">{person.designation}</div>
                </div>
                <div className="text-black-300 font-bold">
                  {person.vertical}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
