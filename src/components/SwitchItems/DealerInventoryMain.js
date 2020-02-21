import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Portal from "../Portal";
import { connect } from "react-redux";
import {
  addImage,
  addNewImage,
  //addNewInventory,
  getUsedInventory,
  getNewInventory,
  newSearchFilter
} from "../../actions/index";
//import Carousel from "../Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    overflowWrap: "break-word",
    width: 270,
    boxShadow: "4px 4px 4px solid black"
  },
  media: {
    height: 140,
    width: 270
  }
});

const DealerInventoryMain = props => {
  const classes = useStyles();

  // new inventory state search
  const [newInventory, setNewInventory] = useState({
    new_year: "",
    new_make: "",
    new_model: ""
  });
  // used inventory state search
  const [usedInventory, setUsedInventory] = useState({
    used_year: "",
    used_make: "",
    used_model: ""
  });

  // used inventory add state
  const [usedInventoryAdd, setUsedInventoryAdd] = useState({
    car_picture: "",
    year: "",
    make: "",
    model: "",
    price: "",
    miles: "",
    info: ""
  });

  // new inventory add state
  const [newInventoryAdd, setNewInventoryAdd] = useState({
    car_picture: "",
    year: "",
    make: "",
    model: "",
    price: "",
    miles: "",
    info: ""
  });

  // new inventory search
  const handleNewInventoryChange = e => {
    setNewInventory({ ...newInventory, [e.target.name]: e.target.value });
  };

  // used inventory search
  const handleUsedInventoryChange = e => {
    setUsedInventory({ ...usedInventory, [e.target.name]: e.target.value });
  };

  // on click for new inventory
  const handleNewInventoryAdd = e => {
    setShowNewInventoryModal(true);
    setNewInventoryAdd({ ...newInventoryAdd, [e.target.name]: e.target.value });
  };
  // on click for used inventory
  const handleUsedInventoryAdd = e => {
    setShowUsedInventoryModal(true);
    setUsedInventoryAdd({
      ...usedInventoryAdd,
      [e.target.name]: e.target.value
    });
  };

  const handleNewInventorySearch = e => {
    e.preventDefault();
    props.newSearchFilter(newInventory);
  };

  // handleChange for usedInv picture
  const handleUsedInventoryPicture = e => {
    setUsedInventoryAdd({ car_picture: e.target.files[0] });
  };

  // handlechange for newInv picture
  const handleNewInventoryPicture = e => {
    setNewInventoryAdd({ car_picture: e.target.files[0] });
  };

  // handle Submit for Used Inv form
  const handleUsedInventorySubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("car_picture", usedInventoryAdd.car_picture);
    formData.append("upload_preset", "darwin");
    props.addImage(formData, usedInventoryAdd);
    console.log("In Handle Submit", usedInventoryAdd);
  };

  console.log("SURPRISE", usedInventoryAdd.car_picture);

  // const picture = props.usedInv.map(pic => {
  //   return pic.Image.car_picture;
  // });

  // handleSubmit for New Inv Form
  const handleNewInventorySubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("car_picture", newInventoryAdd.car_picture);
    formData.append("upload_preset", "darwin");
    props.addNewImage(formData, newInventoryAdd);
    console.log("In Handle Submit New Inv", newInventoryAdd);
  };

  // Set inventory state to false
  const [showUsedInventoryModal, setShowUsedInventoryModal] = useState(false);
  const [showNewInventoryModal, setShowNewInventoryModal] = useState(false);

  // handle used inventory close button
  const handleUsedInventoryCloseButton = () => {
    setShowUsedInventoryModal(false);
  };

  const handleNewInventoryCloseButton = () => {
    setShowNewInventoryModal(false);
  };

  useEffect(() => {
    props.getUsedInventory();
    props.getNewInventory();
  }, []);

  return (
    <>
      {showUsedInventoryModal ? (
        <Portal>
          <form
            className="usedInventoryAddForm"
            onSubmit={handleUsedInventorySubmit}
            encType={"multipart/form-data"}
          >
            <div className="usedInv-field" id="picture_file">
              <input
                type="file"
                id="car_picture"
                name="car_picture"
                className="usedInv-group"
                onChange={handleUsedInventoryPicture}
              />
              <label for="car_picture">Upload file</label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="year"
                name="year"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInventoryAdd.year}
                onChange={handleUsedInventoryAdd}
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
                value={usedInventoryAdd.make}
                onChange={handleUsedInventoryAdd}
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
                value={usedInventoryAdd.model}
                onChange={handleUsedInventoryAdd}
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
                value={usedInventoryAdd.price}
                onChange={handleUsedInventoryAdd}
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
                value={usedInventoryAdd.miles}
                onChange={handleUsedInventoryAdd}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Miles</span>
              </label>
            </div>

            <textarea
              onChange={handleUsedInventoryAdd}
              name="info"
              value={usedInventoryAdd.info}
            ></textarea>

            <Link
              className="usedInv-closeBtn"
              onClick={handleUsedInventoryCloseButton}
              to={
                props.user === "salesman" ? "/sales/dash" : "/dealer/inventory"
              }
            >
              Close
            </Link>

            <button className="usedInv-submitBtn">Submit</button>
          </form>
        </Portal>
      ) : null}
      {showNewInventoryModal ? (
        <Portal>
          <form
            className="newInventoryAddForm"
            onSubmit={handleNewInventorySubmit}
          >
            <div className="newInv-field" id="picture_file">
              <input
                type="file"
                id="car_picture"
                name="car_picture"
                className="newInv-group"
                encType={"multipart/form-data"}
                onChange={handleNewInventoryPicture}
              />
              <label for="car_picture">Upload file</label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="year"
                name="year"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.year}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Year</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="make"
                name="make"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.make}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Make</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="model"
                name="model"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.model}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Model</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="price"
                name="price"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.price}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Price</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="miles"
                name="miles"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.miles}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Miles</span>
              </label>
            </div>

            <textarea
              onChange={handleNewInventoryAdd}
              name="info"
              value={newInventoryAdd.info}
            ></textarea>

            <Link
              className="newInv-closeBtn"
              onClick={handleNewInventoryCloseButton}
              to={
                props.user === "salesman" ? "/sales/dash" : "/dealer/inventory"
              }
            >
              Close
            </Link>

            <button className="newInv-submitBtn">Submit</button>
          </form>
        </Portal>
      ) : null}
      <div className="header-dealer">
        <div className="header-dealer__name">Dealership: Ford</div>
        <div className="header-dealer__notifications">Notifications</div>
      </div>

      {/* New Inventory */}

      <div className="new--inventory">
        <h3 className="new--inventory__title">New Inventory</h3>
        {props.newInv.length >= 1 ? (
          <Link
            onClick={handleNewInventoryAdd}
            to="/dealer/inventory/newInventory"
            className="new--inventory__addBtn"
          >
            <span className="usedInventoryAddLink">Add </span>{" "}
          </Link>
        ) : null}
        <div className="new--inventory__form">
          <form
            className="new--inventory__fields form"
            onSubmit={handleNewInventorySearch}
          >
            <div className="field">
              <input
                type="text"
                name="new_year"
                id="new_year"
                autoComplete="off"
                required
                className="input-group"
                value={newInventory.new_year}
                onChange={handleNewInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Year</span>
              </label>
            </div>

            <div className="field">
              <input
                type="text"
                name="new_make"
                id="new_make"
                autoComplete="off"
                required
                className="input-group"
                value={newInventory.new_make}
                onChange={handleNewInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Make</span>
              </label>
            </div>
            <div className="field">
              <input
                type="text"
                name="new_model"
                id="new_model"
                autoComplete="off"
                required
                className="input-group"
                value={newInventory.new_model}
                onChange={handleNewInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Model</span>
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        {props.newInv.length === 0 ? (
          <div className="new--inventory__results">
            <h3>
              No New Inventory, Click{" "}
              <Link
                onClick={handleNewInventoryAdd}
                to="/dealer/inventory/NewInventory"
              >
                <span className="newInventoryAddLink">Here</span>{" "}
              </Link>
              To Add{" "}
              <span role="img" aria-label="crying">
                😢
              </span>
            </h3>
          </div>
        ) : (
          <>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={props.newInv.length}
              orientation="horizontal"
              visibleSlides={3}
              dragEnabled={false}
              touchEnabled={false}
              style={{ position: "relative" }}
            >
              <Slider style={{ marginTop: "3rem" }}>
                {props.newInv &&
                  props.newInv.map((inv, idx) => {
                    return (
                      <Slide>
                        <Card key={idx} className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={inv.car_picture}
                              title={inv.make + " " + inv.model}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {inv.year} {inv.make} {inv.model}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {inv.info}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              Edit
                            </Button>
                            <Button size="small" color="primary">
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      </Slide>
                    );
                  })}
              </Slider>
              {props.newInv.length < 4 ? null : (
                <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
              )}
              {props.newInv.length < 4 ? null : (
                <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
              )}
            </CarouselProvider>
          </>
        )}
      </div>

      {/* Used Inventory */}

      <div className="used--inventory">
        <h3 className="used--inventory__title">Used Inventory</h3>
        {props.usedInv.length >= 1 ? (
          <Link
            onClick={handleUsedInventoryAdd}
            to="/dealer/inventory/UsedInventory"
            className="used--inventory__addBtn"
          >
            <span className="usedInventoryAddLink">Add </span>{" "}
          </Link>
        ) : null}
        <div className="used--inventory__form">
          <form className="used-inventory__fields form">
            <div className="field">
              <input
                type="text"
                name="used_year"
                id="used_year"
                autoComplete="off"
                required
                className="input-group"
                value={usedInventory.used_year}
                onChange={handleUsedInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Year</span>
              </label>
            </div>
            <div className="field">
              <input
                type="text"
                name="used_make"
                id="used_make"
                autoComplete="off"
                required
                className="input-group"
                value={usedInventory.used_make}
                onChange={handleUsedInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Make</span>
              </label>
            </div>
            <div className="field">
              <input
                type="text"
                name="used_model"
                id="used_model"
                autoComplete="off"
                required
                className="input-group"
                value={usedInventory.used_model}
                onChange={handleUsedInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Model</span>
              </label>
            </div>
          </form>
        </div>
        {props.usedInv.length === 0 ? (
          <div className="used--inventory__results">
            <h3>
              No Used Inventory, Click{" "}
              <Link
                onClick={handleUsedInventoryAdd}
                to="/dealer/inventory/UsedInventory"
              >
                <span className="usedInventoryAddLink"> Here </span>{" "}
              </Link>
              To Add{" "}
              <span role="img" aria-label="crying">
                😢
              </span>
            </h3>
          </div>
        ) : (
          <>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={props.usedInv.length}
              orientation="horizontal"
              visibleSlides={3}
              dragEnabled={false}
              touchEnabled={false}
              style={{ position: "relative" }}
            >
              <Slider style={{ marginTop: "3rem" }}>
                {props.usedInv &&
                  props.usedInv.map((inv, idx) => {
                    return (
                      <Slide>
                        <Card key={idx} className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={inv.car_picture}
                              title={inv.make + " " + inv.model}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {inv.year} {inv.make} {inv.model}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {inv.info}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              Edit
                            </Button>
                            <Button size="small" color="primary">
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      </Slide>
                    );
                  })}
              </Slider>
              {props.usedInv.length < 4 ? null : (
                <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
              )}
              {props.usedInv.length < 4 ? null : (
                <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
              )}
            </CarouselProvider>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    newInv: state.newInventoryReducer.newInventory || [],
    usedInv: state.usedInventoryReducer.inventory || [],
    loading: state.usedInventoryReducer.loading,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, {
  addImage,
  addNewImage,
  //addNewInventory,
  getUsedInventory,
  getNewInventory,
  newSearchFilter
})(DealerInventoryMain);
