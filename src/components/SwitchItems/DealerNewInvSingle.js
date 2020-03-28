import React, { useState } from "react";
import { Slide } from "pure-react-carousel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Skeleton } from "@material-ui/lab";
import Portal from "../Portal";
import { Link } from "@reach/router";

const DealerNewInvSingle = ({ inv, idx, deleteNewInv, classes, props }) => {
  const [modal, setModal] = useState(false);
  const [newInvEdit, setNewInvEdit] = useState({
    car_picture: props.newInv[idx].car_picture || "",
    year: props.newInv[idx].year || "",
    make: props.newInv[idx].make || "",
    model: props.newInv[idx].model || "",
    price: props.newInv[idx].price || "",
    miles: props.newInv[idx].miles || "",
    info: props.newInv[idx].info || "",
    dealer_id: props.newInv[idx].dealer_id,
    image_id: props.newInv[idx].image_id
  });

  // handleChange for newInvEdit picture
  const handleNewInventoryEditPicture = e => {
    setNewInvEdit({ car_picture: e.target.files[0] });
  };

  // handle Submit for New Inv Edit form
  const handleNewInventoryEditSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("car_picture", newInvEdit.car_picture);
    formData.append("upload_preset", "darwin");
    props.addImage(formData, newInvEdit);
    console.log("NEW INV IN SUBMIT", newInvEdit);
    setNewInvEdit({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  // on click for used inventory
  const handleNewInvEdit = e => {
    setModal(true);
    setNewInvEdit({
      ...newInvEdit,
      [e.target.name]: e.target.value
    });
  };

  // handle used inventory close button
  const handleNewInvEditCloseButton = () => {
    setModal(false);
    setNewInvEdit({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  console.log("PROPS IN DNIS", props.newInv[idx].car_picture);

  return (
    <>
      {modal ? (
        <Portal>
          <form
            className="usedInventoryAddForm"
            onSubmit={handleNewInventoryEditSubmit}
            encType={"multipart/form-data"}
          >
            <div className="usedInv-field" id="picture_file">
              <input
                type="file"
                id="car_picture"
                name="car_picture"
                className="usedInv-group"
                onChange={handleNewInventoryEditPicture}
              />
              <label for="car_picture">Upload file</label>
              <span className="picture_url">{newInvEdit.car_picture.name}</span>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="year"
                name="year"
                autoComplete="off"
                required
                className="usedInv-group"
                value={newInvEdit.year}
                onChange={handleNewInvEdit}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Year</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="make"
                name="make"
                autoComplete="off"
                required
                className="usedInv-group"
                value={newInvEdit.make}
                onChange={handleNewInvEdit}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Make</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="model"
                name="model"
                autoComplete="off"
                required
                className="usedInv-group"
                value={newInvEdit.model}
                onChange={handleNewInvEdit}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Model</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="price"
                name="price"
                autoComplete="off"
                required
                className="usedInv-group"
                value={newInvEdit.price}
                onChange={handleNewInvEdit}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Price</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="miles"
                name="miles"
                autoComplete="off"
                required
                className="usedInv-group"
                value={newInvEdit.miles}
                onChange={handleNewInvEdit}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Miles</span>
              </label>
            </div>

            <textarea
              onChange={handleNewInvEdit}
              name="info"
              value={newInvEdit.info}
            ></textarea>
            <Link
              className="usedInv-closeBtn"
              onClick={handleNewInvEditCloseButton}
              to={
                props.user === "salesman" ? "/sales/dash" : "/dealer/inventory"
              }
            >
              Close
            </Link>

            <button
              className="usedInv-submitBtn"
              onClick={() => props.editNewInventory(inv.id, newInvEdit)}
            >
              Submit
            </button>
          </form>
        </Portal>
      ) : null}

      <Slide>
        {props.loading ? (
          <Skeleton height={248} width={270} variant="rect" animation="wave" />
        ) : (
          <Card key={idx} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={inv.car_picture}
                title={inv.make + " " + inv.model}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {inv.year} {inv.make} {inv.model}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {inv.info}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={handleNewInvEdit} size="small" color="primary">
                Edit
              </Button>
              <Button
                onClick={() => deleteNewInv(inv.id, inv.image_id)}
                size="small"
                color="primary"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        )}
      </Slide>
    </>
  );
};

export default React.memo(DealerNewInvSingle);
