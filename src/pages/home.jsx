import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"
import { Title } from "../components/title"
export const Home = () => {
    return(
        <div>
            <div><Header /></div>
            <div className="flex">
                <Sidebar />
                <Title />
            </div>
        </div>
    )
}