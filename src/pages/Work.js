import Nav from "../components/Nav";
import "../styles/work.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

function Work() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current.querySelector(".imgStrip"),
      {
        rotateZ: 5,
        xPercent: -10,
        yPercent: 0,
      },
      {
        yPercent: -100,
        xPercent: 20,
        rotateZ: 5,
        scrollTrigger: {
          trigger: ref.current.querySelector(".imgStrip"),
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ref.current.querySelector(".strip h1"),
      {
        scale: 1,
        xPercent: 0,
      },
      {
        scale: 2.5,
        xPercent: -100,
        scrollTrigger: {
          trigger: ref.current.querySelector(".imgStrip"),
          start: "center top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ref.current.querySelector(".first .title"),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ref.current.querySelector(".first"),
          start: "bottom bottom",
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      }
    );
    // const tl = gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ref.current.querySelector("img"),
    //       scrub: true,
    //       markers: true,
    //     },
    //   })
    //   .to(ref.current.querySelector("img"), {
    //     stagger: 0.1,
    //     y: -700,
    //     scrub: true,
    //   });
  }, []);

  return (
    <ReactLenis root>
      <div ref={ref} className="work-page">
        <Nav
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 100,
          }}
        />

        <section className="first">
          <h1 className="title">Work Work Work</h1>
          <div className="strip">
            <h1>Work</h1>
            {/* Only good for six images */}
            <div className="imgStrip">
              <img src="./images/strip1.jpg" alt="" />
              <img src="./images/strip7.jpg" alt="" />
              <img src="./images/strip3.jpg" alt="" />
              <img src="./images/strip4.jpg" alt="" />
              <img src="./images/strip5.jpg" alt="" />
              <img src="./images/strip6.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="second"></section>
      </div>
    </ReactLenis>
  );
}

export default Work;
