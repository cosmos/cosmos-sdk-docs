import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures/main/build';
import FeatureList from '@site/src/components/featurelist/main/build';
import styles from '../index.module.css';


function HomepageHeader() {
    const {siteConfig: {tagline, title: title}} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h2 className="hero__title"><strong>Build</strong></h2>
                <h4 className={styles.tagLine}>Dive deeper into the Cosmos SDK 
				and learn how to build customized blockchain applications and custom modules.</h4>
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
                    <HomepageFeatures list={FeatureList("build")} />
                </main>
            </Layout>
        </html>
    );

}
