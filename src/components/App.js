import React, { useState } from "react";
import "./../styles/App.css";
import Tabs from "./Tabs";

const tabs = [
  { title: "Tab 1", content: "content of Tab 1" },
  { title: "Tab 2", content: "content of Tab 2" },
  { title: "Tab 3", content: "content of Tab 3" },
];
const newTabs = [
  { title: "Tab A", content: "content of Tab A" },
  { title: "Tab B", content: "content of Tab B" },
  { title: "Tab C", content: "content of Tab C" },
];
const [tab, setTab] = useState(tabs[0].content);
const [newTab, setNewTab] = useState(newTabs[0].content);
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tabs tab={tabs} setTab={setTab} />
      <p>{tab}</p>
      <Tabs tab={newTabs} setTab={setNewTab} />
      <p>{newTab}</p>
    </div>
  );
};

export default App;
