import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Ready to scale your business?',
    paragraph: `Spend less time on document collection and finding facts. Gain confidence faster in the accuracy and relevancy of facts. Reduce the burden of switching between systems to verify the information and generate impactful insights. Bring industry-leading security and privacy compliant data storage to your business`
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <li>Secure customer portal</li>
                    <li> Bring your business branding </li>
                    <li> Review all documents in one secure web platform </li>
                    <li>  Bring your team to help review and verify documents </li>
                    <li>Keep you customers updated through notifications</li>
                    <li> Automated reminders for customers to fill the gaps  </li>
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <li>Pick from customisable templates</li>
                    <li> Give customers control of their own data </li>
                    <li> Customer centric dashboard</li>
                    <li>  Access from any device </li>
                    <li> Security at the core </li>
                    <li> Out of the box compliance </li>
                  </p>
                </div>
              </div>
            </div>
 

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;