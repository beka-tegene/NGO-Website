import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  ImageList,
  ImageListItem,
  Input,
  InputLabel,
  Modal,
  Paper,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
// import {
//   getGalleryData,
//   setDeleteImage,
//   setGallery,
// } from "../../../Utils/Store/MediaStore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#272727",
  border: "2px solid #EF9B01",
  color: "#FFFFFF",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const GalleryManagement = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [displayimage, setDisplayImage] = useState(null);
  const [ImageName, setImageName] = useState(null);
  const [errors, setErrors] = useState({
    image: "",
    ImageName: "",
  });
  // const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  // const [deleteItemId, setDeleteItemId] = useState(null);
  // const dispatch = useDispatch();

  // const validationSchema = Yup.object().shape({
  //   ImageName: Yup.string().required("Title is required"),
  // });

  const submitHandler = async (e) => {
    e.preventDefault();
    //   try {
    //     await validationSchema.validate({ ImageName });
    //     // Validation passed, reset errors
    //     setErrors({ ImageName: "" });

    //     const formData = new FormData();
    //     formData.append("ImageName", ImageName);
    //     formData.append("image", image);

    //     await dispatch(setGallery(formData));
    //   } catch (error) {
    //     // Validation failed, set error message
    //     setErrors({ ImageName: error.message });
    //   }
  };
  // const Image = useSelector((state) => state.MediaStore.outputGallery);
  // useEffect(() => {
  //   dispatch(getGalleryData());
  // }, [dispatch]);
  // console.log(Image);

  // const deleteHandler = (_id) => {
  //   setDeleteItemId(_id);
  //   setDeleteConfirmationOpen(true);
  // };

  // const handleDeleteConfirmation = () => {
  //   dispatch(setDeleteImage({ data: { _id: deleteItemId } }));
  //   setDeleteConfirmationOpen(false);
  // };
  return (
    <Stack p={2} gap={2}>
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"flex-end"}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          ADD New Gallery
          <Add sx={{ fontSize: "20px" }} />
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography fontSize={"20px"} color={"#EF9B01"}>
              Gallery Upload
            </Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                background: "#272727",
                color: "white",
              }}
              onSubmit={submitHandler}
            >
              <FormControl fullWidth required>
                <FormLabel sx={{ color: "white" }}>Title</FormLabel>
                <textarea
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "15px",
                    outline: "none",
                    border: "2px solid #3348BB",
                    borderRadius: 4,
                    resize: "none",
                    background: "#272727",
                    color: "white",
                  }}
                  value={ImageName}
                  onChange={(e) => setImageName(e.target.value)}
                  error={!!errors.ImageName}
                  helperText={errors.ImageName}
                />
              </FormControl>
              <InputLabel htmlFor="Photo-basic" sx={{ color: "white" }}>
                Gallery Photo
              </InputLabel>
              <FormControl fullWidth size="small">
                <Input
                  id="Photo-basic"
                  variant="outlined"
                  type="file"
                  sx={{ color: "white" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const imageURL = URL.createObjectURL(file);
                    setImage(e.target.files[0]);
                    setDisplayImage(imageURL);
                  }}
                  error={!!errors.image}
                  helperText={errors.image}
                />
              </FormControl>
              {displayimage && (
                <div
                  style={{
                    width: "50%",
                    height: 200,
                    overflow: "hidden",
                    marginTop: "1rem",
                  }}
                >
                  <img
                    src={displayimage} // Display the URL of the selected image, not the File object
                    alt="Selected"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              )}

              <Stack
                mt={2}
                direction={"row"}
                gap={2}
                justifyContent={"flex-end"}
              >
                <Button variant="contained" type="reset">
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Upload
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Modal>
      </Stack>
      <Divider sx={{ height: "2px" }} />
      <Typography>Gallery</Typography>
      <ImageList
        sx={{ padding: "3rem 3%", width: "100%", gap: 8 }}
        cols={4}
        variant="standard"
      >
        {Image?.gallerys?.map((item, index) => (
          <ImageListItem sx={{ position: "relative" }} key={index}>
            <img src={item.image} alt="home gallery" />
            <IconButton
              sx={{
                position: "absolute",
                color: "white",
                background: "red",
                right: "10px",
                top: "10px",
              }}
              // onClick={() => deleteHandler(item._id)}
            >
              <Delete />
            </IconButton>
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        // open={deleteConfirmationOpen}
        // onClose={() => setDeleteConfirmationOpen(false)}
        aria-labelledby="delete-confirmation-dialog"
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this gallery image?
        </DialogContent>
        <DialogActions>
          <Button
            // onClick={() => setDeleteConfirmationOpen(false)}
            color="primary"
          >
            No
          </Button>
          <Button
            // onClick={handleDeleteConfirmation} /
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default GalleryManagement;
