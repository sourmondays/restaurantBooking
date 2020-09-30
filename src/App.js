import React, { useState } from "react";

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Booking from "./components/Booking"
import ThankYou from "./components/ThankYou"

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Booking setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
    </div>
  );
}

export default App;
