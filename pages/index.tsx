// @ts-nocheck
import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./styles.module.css";
import * as Slides from "../components/slides";

const Home: NextPage = () => {
  useEffect(() => {
    const clientSideInitialization = async () => {
      const Reveal = await (await import("reveal.js")).default;
      const Markdown = await (
        await import("reveal.js/plugin/markdown/markdown.esm")
      ).default;
      const RevealHighlight = await (
        await import("reveal.js/plugin/highlight/highlight.js")
      ).default;

      const deck = new Reveal({
        plugins: [Markdown, RevealHighlight],
      });

      deck.initialize();
    };

    clientSideInitialization();
  });

  return (
    <>
      <Head>
        <title>A Brief Introduction to Three.js</title>
        <meta name="description" content="A Brief Introduction to Three.js" />
        <meta name="author" content="Vittorio Retrivi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={`${styles.reveal} reveal`}>
          <div className="slides">
            <Slides.Intro />
            <Slides.WebGL />
            <Slides.Three />
            <Slides.BuildingAScene />
            <Slides.GoingFurther />
            <Slides.AdvancedTechniques />
            <Slides.KeepLearning />
            <Slides.Outro />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
