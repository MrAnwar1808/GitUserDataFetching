import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetchData from "./components/UserData/UserFetchData";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import UserModal from "./components/Userlist/UserModal";
import UserList from "./components/Userlist/UserList";
import { ThemeProviderComponent } from "./components/Context/ThemeContext";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: users, loading, error } = useFetchData("https://api.github.com/users");

  const openModal = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user.login}`);
      const userDetails = await response.json();
      setSelectedUser(userDetails);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <ThemeProviderComponent>
      <Router>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/user-data"
            element={
              <UserList
                users={users}
                searchTerm={searchTerm}
                openModal={openModal}
                loading={loading}
                error={error}
              />
            }
          />
        </Routes>


        <UserModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          selectedUser={selectedUser}
        />
      </Router>
    </ThemeProviderComponent>
  );
};

export default App;
