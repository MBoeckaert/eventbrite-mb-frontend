import Home from "./pages/HomePage.js";
import Search from "./pages/SearchPage.js";
import Likes from "./pages/LikesPage.js";
import Tickets from "./pages/TicketsPage";
import Layout from "./components/Layout.js";
import SignUp from "./pages/SignUp.js";
import PayTickets from "./pages/PayTickets.js";
import LoginRedirect from "./pages/LoginRedirect";
import { Container } from "@mui/system";
import ClickedEventInformation from "./pages/EventInformation.js";
import CreateEvent from "./pages/CreateEvent.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              exact
              path="/connect/:providerName/redirect"
              element={<LoginRedirect />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route
              path="/eventInfo/:id"
              element={<ClickedEventInformation />}
            />
            <Route path="/signUp/" element={<SignUp />} />
            <Route path="/payTickets" element={<PayTickets />} />
            <Route path="/create" element={<CreateEvent />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
