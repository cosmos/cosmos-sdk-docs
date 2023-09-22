import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: `Learn Basics`,
    Svg: require("@site/static/img/innovation.svg").default,
    to: "/main/learn/intro/what-is-sdk",
    description: (
      <>
        Get a quick introduction to the Cosmos SDK and its key features,
        including its modular architecture and developer-friendly tools.
      </>
    ),
  },
  {
    title: `Build a Chain`,
    to: "/main/build/building-apps/app-go",
    Svg: require("@site/static/img/link.svg").default,
    description: (
      <>
        Learn how to build a customized blockchain application using the Cosmos
        SDK, with support for various programming languages and consensus
        algorithms.
      </>
    ),
  },
  {
    title: `Build a Module`,
    to: "/main/build/building-modules/intro",
    Svg: require("@site/static/img/cube.svg").default,
    description: (
      <>
        Dive deeper into the Cosmos SDK and learn how to create custom modules
        to extend the functionality of your blockchain application.
      </>
    ),
  },
  {
    title: `Node Operation`,
    to: "/main/user/run-node/run-node",
    Svg: require("@site/static/img/node.svg").default,
    description: (
      <>
        Learn how to set up and operate a full node on the Cosmos network, and
        become an active participant in the governance and decision-making
        processes of the ecosystem.
      </>
    ),
  },
  {
    title: `Join the Community`,
    to: "https://discord.com/invite/cosmosnetwork",
    Svg: require("@site/static/img/public-service.svg").default,
    description: (
      <>
        Connect with other developers, validators, and enthusiasts in the Cosmos
        ecosystem, and collaborate on building the future of decentralized
        applications.
      </>
    ),
  },
  {
    title: `Discuss`,
    to: "https://github.com/orgs/cosmos/discussions",
    Svg: require("@site/static/img/ecosystem.svg").default,
    description: (
      <>
        Collaborative forum for the community to ask/answer questions, share
        information, discuss items and give feedbacks on the teams roadmaps.
      </>
    ),
  },
];

function Feature({ Svg, to, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={to}>
        <div className=" text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3 className="py-5">
          <strong>{title}</strong>
        </h3>
        <p className="pb-10">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container pt-9">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
