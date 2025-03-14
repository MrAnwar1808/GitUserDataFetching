
import React from "react";
import { Modal, Box, Typography, Button, Link, Avatar, Divider } from "@mui/material";

const UserModal = ({ isModalOpen, closeModal, selectedUser }) => {
  console.log(selectedUser);

  if (!selectedUser) {
    return null; 
  }
  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 3,
          p: 4,
          minWidth: 350,
          textAlign: "center",
        }}
      >
        <Avatar
          src={selectedUser.avatar_url}
          alt={selectedUser.login}
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto 1rem",
          }}
        />
        {/* User Details */}
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {selectedUser?.name || "Name not available"}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
          @{selectedUser?.login || "Username not available"}
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {selectedUser?.bio || "No bio available"}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          <strong>Location:</strong> {selectedUser?.location || "Not specified"}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          <strong>Company:</strong> {selectedUser?.company || "Not specified"}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          <strong>Followers:</strong> {selectedUser?.followers || 0}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          <strong>Following:</strong> {selectedUser?.following || 0}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          <strong>Public Gists:</strong> {selectedUser?.public_gists || 0}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 3 }}>
          <strong>Account Created:</strong>{" "}
          {selectedUser?.created_at
            ? new Date(selectedUser.created_at).toLocaleDateString()
            : "N/A"}
        </Typography>
        <Link
          href={selectedUser?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
            View GitHub Profile
          </Button>
        </Link>
        <Button variant="outlined" color="secondary" onClick={closeModal}>
          Close
        </Button>
      </Box>
    </Modal>
  )
}
export default UserModal;
