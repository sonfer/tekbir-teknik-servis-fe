import {useDispatch} from "react-redux";
import {logout} from "../../features/auth/authSlice";

const Main = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Main;
