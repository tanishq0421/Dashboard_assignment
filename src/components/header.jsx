import grid from "./../assets/menu1.png"
import settings from "./../assets/settings_icon.png"
import search from "./../assets/search_icon.png"    
import bell from "./../assets/bell_icon.png"
import calender from "./../assets/calender_icon.png"
import profile from "./../assets/user.png"

export const Header = () => {
    return(
        <div className="flex flex-col sm:flex-row mt-2 p-2 justify-between items-center bg-blue-900 w-full">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0 ml-4">
                <img src={grid} alt="grid" className="w-6 h-6"/>
                <div className="text-xl font-md text-white">Test</div>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
                <img src={search} alt="search" className="w-6 h-6 bg-white cursor-pointer"/>
                <div className="hidden sm:block w-px h-8 bg-gray-400"></div>
                <img src={settings} alt="settings" className="w-6 h-6 bg-white cursor-pointer"/>
                <img src={bell} alt="bell" className="w-6 h-6 bg-white cursor-pointer"/>
                <img src={calender} alt="calender" className="w-6 h-6 bg-white cursor-pointer"/>
                <div className="hidden sm:block w-px h-8 bg-gray-400"></div>
                <img src={profile} alt="profile" className="w-8 h-8 cursor-pointer"/>
            </div>
        </div>
    )
}
