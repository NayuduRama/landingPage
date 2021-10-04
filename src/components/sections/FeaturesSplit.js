import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';

import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  Spend time helping your clients - not collecting their documents
                  </h3>
                <p className="m-0">
                  Securely gather customer information document facts and unlock productivity in your business.
                  </p> 
                  <br/>
                <div align="center" className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Link to="#0" className="button button-primary button-wide-mobile button-sm">Register</Link>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/image1.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                 
                <h3 className="mt-0 mb-12">
                  Put client document collection on Autopilot
                  </h3>
                <p className="m-0">
                  Streamline your interactions with your customers. Reduce time spent following up and set up automated reminders.
                  </p>
                  <br/>
                <div align="center" className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Link to="#0" className="button button-primary button-wide-mobile button-sm">Register</Link>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/image2.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                 
                <h3 className="mt-0 mb-12">
                  Grow your business with information in your fingertips
                  </h3>
                <p className="m-0">
                  Know what to prioritise, focus your efforts on where it matters. Improve your teams productivity.
                  </p>
                <br/>
                <div align="center" className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Link to="#0" className="button button-secondary button-wide-mobile button-sm">Learn More...</Link>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/image3.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                 
                <h3 className="mt-0 mb-12">
                  Future proof security, data protection and compliance
                  </h3>
                <p className="m-0">
                  With enterprise grade cloud security, all your data and your clients data are safe, easily accessible and compliant.
                  </p>
                  <br/>
                <div align="center" className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Link to="#0" className="button button-secondary button-wide-mobile button-sm">Learn More...</Link>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/image4.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;