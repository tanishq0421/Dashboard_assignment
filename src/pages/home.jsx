import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"
export const Home = () => {
    return(
        <div>
            <div><Header /></div>
            <div className="flex">
                <Sidebar />
            </div>
        </div>
    )
}