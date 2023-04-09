import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  crtQuery,
  deleteQuery,
  getQueries,
} from "../Redux/features/query/querySlice";

const ElementQuery = (item) => {
  const dispatch = useDispatch();
  const [dopen, setdopen] = React.useState(false);
  const {user}=useSelector((state)=>state.auth);
  const handleDelete = () => {
    setdopen(true);
  };

  const handleDeleteClose = (itemId) => {
    dispatch(deleteQuery(itemId));
    window.location.reload();
    setdopen(false);
  };
  const handleClosed = () => {
    setdopen(false);
  };
  return (
    <Paper
      elevation={3}
      style={{
        // backgroundColor:'#c9d5e8',
        backgroundColor:"#F5F5F5",
        minHeight: "7rem",
        height: "auto",
        width: "93vw",
        margin: " 20px auto",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon />
          <Typography marginX={2}>Anonymous</Typography>
          {console.log(user._id)}
          {(user._id==item.userId || user.admin )&& <IconButton onClick={handleDelete}>
            {" "}
            <DeleteIcon fontSize="medium" style={{ color: "black" }} />
          </IconButton>}
          <Dialog
            open={dopen}
            onClose={handleClosed}
            style={{ width: "50vw", margin: "auto" }}
          >
            <DialogTitle style={{ width: "30vw", margin: "auto" }}>
              Delete Query
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure to delete this query :
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosed}>Cancel</Button>
              <Button
                onClick={() => {
                  handleDeleteClose(item._id);
                }}
                variant="contained"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box>{new Date(item.updatedAt).toLocaleString()}</Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography p={2}>{item.query}</Typography>

        <IconButton>
          <Link
            to={`/querySol/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ArrowCircleRightIcon fontSize="large" />
          </Link>
        </IconButton>
      </Box>
    </Paper>
  );
};

const Query = () => {
  const dispatch = useDispatch();
  const { allQueries } = useSelector((state) => state.queries);
 
  useEffect(() => {
    dispatch(getQueries());
  }, []);

  const [open, setOpen] = React.useState(false);

  const [queryMessage, setqueryMessage] = React.useState("");

  const [Snackopen, setSnackopen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [post, setpost] = React.useState(false);

  const checkPostQuery = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const queryText = data.get("createQuery");
    dispatch(crtQuery(queryText));
    window.location.reload();

    setpost(true);
    setOpen(false);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setpost(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQueryMessage = (e) => {
    setqueryMessage(e.target.value);
  };
  return (
    <div>
      {post && (
        <Snackbar
          open={post}
          autoHideDuration={3000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            variant="filled"
            severity="success"
            sx={{ width: "100%", color: "white" }}
          >
            Query Posted Successfully!!!!!
          </Alert>
        </Snackbar>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ width: "50vw", margin: "auto" }}
      >
        <DialogTitle style={{ width: "30vw", margin: "auto" }}>
          Post Query
        </DialogTitle>
        <Box component="form" noValidate onSubmit={checkPostQuery}>
          <DialogContent>
            <DialogContentText>
              Write your any type of Query here :
            </DialogContentText>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              fullWidth
              multiline
              rows={4}
              name="createQuery"
              style={{ margin: "10px 0" }}
              onChange={handleQueryMessage}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{color:"rgb(33 109 48)"}}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{backgroundColor:"rgb(33 109 48)", '&:hover':{backgroundColor:"rgb(33 109 48)"}}}>
              Post
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width:'inherit'
        }}
      >
        <Typography
          variant="h4"
          color="rgb(33 109 48)"
          sx={{
            height: "5rem",
            padding: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          Having Queries and Doubts ???? Post here
        </Typography>
        <AddCircleIcon
          fontSize="large"
          onClick={handleClickOpen}
          style={{ padding: "0 20px ", cursor: "pointer",color:"rgb(33 109 48)" }}
        />
      </Box>

      <Box
        style={{
          height: "73vh",
          width: "inherit",
          margin: "auto",
         // backgroundColor: "#c2c2c270",
          overflow: "auto",
        }}
      >
        {allQueries&&Object.values(allQueries).map((item, index) => {
          return <ElementQuery {...item} key={index}/>;
        })}
      </Box>
    </div>
  );
};

export default Query;
