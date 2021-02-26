import React, { useState, useEffect } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import directoryData from "./directory.data";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(directoryData);
    return () => {
      setSections([]);
    };
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
