import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function FeatureList(url) {
  const {siteConfig, siteMetadata} = useDocusaurusContext();
  const url2 = window.location.href;
  const parsedURL = new URL(url2);
  const path = parsedURL.pathname;
  const cleanedURL = path.slice(0, path.lastIndexOf('/'))
  return [

    {
       title: `Building Apps`,
       to: "build/building-apps/app-go",
       Svg: require("@site/static/img/setting.svg").default,
       description: (
         <>
           The documentation in this section will guide you 
           through the process of developing your dApp using 
           the Cosmos SDK framework.
         </>
       ),
     },
     {
       title: `Building Modules`,
       to: "build/building-modules/intro",
       Svg: require("@site/static/img/cube.svg").default,
       description: (
         <>
           Guides developers in constructing modules using the SDK and delves into advanced techniques by exploring code components.
         </>
       ),
     },
     {
       title: `Migrations`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/migration.svg").default,
       description: (
         <>
           See what has been updated in each release the process of the transition between versions.
         </>
       ),
     },
     {
       title: `Packages`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/packaging.svg").default,
       description: (
         <>
           Explore a curated collection of pre-built modules and functionalities, streamlining the 
           development process.
         </>
       ),
     },
     {
       title: `Tooling`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/tools.svg").default,
       description: (
         <>
           A suite of utilities designed to enhance the development workflow, optimizing the efficiency of 
           Cosmos SDK-based projects.
         </>
       ),
     },
     {
       title: `ADR's`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/diagram.svg").default,
       description: (
         <>
           Provides a structured repository of key decisions made during the development process, which have
           been documented and offers rationale behind key decisions being made
         </>
       ),
     },
     {
       title: `RFC`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/chat.svg").default,
       description: (
         <>
           A Request for Comments (RFC) is a record of discussion on an open-ended topic related 
           to the design and implementation of the Cosmos SDK, for which no immediate decision is 
           required.
         </>
       ),
     },
     {
       title: `Specifications`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/list.svg").default,
       description: (
         <>
           A detailed reference for the specifications of various components and features.
         </>
       ),
     },
     {
       title: `Cosmos SDK API`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/list.svg").default,
       description: (
         <>
           A comprehensive reference for the application programming interfaces (APIs) 
           provided by the SDK.
         </>
       ),
     },
   ];
 }
