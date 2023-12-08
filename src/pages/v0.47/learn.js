import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures/v0.47/learn';
import FeatureList from '@site/src/components/featurelist/v0.47/learn';
import styles from '../index.module.css';


function HomepageHeader() {
    const {siteConfig: {tagline, title: title}} = useDocusaurusContext();
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
        <html className="docs-doc-id-learn">
            <Layout>
                <HomepageHeader />
                <main>
                    <HomepageFeatures list={FeatureList("learn")} />
                </main>
            </Layout>
        </html>
    );

}
