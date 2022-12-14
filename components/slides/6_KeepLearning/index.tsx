import { Fragment } from "react";
import { Link } from "../../common/link";
import styles from "./styles.module.css";

const links = [
  [
    {
      href: "https://threejs.org/docs/",
      title: "Three.js Docs",
      extraText: " (suggested by copilot)",
    },
    {
      href: "https://threejs-journey.com/",
      title: "Three.js Journey",
      author: "π«π· Bruno Simon",
    },
    {
      href: "https://www.youtube.com/watch?v=kfM-yu0iQBk&list=PLImQaTpSAdsCnJon-Eir92SZMl7tPBS4Z",
      title: "Shaders For Game Devs",
      author: "πΈπͺ Freya HolmΓ©r",
    },
    {
      href: "https://thebookofshaders.com/",
      title: "The Book of Shaders",
      a: true,
      author: "π¦π· Patricio Gonzalez Vivo<br/>and πΊπΈ Jen Lowe",
    },
  ],
  [
    {
      href: "https://github.com/pmndrs/react-three-fiber",
      title: "React Three Fiber",
      extraText: ", a React renderer for Three.js",
    },
    {
      href: "https://github.com/pmndrs/drei",
      title: "drei",
      extraText: ", useful helpers for RTF",
    },
    {
      href: "https://github.com/pmndrs/react-postprocessing",
      title: "react-postprocessing",
      extraText: ", postprocessing for RTF",
    },
  ],
];

export const KeepLearning = () => {
  return (
    <section>
      <section>
        <h2>π Keep Learning! π</h2>
      </section>
      <section>
        <h3>Resources</h3>
        <ul>
          {links.map((linkGroup, i) => (
            <Fragment key={i}>
              {linkGroup.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                  {link.author && (
                    <>
                      {" "}
                      by{" "}
                      <span
                        className={styles.author}
                        dangerouslySetInnerHTML={{ __html: link.author }}
                      />
                    </>
                  )}
                  {link.extraText && <>{link.extraText}</>}
                </li>
              ))}
              {i < links.length - 1 && <br />}
            </Fragment>
          ))}
        </ul>
      </section>
    </section>
  );
};
