import React from "react";
import Navigation from "../components/Navigation";

export default function MainLayout({ children }) {
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">{children}</div>
      </div>
    </main>
  );
}
