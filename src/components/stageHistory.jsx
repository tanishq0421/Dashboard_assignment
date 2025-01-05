import { StageHistoryData } from "../utils/StageHistoryData";
export const StageHistory = () => {
  return (
    <div className="h-full w-full border-gray border-b-2">
      <div className="text-md text-blue-900 border-gray py-2 px-2 h-11 border-b-2 font-semibold">
        Stage History
      </div>
      <div className="p-4 text-md text-black-500 font-semibold">
        August 2024
      </div>
      {StageHistoryData.map((data, index) => {
        return (
          <div className="p-4 flex flex-col" key={index}>
            <div className="flex flex-grow flex-row space-x-4">
              <div className="text-gray-400 text-md">{data.date}</div>
              <div className="flex flex-col items-center space-y-2">
                <div className="h-2 w-2 border-2 border-blue-900 rounded-full"></div>
                <div className="w-px h-full border-dotted border-gray-400 border-l"></div>
              </div>
              <div className="space-y-2">
                <div className="flex flex-grow space-x-2">
                  <div className="text-gray-500 text-md">{data.type}</div>
                  <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
                  <div className="text-gray-500 text-md">{data.time}</div>
                </div>
                <div className="text-md font-semibold text-black-500">
                  {data.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
