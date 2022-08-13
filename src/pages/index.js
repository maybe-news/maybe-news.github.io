import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './styles.module.css';

// const features = [
//   {
//     title: 'Easy to Use',
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={clsx('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <div className={styles.subscribeForm}>
            {status === "sending" && <div className="alert alert--info" role="alert">Sending...</div>}
            {status === "error" && (
              <div
                role="alert"
                className="alert alert--danger"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div
                role="alert"
                className="alert alert--success"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            <div className={styles.formInputWrapper}>
              <label className={styles.formLabel}>
                Email Address *
                <input
                  className={styles.formInput}
                  ref={node => (email = node)}
                  type="email"
                />
              </label>
            </div>
            <div className={styles.subscribeBtnWrapper}>
              <button className={styles.subscribeBtn} onClick={submit}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="可能是新闻的知识">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.heroButton,
              )}
              to={useBaseUrl('issues')}>
              Issues
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.heroButton,
              )}
              to={useBaseUrl('series')}>
              Series
            </Link>
          </div>
        </div>
      </header>
      <main>
        <MailchimpSubscribe
          url="https://news.us18.list-manage.com/subscribe/post?u=013b62af8e756cabe51db0038&id=fc8cfd980b"
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </main>
    </Layout>
  );
}
