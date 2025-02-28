
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            {/* Header */}
            <Header></Header>
            {/* dynamic section */}
            <Outlet></Outlet>
            {/* Footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default Root;