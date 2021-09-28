import React from "react";

const Resume = () => {
  return (
    <div className="resume-container flex justify-center items-center w-full">
      <iframe
        className="resume"
        src="https://onedrive.live.com/embed?resid=58DE546E30514A37%21338&amp;authkey=%21AOxmqxjYlkKVU7Y&amp;em=2&amp;wdStartOn=1"
        frameborder="0"
      >
        This is an embedded{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>{" "}
        document, powered by{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe>
    </div>
  );
};

export default Resume;
