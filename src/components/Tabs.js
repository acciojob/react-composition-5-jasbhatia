import React from "react";

function Tabs(props) {
  console.log(props);
  const { tabs, setTab } = props;
  console.log("tab1", tabs);
  return (
    <div>
      <ul>
        {tabs.map((item) => {
          return (
            <li
              onClick={() => {
                setTab(item.content);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;
