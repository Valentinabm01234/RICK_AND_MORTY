import {Link} from "react-router-dom";

const Profile = () => {
    return(
<div>
    <h1>Profile</h1>
    <button>
    <Link to='/person'>Person</Link>
</button>
</div>
    )
};

export default Profile;