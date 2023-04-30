import { Container } from "react-bootstrap";
import "../styles.css";
import Careworker1 from "./Images/Careworker1.jpg";
export default function Hero() {
  return (
    <div className="hero_container">
      <img src={Careworker1} alt="" className="myImage" />
      <div className="backgrounds" />
      <h1 className="hero_text">We Are The Caregiver’s Ally</h1>
      {/* <h3 className="subtitle">
        "Empowering Caregivers: A Supportive Community for people who are caring
        for their loved ones & Care Workers".
      </h3> */}
    </div>
  );
}
