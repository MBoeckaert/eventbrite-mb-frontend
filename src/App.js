import Home from "./pages/HomePage.js";
import Search from "./pages/SearchPage.js";
import Likes from "./pages/LikesPage.js";
import Tickets from "./pages/TicketsPage";
import Profile from "./pages/ProfilePage";
import Layout from "./components/Layout.js";
import OrderTickets from "./pages/OrderTickets.js";
import SignUp from "./pages/SignUp.js";
import { Container } from "@mui/system";

import { Routes, Route } from "react-router-dom";
import ClickedEventInformation from "./pages/EventInformation.js";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/eventInfo" element={<ClickedEventInformation />} />
            <Route path="/orderTickets" element={<OrderTickets />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
