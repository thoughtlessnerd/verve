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

    gsap.fromTo(
      ref.current.querySelector(".second .slider"),
      {
        xPercent: 10,
        yPercent: -50,
      },
      {
        xPercent: -90,
        yPercent: -45,
        scrollTrigger: {
          trigger: ref.current.querySelector(".second"),
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ref.current.querySelectorAll(".second .title"),
      {
        opacity: 0,
        xPercent: 10,
      },
      {
        opacity: 1,
        xPercent: 0,
        scrollTrigger: {
          trigger: ref.current.querySelector(".second"),
          start: "top center",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ref.current.querySelector(".second .slides h1"),
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: -50,
        scrollTrigger: {
          trigger: ref.current.querySelector(".second"),
          start: "top 20%",
          end: "top top",
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
    <ReactLenis easing={(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))} root>
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
        <section className="second">
          <h1 className="title">billo bagge billeyan da ki karegi</h1>
          <h1 className="title">billo bagge billeyan da ki karegi</h1>
          <div className="slides">
            <h1>Billo Bagge Billeyan</h1>
            <div className="slider">
              <img src="./images/slide1.jpg" alt="" />
              <img src="./images/slide2.jpg" alt="" />
              <img src="./images/slide3.jpg" alt="" />
              <img src="./images/slide4.jpg" alt="" />
              <img src="./images/slide5.jpg" alt="" />
              <img src="./images/slide6.jpg" alt="" />
              <img src="./images/slide7.jpg" alt="" />
              <img src="./images/slide8.jpg" alt="" />
              <img src="./images/slide9.jpg" alt="" />
              <img src="./images/slide10.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="third"></section>
      </div>
    </ReactLenis>
  );
}

export default Work;
