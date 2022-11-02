import {useDispatch} from "react-redux";
import {logout} from "../../features/auth/authSlice";
import Layout from "../../components/Layout";

const Main = () => {
    const dispatch = useDispatch();
    return(
        <Layout>
            <div>
                <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
            <div>
                sdf
            </div>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <p>long content</p>
                {
                    // indicates very long content
                    Array.from({ length: 100 }, (_, index) => (
                        <div key={index}>
                            {index % 20 === 0 && index ? 'more' : '...'}
                            <br />
                        </div>
                    ))
                }
            </div>
        </Layout>

    )
}

export default Main;
