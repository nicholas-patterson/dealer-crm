// import React from "react";
// import { connect } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   }
// });

// const Carousel = props => {
//   const classes = useStyles();
//   const pictures = props.usedInv.map(inv => {
//     return inv.Inventories.map(info => {
//       console.log(info.Image);
//       return info.Image;
//     });
//   });

//   const singlepic = pictures.map(pic => {
//     return pic[0].car_picture;
//   });

//   return (
//     <>
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="/static/images/cards/contemplative-reptile.jpg"
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     usedInv: state.usedInventoryReducer.inventory
//   };
// };

// export default connect(mapStateToProps, null)(Carousel);
