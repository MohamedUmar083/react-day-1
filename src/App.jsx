import React from "react";
import Card from "./Components/Card/Card";

const App = () => {
  const data = [
    {
      id: 1,
      pack: "Free",
      price: "$0 / Month",
      user: "Single User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      report: "Monthly Status Report",
    },
    {
      id: 2,
      pack: "Plus",
      price: "$9 / Month",
      user: "Single User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      report: "Monthly Status Report",
    },
    {
      id: 3,
      pack: "Pro",
      price: "$49 / Month",
      user: "Single User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      report: "Monthly Status Report",
    },
  ];
  return (
    <>
      <div classhead="container">
        <Card data={data} />
      </div>
    </>
  );
};

export default App;
