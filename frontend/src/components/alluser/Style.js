import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  table: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    width: "100%",
  },
  thead: {
    "& > *": {
      fontSize: 19,
      background: "#15317E",
      color: "rgb(247, 238, 238)",
    },
  },
  row: {
    "& > *": {
      fontSize: 19,
    },
  },
}));
