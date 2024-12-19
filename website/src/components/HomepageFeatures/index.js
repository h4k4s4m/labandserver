import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beginner Friendly',
    Svg: require('@site/static/img/getting_started.svg').default,
    description: (
      <>
        Start your home lab journey with our comprehensive quick start guides. 
        Whether you're setting up your first server or exploring virtualization, 
        we've got you covered.
      </>
    ),
  },
  {
    title: 'Smart Hardware Selection',
    Svg: require('@site/static/img/hardware_setup.svg').default,
    description: (
      <>
        Find the perfect hardware for your needs with our curated recommendations. 
        From home NAS builds to powerful virtualization servers, we'll help you 
        make informed decisions.
      </>
    ),
  },
  {
    title: 'Automation and Software',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        Save time with our collection of tested automation scripts and software. 
        Streamline your setup process and manage your infrastructure efficiently 
        with our ready-to-use solutions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
