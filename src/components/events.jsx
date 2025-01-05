import { Card } from "./card";
import { CardData } from "../utils/cardData";

export const Event = () => {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex flex-grow justify-between">
        <div className="text-blue-900 font-semibold text-md">
          Upcoming & Overdue
        </div>
        <div className="text-blue-900 font-semibold text-md cursor-pointer border-blue-900 border-b-2">
          View All
        </div>
      </div>
      <div className="flex flex-grow space-x-6 justify-between w-full">
        {CardData.map((card, index) => {
          return (
            <div key={index} className="my-4 w-3/5">
              {" "}
              <Card eventName={card.eventName}
                    icon={card.icon}
                    startDate={card.startDate}
                    endDate={card.endDate}
                    startTime={card.startTime}
                    endTime={card.endTime}
             />
            </div>
          );
        })}
      </div>
    </div>
  );
};
