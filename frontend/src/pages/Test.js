import React, { useState } from "react";
import DateRanger from "../components/DateRanger";

function Test() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [ready, setReady] = useState(false);

  return (
    <div>
      <DateRanger
        onStartChange={(value) => setStart(value)}
        onEndChange={(value) => setEnd(value)}
        onSubmit={(value) => setReady(value)}
      />
      <hr />
      {ready && (
        <div>
          {start} {end}}
        </div>
      )}
    </div>
  );
}

export default Test;
