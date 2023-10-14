import "../App.css";
import Nav from "../components/Nav";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ArticleSection from "../components/ArticleSection";
import Amogus from "../components/Amogus";

function Home() {
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

    gsap.fromTo(
      element.querySelector("footer svg"),
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: element.querySelector("footer svg"),
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("footer button"),
      {
        opacity: 0,
        scaleX: 0,
      },
      {
        opacity: 1,
        scaleX: 1,
        scrollTrigger: {
          trigger: element.querySelector("footer button"),
          start: "top bottom",
          end: "bottom bottom",
          // scrub: true,
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
        <footer>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 108.05"
          >
            <path
              fill="var(--black-lt)"
              class="cls-1"
              d="M0,0H1920s-32.43,89.86-90.66,41.75S1764.78,67.09,1709.09,62s-81-51.9-107.6-39.25-87.34,110.64-174.68,39.5S1300.23,25.92,1271.11,44,1107.82,144.3,1039.47,72.15,858.46,19,828.08,39.24,711.62,98.73,601.49,31.65s-225.31,69.62-324,75.94-51.9-56.18-122.78-53.65S80.78,81,0,0Z"
            />
          </svg>

          <div className="footerEffect">
            {/* <Amogus stroke fill height="30%" /> */}
            {Array(70)
              .fill(0)
              .map((_, i) => (
                <Amogus
                  key={i}
                  stroke
                  fill={Math.random() < 0.2 ? true : false}
                  height={`${Math.random() * 70}%`}
                />
              ))}
          </div>
          <img src="./images/footer-bg4.png" className="footerBg" />
          <button>Learn more</button>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default Home;
