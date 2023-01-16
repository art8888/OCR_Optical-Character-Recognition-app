import React from "react";
import { useState } from "react";
import { OcrReader, TextReader } from "./components";

function App() {
  const [orcData, setOcrData] = useState("");

  const onReaderOcrData = (ocrData) => {
    setOcrData(ocrData);
  };

  const onRemoveClicked = () => {
    setOcrData("");
  };

  return (
    <div className="App">
      <header>OCR(Optical Character Recognition) app!</header>
      <OcrReader
        onReaderOcrData={onReaderOcrData}
        onRemoveClicked={onRemoveClicked}
      />
      {orcData && <TextReader readText={orcData} />}
    </div>
  );
}

export default App;
