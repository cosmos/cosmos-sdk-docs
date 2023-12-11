import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function FeatureList(url) {
  return [

    {
       title: `Introduction`,
       to: "learn/intro/overview",
       Svg: require("@site/static/img/introduction.svg").default,
       description: (
         <>
           Dive into the fundamentals of Cosmos SDK with an insightful introduction, 
           laying the groundwork for understanding blockchain development.
         </>
       ),
     },
     {
       title: `Beginner`,
       to: "learn/beginner/app-anatomy",
       Svg: require("@site/static/img/beginner.svg").default,
       description: (
         <>
           Start your journey with beginner-friendly resources in the Cosmos SDK's "Learn" 
           section, providing a gentle entry point for newcomers to blockchain development.
         </>
       ),
     },
     {
       title: `Advanced`,
       to: "learn/advanced/baseapp",
       Svg: require("@site/static/img/advanced.svg").default,
       description: (
         <>
           Level up your Cosmos SDK expertise with advanced topics, tailored for experienced 
           developers diving into intricate blockchain application development.
         </>
       ),
     },
   ];
 }
