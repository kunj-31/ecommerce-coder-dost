import Navbar from "../features/navbar/Navbar";
import Productlist from "../features/product -list/components/Productlist";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar>
                <Productlist> </Productlist>
            </Navbar>
            
        </div>
    );
}
export default Home;




