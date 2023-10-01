import "../styles/ArticleSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function LineBox(props) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".line"),
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: element.querySelector(".line"),
          start: "top center",
          end: "bottom center",
          // scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".box"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".box"),
          start: "top 80%",
          end: "center center",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  let vertical = props.orientation === "column";
  let flip = props.flip;

  return (
    <>
      {!flip ? (
        <div
          ref={ref}
          className="line-box"
          style={{
            flexDirection: props.orientation,
            height: vertical ? props.size : "initial",
            width: vertical ? "initial" : props.size,
          }}
        >
          <div
            className="line"
            style={{
              height: vertical ? "100%" : "2px",
              width: vertical ? "2px" : "100%",
            }}
          ></div>
          {props.content ? (
            <div
              style={{
                padding: vertical ? "2rem 0.5rem" : "0.5rem 2rem",
              }}
              className="box"
            >
              {props.content}
            </div>
          ) : null}
        </div>
      ) : (
        <div
          ref={ref}
          className="line-box"
          style={{
            flexDirection: props.orientation,
            height: vertical ? props.size : "initial",
            width: vertical ? "initial" : props.size,
          }}
        >
          {props.content ? (
            <div
              style={{
                padding: vertical ? "2rem 0.5rem" : "0.5rem 2rem",
              }}
              className="box"
            >
              {props.content}
            </div>
          ) : null}
          <div
            className="line"
            style={{
              height: vertical ? "100%" : "2px",
              width: vertical ? "2px" : "100%",
            }}
          ></div>
        </div>
      )}
    </>
  );
}

function ArticleSection() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("article"),
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("article"),
          start: "top 80%",
          end: "center center",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section ref={ref} className="articleSection">
      <header>Today Article</header>
      <LineBox content="" orientation="column" size="100%" />
      <LineBox content="Article" orientation="column" size="60%" />
      <LineBox content="" orientation="column" size="100%" />
      <LineBox content="Design" orientation="column" size="100%" />
      <LineBox content="" orientation="column" size="100%" />
      <LineBox content="Student" orientation="column" flip size="100%" />
      <LineBox orientation="column" size="100%" />
      <article>
        <h1>
          Introducing Our Exciting New Program: Elevate Your Style with Verve!
        </h1>
        <p>
          Are you ready to take your fashion sense to the next level? We are
          thrilled to announce the launch of our latest program at Verve
          designed to transform the way you experience fashion.
          <br />
          <br />
          Our new program is all about helping you refine your style, stay ahead
          of the fashion curve, and enjoy a personalized shopping experience
          like never before.
          <br />
          <br />
          Exciting Rewards and Perks: As a program member, you'll enjoy the
          rewards of your fashion passion. Accumulate loyalty points, receive
          special gifts, and participate in exciting giveaways and contests.
          <br />
          <br />
          Join Us Today: Don't miss out on this opportunity to elevate your
          fashion experience. Enroll in Verve's new program and become part of a
          community of style enthusiasts who share your passion.
          <br />
          <br />
          Ready to embark on a style journey like never before? Visit our
          website or stop by our store today to sign up and be among the first
          to experience the future of fashion.
          <br />
          <br />
          Elevate your style with Verve – Where Fashion Meets Passion!
          <br />
          <br />
        </p>
      </article>
      <LineBox content="Graduate" orientation="column" size="50%" />
      <LineBox content="School of Design" orientation="column" size="100%" />
      <LineBox content="Fashion" flip orientation="column" size="90%" />
      <LineBox content="" orientation="column" size="40%" />
      <LineBox orientation="column" size="60%" />
    </section>
  );
}

export default ArticleSection;
