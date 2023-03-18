import { useState } from 'react';

export default function Tooltip({ text, children }) {
    const [showTooltip, setShowTooltip] = useState(false);
  
    function handleMouseEnter() {
      setShowTooltip(true);
    }
  
    function handleMouseLeave() {
      setShowTooltip(false);
    }
  
    return (
      <div className="tooltip-container">
        <div
          className="tooltip-trigger"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {showTooltip && <div className="tooltip">{text}</div>}
      </div>
    );
  }