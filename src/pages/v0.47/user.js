import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures/v0.47/user';
import FeatureList from '@site/src/components/featurelist/v0.47/user';
import styles from '../index.module.css';


function HomepageHeader() {
    const {siteConfig: {tagline, title: title}} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h2 className="hero__title"><strong>User</strong></h2>
                <h4 className={styles.tagLine}>Discover concise user guides in the Cosmos SDK documentation, 
                offering clear instructions on CLI usage, node operation, and essential tasks for a 
                streamlined developer and participant experience.</h4>
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
