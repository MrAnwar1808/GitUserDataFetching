
import React from "react";
import { Grid, Card, CardContent, Typography, Avatar, CircularProgress, Button } from "@mui/material";

const UserList = ({ users, searchTerm, openModal, loading, error }) => {

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ padding: "1rem" }}>
      {filteredUsers.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Avatar
              src={user.avatar_url}
              alt={user.login}
              sx={{ width: 80, height: 80, marginBottom: "1rem" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {user.login}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "1rem" }}>
                Click the button below for details
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => openModal(user)}
                sx={{ marginTop: "0.5rem" }}
              >
                View Modal
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
