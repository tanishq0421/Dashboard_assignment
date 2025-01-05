import refresh from '../assets/refresh_icon.png';
import profileAdd from '../assets/account_add_icon.png';
import addIcon from '../assets/add_icon.png';
import list from '../assets/point.png';

export const Title = () => {
    return (
        <div className="border-gray-200 border-b-2 px-6 py-4 w-full">
            <div className="flex sm:flex-row sm:items-center sm:justify-between">
                <div className="text-md text-gray-400">
                    Dashboard <span className="mx-1">/</span> Lead <span className="mx-1">/</span> <span className="text-md text-black">LE-010071</span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:mt-4 sm:mt-2">
                <div className="text-3xl font-bold text-black my-6 sm:my-0">LE-010071</div>
                <div className='flex justify-center my-6 sm:my-0 space-x-6'>
                    <img src={addIcon} alt='addIcon' className='w-6 h-6 cursor-pointer'/>
                    <img src={profileAdd} alt='profileAdd' className='w-6 h-6 cursor-pointer'/>
                    <img src={list} alt='list' className='w-6 h-6 cursor-pointer'/>
                    <img src={refresh} alt='refresh' className='w-6 h-6 cursor-pointer'/>
                </div>
            </div>
        </div>
    );
}