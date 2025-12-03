import React from 'react';
import './css/main.css';
import everproLogo from './everpro-logo.svg';
import everproScore from './EVERPROSCORE.svg';

interface OverviewProps {
  title?: string;
  subtitle?: string;
  headerTitle?: string;
  brandLabel?: string;
}

const Overview: React.FC<OverviewProps> = ({
  title = 'You are a reputation leader.',
  subtitle = 'You are outperforming the competition by 12%.',
  headerTitle = 'OVERVIEW',
  brandLabel = 'SCORE',
}) => {
  return (
    <div className="overview-card">
      <div className="overview-card__header">
        <span className="overview-card__header-title">{headerTitle}</span>
      </div>

      <div className="overview-card__content">
        <div className="overview-card__body">
          <img
            className="overview-card__gauge-image"
            src={everproScore}
            alt="EverPro Score gauge"
          />
        </div>

        <div className="overview-card__brand">
          <div className="overview-card__brand-logo">
            <img
              className="overview-card__brand-logo-svg"
              src={everproLogo}
              alt="EverPro"
            />
          </div>
          <span className="overview-card__brand-label">{brandLabel}</span>
        </div>

        <div className="overview-card__text">
          <p className="overview-card__title">{title}</p>
          <p className="overview-card__subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;

