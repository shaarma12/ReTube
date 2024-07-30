import menu from "../Images/menu.png"
import logo from "../Images/logo.png"
import search from "../Images/search.svg"
import notification from "../Images/notification.svg"
import create from "../Images/create.png"
import user from "../Images/user.png"
import {useDispatch} from "react-redux"
import { toogleState } from "../utils/toggleSlice"
import { useEffect, useState } from "react"
import { SUGGESTION_API } from "../constant"

const Header = () => {
    const [searchQuery, setSearchQuery] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        getSuggestion();
    }, []);
    const getSuggestion = async () => {
        try {
            const apiData = await fetch(SUGGESTION_API + searchQuery);
            const jsonData = await apiData.json();
            console.log("Suggestions", jsonData);
        }
        catch(error) {
            console.log("Getting Error in Fetching Suggestion API:-", error);
        }
    }
    return (
        <>
            <div className="py-3 flex items-center justify-between">
                <div className="xl:w-12 w-28 flex justify-center items-center">
                    <img src={menu} alt="hamburger" className="md:h-5 h-3 lg:ml-14 md:ml-8 xl:ml-28 xl:w-12 lg:w-12 md:w-5 w-3 -ml-3 hover:cursor-pointer" onClick={() => {
                        dispatch(toogleState());
                    }}/>
                    <div className="flex items-center">
                        <img src={logo} alt="YouTube" className="xl:h-10 lg:h-10 md:h-7 h-5 relative md:left-7 left-3" />
                        <p className="text-white relative md:left-8 left-3 xl:text-2xl lg:text-2xl md:text-lg text-sm font-semibold font-sans tracking-tighter">TubeCast</p>
                        </div>
                </div>
                <div className="flex">
                    <input type="text" placeholder="Search" value={searchQuery} className="rounded-tl-full rounded-bl-full text-white bg-[#121212] border-[1px] border-gray-600 md:w-[19rem] xl:w-[33rem] lg:w-[30rem] w-44 md:ml-20  lg:ml-36 xl:h-10 lg:h-10 md:h-8 h-6 placeholder: pl-6 pb-1 xl:text-lg lg:text-lg md:text-base text-xs" onChange={(e)=>{
                        setSearchQuery(e.target.value);
                    }}/>
                    <div className="md:w-16 w-5 xl:h-10 lg:h-10 md:h-8 h-6 border-[1px] border-gray-600 rounded-tr-full rounded-br-full bg-[#FFFFFF14] hover:cursor-pointer">
                        <img src={search} alt="search" className="md:mt-[0.35rem] xl:mt-2 lg:mt-2 mt-[0.35rem] md:ml-5 ml-[0.15rem] md:w-5 w-3"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <img src={create} alt="create" className="md:block hidden xl:w-10 lg:w-10 md:w-7 w-4 md:mr-6 hover:cursor-pointer"/>
                    <img src={notification} alt="notification" className="xl:w-7 lg:w-7 md:w-5 w-4 md:mr-6 mr-2 hover:cursor-pointer"/>
                    <img src={user} alt="user" className="xl:w-[1.85rem] lg:w-[1.85rem] md:w-5 w-4 md:mr-6 mr-2 hover:cursor-pointer"/>
                </div>
            </div>
        <div className="bg-[#212121] z-50 shadow-lg border-[1px] border-[#393939] absolute left-[30rem] rounded-xl w-[33rem] -mt-2">
            <ul className="py-4 px-3">
                <li className="px-2 py-1 bg-[#474747] text-white font-bold rounded-xl mt-1">Iphone 11</li>
                <li className="px-2 py-1 bg-[#474747] text-white font-bold rounded-xl mt-1">Iphone 10</li>
                <li className="px-2 py-1 bg-[#474747] text-white font-bold rounded-xl mt-1">Iphone 12</li>
                <li className="px-2 py-1 bg-[#474747] text-white font-bold rounded-xl mt-1">Iphone 9</li>
                <li className="px-2 py-1 bg-[#474747] text-white font-bold rounded-xl mt-1">Iphone 8</li>
                <li className="px-2 py-1 bg-[#474747] text-white font-bold rounded-xl mt-1">Iphone XE</li>
                </ul> 
                </div>
        </>
    );    
}
export default Header;