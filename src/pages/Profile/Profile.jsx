import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-center">My Profile</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>{user?.displayName}</td>
                                <td>
                                    <img src={user?.photoURL} alt="" className="w-44"/>
                                </td>
                                <td>{user.email}</td>
                            </tr>
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;