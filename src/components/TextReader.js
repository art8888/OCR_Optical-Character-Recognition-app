import { useEffect, useState, useRef } from "react";

function TextReader({ readText }) {
  const [smsText, setSmsText] = useState(readText);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>Recognized text:</div>
          <div>
            <textarea
              rows="15"
              cols="45"
              name="name"
              defaultValue={readText}
              onChange={(e) => setSmsText(e.target.value)}
            />
          </div>
          <div>
            <input ref={inputRef} id="phone" name="phone" type="tel" />
          </div>
          <div className="status">{smsText}</div>
        </form>
      </div>
    );
  };
}

export default TextReader;
