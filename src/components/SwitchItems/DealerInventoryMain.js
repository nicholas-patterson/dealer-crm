import React, { useState, useEffect, useCallback } from "react";
import { Link } from "@reach/router";
import Portal from "../Portal";
import { connect } from "react-redux";
import {
  addImage,
  addNewImage,
  getUsedInventory,
  getNewInventory,
  newSearchFilter,
  deleteUsedInv,
  deleteNewInv,
  getNewInventorySales,
  getUsedInventorySales,
  editUsedInventory,
  editNewInventory
} from "../../actions/index";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-ei/search";
import DealerNewInvSingle from "./DealerNewInvSingle";
import DealerUsedInvSingle from "./DealerUsedInvSingle";
import { Howl, Howler } from "howler";
import addsound from "../../sounds/addsound.mp3";
import deletesound from "../../sounds/deletesound.mp3";

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
  const inv_add_sound = new Howl({
    src: addsound
  });

  const inv_delete_sound = new Howl({
    src: deletesound
  });

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
  // const handleNewInventoryChange = useCallback(
  //   e => {
  //     setNewInventory({ ...newInventory, [e.target.name]: e.target.value });
  //   },
  //   [newInventory, setNewInventory]
  // );

  // used inventory search
  const handleUsedInventoryChange = useCallback(
    e => {
      setUsedInventory({ ...usedInventory, [e.target.name]: e.target.value });
    },
    [usedInventory, setUsedInventory]
  );

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

  const handleNewInventorySearch = useCallback(
    e => {
      e.preventDefault();
      //props.newSearchFilter(newInventory);
    },
    [newInventory]
  );

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
    inv_add_sound.play();
    setUsedInventoryAdd({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  // delete Used Inventory
  const deleteUsedInventory = (invId, imageId) => {
    props.deleteUsedInv(invId, imageId);
    inv_delete_sound.play();
  };

  // handleSubmit for New Inv Form
  const handleNewInventorySubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("car_picture", newInventoryAdd.car_picture);
    formData.append("upload_preset", "darwin");
    props.addNewImage(formData, newInventoryAdd);
    inv_add_sound.play();
    setNewInventoryAdd({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  Howler.volume(0.5);

  // Set inventory state to false
  const [showUsedInventoryModal, setShowUsedInventoryModal] = useState(false);
  const [showNewInventoryModal, setShowNewInventoryModal] = useState(false);

  // handle used inventory close button
  const handleUsedInventoryCloseButton = () => {
    setShowUsedInventoryModal(false);
    setUsedInventoryAdd({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  const handleNewInventoryCloseButton = () => {
    setShowNewInventoryModal(false);
    setNewInventoryAdd({
      car_picture: "",
      year: "",
      make: "",
      model: "",
      price: "",
      miles: "",
      info: ""
    });
  };

  useEffect(() => {
    props.user === "dealer"
      ? props.getUsedInventory() || props.getNewInventory()
      : props.getUsedInventorySales() || props.getNewInventorySales();
  }, []);

  console.log("LOADING", props.loading);
  console.log("HOW MANY", props.newInv.length);

  console.log("PROPS.VALUE", ...props.value);

  return (
    <>
      {/* Used Inventory Modal to Add Inventory only for dealer */}
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
              <span className="picture_url">
                {usedInventoryAdd.car_picture.name}
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
      {/* New Inventory Modal to add New Inventory only for dealer */}
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
              <label htmlFor="car_picture">Upload file</label>
              <span className="picture_url">
                {newInventoryAdd.car_picture.name}
              </span>
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
      {/* Begins actual Inventory Page */}
      <div>
        {/* New Inventory */}

        <div className="new--inventory">
          <h3 className="new--inventory__title">New Inventory</h3>
          {/* User === Dealer && New Inventory Length >= 1 show add button */}
          {props.user === "dealer" && props.newInv.length >= 1 ? (
            <Link
              onClick={handleNewInventoryAdd}
              to="/dealer/inventory/newInventory"
              className="new--inventory__addBtn"
            >
              <span className="usedInventoryAddLink">Add </span>{" "}
            </Link>
          ) : null}
          {/* End Of Logic For New Inventory Add Button */}

          {/* New Inventory Search form for dealers and salesman */}
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
                  value={props.value.term}
                  onChange={e => props.newSearchFilter(e.target.value)}
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
                  value={props.value.term}
                  onChange={e => props.newSearchFilter(e.target.value)}
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
                  value={props.value.term}
                  onChange={e => props.newSearchFilter(e.target.value)}
                />
                <label htmlFor="inputField" className="label-name">
                  <span className="content-name">Model</span>
                </label>
              </div>
              <Icon
                onClick={handleNewInventorySearch}
                className="newInv_search"
                icon={searchIcon}
              />
            </form>
          </div>
          {/* End of code for new inv search fields for dealers and salesmans */}

          {props.user === "dealer" ? (
            props.newInv.length === 0 ? (
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
                          <DealerNewInvSingle
                            inv={inv}
                            idx={idx}
                            deleteNewInv={props.deleteNewInv}
                            classes={classes}
                            props={props}
                          />
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
            )
          ) : props.sales_newInv.length === 0 ? (
            <div className="new--inventory__results">
              <h3>
                Dealer Has No Inventory{" "}
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
                totalSlides={props.sales_newInv.length}
                orientation="horizontal"
                visibleSlides={3}
                dragEnabled={false}
                touchEnabled={false}
                style={{ position: "relative" }}
              >
                <Slider style={{ marginTop: "3rem" }}>
                  {props.sales_newInv &&
                    props.sales_newInv.map((inv, idx) => {
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
                            {/* <CardActions>
                            <Button size="small" color="primary">
                              Edit
                            </Button>
                            <Button
                              onClick={() =>
                                props.deleteNewInv(inv.id, inv.image_id)
                              }
                              size="small"
                              color="primary"
                            >
                              Delete
                            </Button>
                          </CardActions> */}
                          </Card>
                        </Slide>
                      );
                    })}
                </Slider>
                {props.sales_newInv.length < 4 ? null : (
                  <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
                )}
                {props.sales_newInv.length < 4 ? null : (
                  <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
                )}
              </CarouselProvider>
            </>
          )}
        </div>

        {/* Used Inventory */}

        <div className="used--inventory">
          <h3 className="used--inventory__title">Used Inventory</h3>
          {/* User === Salesman && Used Inventory Length >= 1 show add button */}
          {props.user === "dealer" && props.usedInv.length >= 1 ? (
            <Link
              onClick={handleUsedInventoryAdd}
              to="/dealer/inventory/UsedInventory"
              className="used--inventory__addBtn"
            >
              <span className="usedInventoryAddLink">Add </span>{" "}
            </Link>
          ) : null}

          {/* End Of Logic For New Inventory Add Button */}

          {/* New Inventory Search form for dealers and salesman */}
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
              <Icon className="usedInv_search" icon={searchIcon} />
            </form>
          </div>
          {/* End of code for used inv search fields for dealers and salesmans */}

          {props.user === "dealer" ? (
            props.usedInv.length === 0 ? (
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
                          <DealerUsedInvSingle
                            inv={inv}
                            idx={idx}
                            //deleteUsedInv={props.deleteUsedInv}
                            deleteUsedInventory={deleteUsedInventory}
                            classes={classes}
                            props={props}
                          />
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
            )
          ) : props.sales_usedInv.length === 0 ? (
            <div className="used--inventory__results">
              <h3>
                Dealer Has No Inventory{" "}
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
                totalSlides={props.sales_usedInv.length}
                orientation="horizontal"
                visibleSlides={3}
                dragEnabled={false}
                touchEnabled={false}
                style={{ position: "relative" }}
              >
                <Slider style={{ marginTop: "3rem" }}>
                  {props.sales_usedInv &&
                    props.sales_usedInv.map((inv, idx) => {
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
                            {/* <CardActions>
                            <Button size="small" color="primary">
                              Edit
                            </Button>
                            <Button
                              onClick={() =>
                                props.deleteUsedInv(inv.id, inv.image_id)
                              }
                              size="small"
                              color="primary"
                            >
                              Delete
                            </Button>
                          </CardActions> */}
                          </Card>
                        </Slide>
                      );
                    })}
                </Slider>
                {props.sales_usedInv.length < 4 ? null : (
                  <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
                )}
                {props.sales_usedInv.length < 4 ? null : (
                  <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
                )}
              </CarouselProvider>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    newInv: state.newInventoryReducer.newInventory || [],
    usedInv: state.usedInventoryReducer.inventory || [],
    sales_newInv: state.getSalesNewInventoryReducer.salesNewInventory || [],
    sales_usedInv: state.getSalesUsedInventoryReducer.salesUsedInventory || [],
    user: state.userReducer.user,
    loading: state.imageReducer.loading,
    value: state.newInventoryReducer.newInventory
  };
};

export default connect(mapStateToProps, {
  addImage,
  addNewImage,
  getUsedInventory,
  getNewInventory,
  newSearchFilter,
  deleteUsedInv,
  deleteNewInv,
  getNewInventorySales,
  getUsedInventorySales,
  editNewInventory,
  editUsedInventory
})(React.memo(DealerInventoryMain));
