import PropTypes from "prop-types";

export const Card = ({ icon, eventName, startDate, startTime, endDate, endTime }) => {
  return (
    <div className="h-full w-full border-gray border-2 rounded-lg">
      <div className="flex flex-grow space-x-4 border-gray border-b-2 px-2 py-2">
        <img src={icon} alt="icon" className="h-8 w-8" />
        <div className="text-black text-md font-semibold">{eventName}</div>
      </div>
      <div className="px-2 py-2 flex flex-grow justify-between">
        <div className="space-y-2 pl-4">
          <div className="text-black text-md font-semibold">Start</div>
          <div className="text-gray-400 text-sm">{startDate}</div>
          <div className="text-gray-400 text-sm">{startTime}</div>
        </div>
        <div className="space-y-2 pr-4">
          <div className="text-black text-md font-semibold">End</div>
          <div className="text-gray-400 text-sm">{endDate}</div>
          <div className="text-gray-400 text-sm">{endTime}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired, // The icon prop must be a string (URL to the image)
  eventName: PropTypes.string.isRequired, // The eventName prop must be a string
  startDate: PropTypes.string.isRequired, // The startDate prop must be a string
  startTime: PropTypes.string.isRequired, // The startTime prop must be a string
  endDate: PropTypes.string.isRequired, // The endDate prop must be a string
  endTime: PropTypes.string.isRequired, // The endTime prop must be a string
};
