import "./App.css";
import Nav from "./components/Nav";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ArticleSection from "./components/ArticleSection";
import Amogus from "./components/Amogus";

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-700 300 1920 427">
            <path
              fill="var(--black-lt)"
              fill-opacity="1"
              d="M0,32L30,69.3C60,107,120,181,180,181.3C240,181,300,107,360,106.7C420,107,480,181,540,224C600,267,660,277,720,250.7C780,224,840,160,900,154.7C960,149,1020,203,1080,229.3C1140,256,1200,256,1260,234.7C1320,213,1380,171,1410,149.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              data-darkreader-inline-fill=""
            ></path>
          </svg>
          <div className="footerEffect">
            {/* <Amogus stroke fill height="30%" /> */}
            {Array(70)
              .fill(0)
              .map((_, i) => (
                <Amogus
                  key={i}
                  stroke
                  fill={Math.random() < 0.3 ? true : false}
                  height={`${Math.random() * 70}%`}
                />
              ))}
          </div>
          <img src="./images/footer-bg.png" className="footerBg" />
          <button>Learn more</button>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
