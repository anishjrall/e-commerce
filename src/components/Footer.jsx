import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Anish Jrall. All rights reserved.</p>
      <div className="links">
        <a href="https://github.com/anishjrall" target="_blank" rel="noreferrer">
          GitHub
        </a>
        {" | "}
        <a
          href="https://linkedin.com/in/anish-jrall-27667526b"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a href="mailto:anishjrall@gmail.com">Email</a>
      </div>
    </footer>
  );
}
