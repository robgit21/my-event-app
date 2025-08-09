// src/components/common/Sidecar.tsx
import React, { useState } from "react";

const Sidecar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidecar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidecar ${isExpanded ? "expanded" : "collapsed"}`}>
      <button onClick={toggleSidecar}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>

      {isExpanded ? (
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Locations</li>
          {/* Weitere Menüpunkte */}
        </ul>
      ) : (
        <ul>
          <li>H</li>
          <li>E</li>
          <li>L</li>
          {/* Icons oder abgekürzte Texte */}
        </ul>
      )}
    </div>
  );
};

export default Sidecar;
