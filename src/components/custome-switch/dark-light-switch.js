import React from 'react';
import { useSettingsContext } from 'src/components/settings';

import './index.scss'; // Import the CSS module

const DarkLightSwitch = () => {
  const settings = useSettingsContext();

  const toggleMood = (check) => {
    const option = check === 'dark' ? 'light' : 'dark';
    settings.onUpdate('themeMode', option);
  };
  return (
    <div className="container_my">
      <input
        type="checkbox"
        id="toggle-checkbox"
        className="toggle-checkbox"
        onClick={() => toggleMood(settings.themeMode)}
      />
      <label htmlFor="toggle-checkbox" className="toggle-wrapper">
        <div className="toggle-thumb">
          <div className="crater-1" />
          <div className="crater-2" />
          <div className="crater-3" />
        </div>

        <div className="toggle-container">
          <div className="toggle-night">
            <div className="astronaut" />
            <ul className="stars">
              {/* <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li /> */}
            </ul>
          </div>

          <div className="toggle-day">
            <div className="surfer" />
            <ul className="waves">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkLightSwitch;
