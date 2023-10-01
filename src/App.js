import "./App.css";
import Nav from "./components/Nav";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ArticleSection from "./components/ArticleSection";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".effectText"),
      {
        xPercent: -50,
      },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: element.querySelector(".effectText"),
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <ReactLenis root>
      <div ref={ref} className="App">
        <Nav
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 100,
          }}
        />
        <section className="hero">
          <img src="./images/verve4.png" className="liquidImg" />
          <h1 className="effectText">fashion fashion fashion</h1>
        </section>
        <ArticleSection />
      </div>
    </ReactLenis>
  );
}

export default App;
