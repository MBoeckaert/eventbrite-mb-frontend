import Home from "./pages/HomePage.js";
import Search from "./pages/SearchPage.js";
import Likes from "./pages/LikesPage.js";
import Tickets from "./pages/TicketsPage";
import Profile from "./pages/ProfilePage";
import Layout from "./components/Layout.js";
import OrderTickets from "./pages/OrderTickets.js";
import { Container } from "@mui/system";

import { Routes, Route } from "react-router-dom";
import ClickedEventInformation from "./pages/EventInformation.js";

function App() {
  const dummy__events = [
    {
      id: "e1",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F312838299%2F234525939690%2F1%2Foriginal.20220704-133418?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C326%2C918%2C459&s=cfeed21fcf87c2c646c13dfa171223bc",
      date: new Date("2022", "09", "11"),
      name: "First Event Name",
      location: "Ghent",
    },
    {
      id: "e2",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F312851409%2F234525939690%2F1%2Foriginal.20220704-135943?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C47%2C1854%2C927&s=e2e3329e90db76f73a4b071e71ea03d2",
      date: new Date("2022", "07", "1"),
      name: "Second Event Name",
      location: "Deinze",
    },
    {
      id: "e3",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F273436729%2F286408354024%2F1%2Foriginal.20220426-154922?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C6%2C1600%2C800&s=a6a17f75a55a7a791abb718cf7a27aa0",
      date: new Date("2022", "08", "21"),
      name: "Third Event Name",
      location: "Lede",
    },
  ];
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home events={dummy__events} />} />
            <Route path="/home" element={<Home events={dummy__events} />} />
            <Route path="/search" element={<Search events={dummy__events} />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/eventInfo" element={<ClickedEventInformation />} />
            <Route path="/orderTickets" element={<OrderTickets />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
