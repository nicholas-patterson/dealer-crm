import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Portal from "../Portal";
import { connect } from "react-redux";
import {
  addImage,
  addNewImage,
  getUsedInventory,
  getNewInventory,
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
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import DealerNewInvSingle from "./DealerNewInvSingle";
import DealerUsedInvSingle from "./DealerUsedInvSingle";
import { useMediaQuery } from "react-responsive";
import { Howl, Howler } from "howler";
import addsound from "../../sounds/addsound.mp3";
import deletesound from "../../sounds/deletesound.mp3";

// Material-ui  Make Styles
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
  // React Reaponsive Media Queries
  const isMobile = useMediaQuery({ query: "(min-width: 320px)" });
  const isTabletorlargephone = useMediaQuery({ query: "(min-width: 720px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const islaptopDesktop = useMediaQuery({ query: "(min-width: 1400px)" });

  // Mui Classes
  const classes = useStyles();

  // Add Sound Howl
  const inv_add_sound = new Howl({
    src: addsound
  });

  // Delete Sound Howl
  const inv_delete_sound = new Howl({
    src: deletesound
  });

  // new inventory state search
  const [searchState, setSearchState] = useState({
    new_year: "",
    new_make: "",
    new_model: ""
  });

  // Filter New Inventory
  const [filtNewInv, setFiltNewInv] = useState([]);

  // Filter Used Inventory
  const [filtUsedInv, setFiltUsedInv] = useState([]);

  // Filter Sales New Inventory
  const [filtSalesNewInv, setFiltSalesNewInv] = useState([]);

  // Filter Sales Used Inventory
  const [filtSalesUsedInv, setFiltSalesUsedInv] = useState([]);

  // used inventory state search
  const [searchUsedState, setSearchUsedState] = useState({
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

  // new inventory search for salesman too
  const handleSearchChange = e => {
    setSearchState({ ...searchState, [e.target.name]: e.target.value });
  };

  // used inventory search for salesman too
  const handleUsedSearchChange = e => {
    setSearchUsedState({ ...searchUsedState, [e.target.name]: e.target.value });
  };

  // Use Effect for Setting filtNewInv state to new inventory items
  useEffect(() => {
    setFiltNewInv([...props.newInv]);
  }, []);

  // Use Effect for Setting filtUsedInv state to used inventory items
  useEffect(() => {
    setFiltUsedInv([...props.usedInv]);
  }, []);

  // Use Effect for setting filtSalesNewInv state to sales new inv items
  useEffect(() => {
    setFiltSalesNewInv([...props.sales_newInv]);
  }, []);

  // Use Effect for setting filtSalesUsedInv state to sales used inv items
  useEffect(() => {
    setFiltSalesUsedInv([...props.sales_usedInv]);
  }, []);

  // Use Effect to filter through sales new inv and set inv to state if yr make or model changes
  useEffect(() => {
    const filteredSalesUsedInventory = props.sales_usedInv.filter(inv => {
      if (
        inv.year.includes(searchUsedState.used_year) &&
        inv.make.includes(searchUsedState.used_make) &&
        inv.model.includes(searchUsedState.used_model)
      ) {
        return inv;
      }
    });
    setFiltSalesUsedInv([...filteredSalesUsedInventory]);
  }, [
    searchUsedState.used_year,
    searchUsedState.used_make,
    searchUsedState.used_model
  ]);

  // Use Effect to filter through sales new inv and set inv to state if yr make or model changes
  useEffect(() => {
    const filteredSalesNewInventory = props.sales_newInv.filter(inv => {
      if (
        inv.year.includes(searchState.new_year) &&
        inv.make.includes(searchState.new_make) &&
        inv.model.includes(searchState.new_model)
      ) {
        return inv;
      }
    });
    setFiltSalesNewInv([...filteredSalesNewInventory]);
  }, [searchState.new_year, searchState.new_make, searchState.new_model]);

  // After I delete this updates the filteredSalesUsedInv with the new contents of the props.sales_usedInv arr
  useEffect(() => {
    setFiltSalesUsedInv([...props.sales_usedInv]);
  }, [props.sales_usedInv]);

  // After I delete this updates the filteredSalesNewInv with the new contents of the props.sales_newInv arr
  useEffect(() => {
    setFiltSalesNewInv([...props.sales_newInv]);
  }, [props.sales_newInv]);

  // Use Effect to filter through newInv and set inv to state if year make or model changes
  useEffect(() => {
    const filteredNewInventory = props.newInv.filter(inv => {
      if (
        inv.year.includes(searchState.new_year) &&
        inv.make.includes(searchState.new_make) &&
        inv.model.includes(searchState.new_model)
      ) {
        return inv;
      }
    });
    setFiltNewInv([...filteredNewInventory]);
  }, [searchState.new_year, searchState.new_make, searchState.new_model]);

  // After I delete this updates the filteredInv with the new contents of the props.newInv arr
  useEffect(() => {
    setFiltNewInv([...props.newInv]);
  }, [props.newInv]);

  // After I delete this updates the filteredUsedInv with the new contents of the props.usedInv arr
  useEffect(() => {
    setFiltUsedInv([...props.usedInv]);
  }, [props.usedInv]);

  // Use Effect to filter through newInv and set inv to state if year make or model changes
  useEffect(() => {
    const filteredUsedInventory = props.usedInv.filter(inv => {
      if (
        inv.year.includes(searchUsedState.used_year) &&
        inv.make.includes(searchUsedState.used_make) &&
        inv.model.includes(searchUsedState.used_model)
      ) {
        return inv;
      }
    });
    setFiltUsedInv([...filteredUsedInventory]);
  }, [
    searchUsedState.used_year,
    searchUsedState.used_make,
    searchUsedState.used_model
  ]);

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

  // delete Used Inventory
  const deleteNewInventory = (invId, imageId) => {
    props.deleteNewInv(invId, imageId);
    inv_delete_sound.play();
    setSearchState({ new_year: "", new_make: "", new_model: "" });
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
  }, [props.newInv.length]);

  const visibleSlides = () => {
    if (islaptopDesktop) {
      return 3;
    } else if (isDesktop) {
      return 2;
    } else if (isTabletorlargephone || isMobile) {
      return 1;
    }
  };

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

            <div className="used-inv-add-btn-group">
              <Link
                className="usedInv-closeBtn"
                onClick={handleUsedInventoryCloseButton}
                to={
                  props.user === "salesman"
                    ? "/sales/dash"
                    : "/dealer/inventory"
                }
              >
                Close
              </Link>

              <button className="usedInv-submitBtn">Submit</button>
            </div>
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
            />

            <div className="new-inv-add-btn-group">
              <Link
                className="newInv-closeBtn"
                onClick={handleNewInventoryCloseButton}
                to={
                  props.user === "salesman"
                    ? "/sales/dash"
                    : "/dealer/inventory"
                }
              >
                Close
              </Link>

              <button className="newInv-submitBtn">Submit</button>
            </div>
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
            <form className="new--inventory__fields form">
              <div className="field">
                <input
                  type="text"
                  name="new_year"
                  id="new_year"
                  autoComplete="off"
                  required
                  className="input-group"
                  value={searchState.new_year}
                  onChange={e => handleSearchChange(e)}
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
                  value={searchState.new_make}
                  onChange={e => handleSearchChange(e)}
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
                  value={searchState.new_model}
                  onChange={e => handleSearchChange(e)}
                />
                <label htmlFor="inputField" className="label-name">
                  <span className="content-name">Model</span>
                </label>
              </div>
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
                  visibleSlides={visibleSlides()}
                  dragEnabled={false}
                  touchEnabled={true}
                  style={{ position: "relative" }}
                >
                  <Slider
                    style={{ marginTop: "3rem" }}
                    className={isDesktop ? "slider-margin-left" : null}
                  >
                    {searchState.new_year === "" &&
                    searchState.new_make === "" &&
                    searchState.new_model === ""
                      ? props.newInv.map((inv, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              <DealerNewInvSingle
                                inv={inv}
                                idx={idx}
                                deleteNewInv={deleteNewInventory}
                                classes={classes}
                                props={props}
                              />
                            </React.Fragment>
                          );
                        })
                      : filtNewInv.map((inv, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              <DealerNewInvSingle
                                inv={inv}
                                idx={idx}
                                deleteNewInv={deleteNewInventory}
                                classes={classes}
                                props={props}
                              />
                            </React.Fragment>
                          );
                        })}
                  </Slider>
                  {props.newInv.length > 4 || islaptopDesktop ? (
                    <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
                  ) : null}
                  {props.newInv.length > 4 || islaptopDesktop ? (
                    <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
                  ) : null}
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
                visibleSlides={visibleSlides()}
                dragEnabled={false}
                touchEnabled={true}
                style={{ position: "relative" }}
              >
                <Slider
                  style={{ marginTop: "3rem" }}
                  className={isDesktop ? "slider-margin-left" : null}
                >
                  {searchState.new_year === "" &&
                  searchState.new_make === "" &&
                  searchState.new_model === ""
                    ? props.sales_newInv &&
                      props.sales_newInv.map((inv, idx) => {
                        return (
                          <Slide key={idx}>
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
                            </Card>
                          </Slide>
                        );
                      })
                    : filtSalesNewInv.map((inv, idx) => {
                        return (
                          <Slide key={idx}>
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
                            </Card>
                          </Slide>
                        );
                      })}
                </Slider>
                {props.sales_newInv.length > 4 && islaptopDesktop ? (
                  <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
                ) : null}
                {props.sales_newInv.length > 4 && islaptopDesktop ? (
                  <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
                ) : null}
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
                  value={searchUsedState.used_year}
                  onChange={e => handleUsedSearchChange(e)}
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
                  value={searchUsedState.used_make}
                  onChange={e => handleUsedSearchChange(e)}
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
                  value={searchUsedState.used_model}
                  onChange={e => handleUsedSearchChange(e)}
                />
                <label htmlFor="inputField" className="label-name">
                  <span className="content-name">Model</span>
                </label>
              </div>
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
                  visibleSlides={visibleSlides()}
                  dragEnabled={false}
                  touchEnabled={true}
                  style={{ position: "relative" }}
                >
                  <Slider
                    style={{ marginTop: "3rem" }}
                    className={isDesktop ? "slider-margin-left" : null}
                  >
                    {searchUsedState.used_year === "" &&
                    searchUsedState.used_make === "" &&
                    searchUsedState.used_model === ""
                      ? props.usedInv.map((inv, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              <DealerUsedInvSingle
                                inv={inv}
                                idx={idx}
                                deleteUsedInventory={deleteUsedInventory}
                                classes={classes}
                                props={props}
                              />
                            </React.Fragment>
                          );
                        })
                      : filtUsedInv.map((inv, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              <DealerUsedInvSingle
                                inv={inv}
                                idx={idx}
                                deleteUsedInventory={deleteUsedInventory}
                                classes={classes}
                                props={props}
                              />
                            </React.Fragment>
                          );
                        })}
                  </Slider>
                  {props.usedInv.length > 4 || islaptopDesktop ? (
                    <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
                  ) : null}
                  {props.usedInv.length > 4 || islaptopDesktop ? (
                    <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
                  ) : null}
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
                visibleSlides={visibleSlides()}
                dragEnabled={false}
                touchEnabled={true}
                style={{ position: "relative" }}
              >
                <Slider
                  style={{ marginTop: "3rem" }}
                  className={isDesktop ? "slider-margin-left" : null}
                >
                  {searchUsedState.used_year === "" &&
                  searchUsedState.used_make === "" &&
                  searchUsedState.used_model === ""
                    ? props.sales_usedInv &&
                      props.sales_usedInv.map((inv, idx) => {
                        return (
                          <Slide index={idx} key={idx}>
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
                            </Card>
                          </Slide>
                        );
                      })
                    : filtSalesUsedInv.map((inv, idx) => {
                        return (
                          <Slide index={idx} key={idx}>
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
                            </Card>
                          </Slide>
                        );
                      })}
                </Slider>
                {props.sales_usedInv.length > 4 && islaptopDesktop ? (
                  <ButtonBack className="slide_backBtn">&lt;</ButtonBack>
                ) : null}
                {props.sales_usedInv.length > 4 && islaptopDesktop ? (
                  <ButtonNext className="slide_nextBtn">&gt;</ButtonNext>
                ) : null}
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
    loading: state.imageReducer.loading
    //value: state.newInventoryReducer.newInventory,
  };
};

export default connect(mapStateToProps, {
  addImage,
  addNewImage,
  getUsedInventory,
  getNewInventory,
  deleteUsedInv,
  deleteNewInv,
  getNewInventorySales,
  getUsedInventorySales,
  editNewInventory,
  editUsedInventory
})(React.memo(DealerInventoryMain));
