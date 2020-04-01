import React, { useState } from "react";
import { Slide } from "pure-react-carousel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Portal from "../Portal";
import { Link } from "@reach/router";
import { Skeleton } from "@material-ui/lab";

const DealerUsedInvSingle = ({
  inv,
  idx,
  deleteUsedInventory,
  classes,
  props
}) => {
  const [modal, setModal] = useState(false);
  const [usedInvEdit, setUsedInvEdit] = useState({
    car_picture: props.usedInv[idx].car_picture || "",
    year: props.usedInv[idx].year || "",
    make: props.usedInv[idx].make || "",
    model: props.usedInv[idx].model || "",
    price: props.usedInv[idx].price || "",
    miles: props.usedInv[idx].miles || "",
    info: props.usedInv[idx].info || "",
    dealer_id: props.usedInv[idx].dealer_id,
    image_id: props.usedInv[idx].image_id
  });

  // handleChange for newInvEdit picture
  const handleUsedInventoryEditPicture = e => {
    setUsedInvEdit({ car_picture: e.target.files[0] });
  };

  // handle Submit for New Inv Edit form
  const handleUsedInventoryEditSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("car_picture", usedInvEdit.car_picture);
    formData.append("upload_preset", "darwin");
    props.addImage(formData, usedInvEdit);
    setUsedInvEdit({
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
  const handleUsedInvEdit = e => {
    setModal(true);
    setUsedInvEdit({
      ...usedInvEdit,
      [e.target.name]: e.target.value
    });
  };

  // handle used inventory close button
  const handleUsedInvEditCloseButton = () => {
    setModal(false);
    setUsedInvEdit({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  return (
    <>
      {modal ? (
        <Portal>
          <form
            className="usedInventoryAddForm"
            onSubmit={handleUsedInventoryEditSubmit}
            encType={"multipart/form-data"}
          >
            <div className="usedInv-field" id="picture_file">
              <input
                type="file"
                id="car_picture"
                name="car_picture"
                className="usedInv-group"
                onChange={handleUsedInventoryEditPicture}
              />
              <label for="car_picture">Upload file</label>
              <span className="picture_url">
                {usedInvEdit.car_picture.name}
              </span>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="year"
                name="year"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInvEdit.year}
                onChange={handleUsedInvEdit}
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
                value={usedInvEdit.make}
                onChange={handleUsedInvEdit}
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
                value={usedInvEdit.model}
                onChange={handleUsedInvEdit}
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
                value={usedInvEdit.price}
                onChange={handleUsedInvEdit}
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
                value={usedInvEdit.miles}
                onChange={handleUsedInvEdit}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Miles</span>
              </label>
            </div>

            <textarea
              onChange={handleUsedInvEdit}
              name="info"
              value={usedInvEdit.info}
            ></textarea>
            <Link
              className="usedInv-closeBtn"
              onClick={handleUsedInvEditCloseButton}
              to={
                props.user === "salesman" ? "/sales/dash" : "/dealer/inventory"
              }
            >
              Close
            </Link>

            <button
              className="usedInv-submitBtn"
              onClick={() => props.editUsedInventory(inv.id, usedInvEdit)}
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
              <Button onClick={handleUsedInvEdit} size="small" color="primary">
                Edit
              </Button>
              <Button
                onClick={() => deleteUsedInventory(inv.id, inv.image_id)}
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

export default React.memo(DealerUsedInvSingle);
