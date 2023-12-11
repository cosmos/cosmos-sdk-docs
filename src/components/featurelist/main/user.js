import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function FeatureList(url) {
  return [
    {
       title: `Setting up keys`,
       to: "user/run-node/keyring",
       Svg: require("@site/static/img/key.svg").default,
       description: (
         <>
           Set up secure key management effortlessly with 
           Cosmos SDK's keyring feature for streamlined 
           cryptographic key handling.
         </>
       ),
     },
    {
       title: `Running a node`,
       to: "user/run-node/run-node",
       Svg: require("@site/static/img/node.svg").default,
       description: (
         <>
           Easily deploy and manage a node in the Cosmos network with 
           straightforward instructions, ensuring a smooth and reliable 
           blockchain operation.
         </>
       ),
     },
     {
       title: `CLI`,
       to: "user/run-node/interact-node",
       Svg: require("@site/static/img/command.svg").default,
       description: (
         <>
           Navigate and interact with the Cosmos SDK using the 
           Command Line Interface (CLI) for efficient and 
           powerful command-based operations.
         </>
       ),
     },
   ];
 }
