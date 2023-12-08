import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures/v0.50';
import FeatureList from '@site/src/components/featurelist/v0.50';

import styles from '../index.module.css';

function HomepageHeader() {
    const {siteConfig: {tagline}} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h2 className="hero__title"><strong>Learn</strong></h2>
                <h4 className={styles.tagLine}>Get a quick introduction to the Cosmos 
                SDK and its key features, including its modular architecture and 
                developer-friendly tools.</h4>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Cosmos SDK Documentation ${siteConfig.title}`}
            description=" Explore the SDK <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures list={FeatureList("v0.50")} />
            </main>
        </Layout>
    );
}
