import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import {Header} from "@components/common";
import { Footer } from "@components/common";

const {container , wrapper} = styles;
const MainLayout = () => {
  return (
    <Container className={container}>
        <Header/>
        <div className={wrapper}>MainLayout</div>
        <Footer/>
    </Container>
  );
};

export default MainLayout;
