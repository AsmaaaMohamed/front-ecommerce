import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height:"100vh"}}>
      
        <LottieHandler type="notFound" />
        <Link to='/' replace={true}>Back Home</Link>

    </Container>
  );
};

export default Error;