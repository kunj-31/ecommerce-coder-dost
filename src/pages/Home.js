import Navbar from "../features/navbar/Navbar";
import Productlist from "../features/product -list/Productlist";


function Home(){
    return(
<div>
<Navbar>
    <Productlist></Productlist>
</Navbar>
</div>
    );
}
export default Home;