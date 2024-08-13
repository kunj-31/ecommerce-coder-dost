import Navbar from "../features/navbar/Navbar";
import AdminProductlist from "../features/admin/components/AdminProductlist";
function AdminHome() {
    return (
        <div>
            <Navbar>
                <AdminProductlist> </AdminProductlist>
            </Navbar>
        </div>
    );
}
export default AdminHome;




