import { Navigate, useNavigate } from "react-router-dom";

const About = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <div>Welcome to about page</div>
        <button onClick={()=>navigate(-1)}>Go Back      </button>
        <button onClick={()=>navigate('/')}>Go Home      </button>
        </>

    )
};
export default About;