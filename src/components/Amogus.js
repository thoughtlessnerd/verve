import "../styles/Amogus.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Amogus(props) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element,
      {
        height: 0,
      },
      {
        height: props.height,
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="amogus"
      style={{
        height: props.height,
        transformOrigin: "top",
        background: props.fill ? "var(--black-lt)" : "transparent",
        border: props.stroke ? "1px solid var(--black-lt)" : "none",
      }}
    ></div>
  );
}

export default Amogus;
