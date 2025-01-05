import building from '../assets/building_icon.png';
import pin from '../assets/push_pin_icon.png';
import suitcase from '../assets/suitcase_icon.png';
import box from '../assets/boxes_icon.jpg';
import barchart from '../assets/bar_chart_icon.png';
import profile from '../assets/user1.png';
import square from '../assets/menu.png';

export const Sidebar = () => {
    return(
        <div className='flex flex-col items-center space-y-12 w-20 h-screen border-gray border-r-2 md:w-18 lg:w-18'>
            <img src={square} alt='square' className='w-8 h-8 mt-4 cursor-pointer'/>
            <img src={pin} alt='pin' className='w-10 h-10 cursor-pointer bg-blue-900'/>
            <img src={suitcase} alt='suitcase' className='w-10 h-10 cursor-pointer'/>
            <img src={building} alt='building' className='w-10 h-10 cursor-pointer'/>
            <img src={profile} alt='profile' className='w-10 h-10 cursor-pointer'/>
            <img src={box} alt='box' className='w-10 h-10 cursor-pointer'/>
            <img src={barchart} alt='barchart' className='w-10 h-10 cursor-pointer'/>
        </div>
    )
}