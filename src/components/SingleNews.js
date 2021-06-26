import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import NavbarSignedIn from "./NavbarSignedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const LatestNews = () => {
  const classes = useStyles();

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("/user/news").then((news) => setNews(news.data));
  }, []);

  let url = "#";
  return (
    <div>
      <NavbarSignedIn />
      <div className={classes.root}></div>
      <Grid container spacing={0} style={{ padding: "0 20px" }}>
        <Grid item md={12} lg={9}>
          {news.slice(0, 1).map((news) => (
            <Grid item lg={12} key={news._id}>
              <h1
                style={{
                  fontSize: "34px",
                  textAlign: "center",
                  lineHeight: "1.5",
                }}
              >
                {news.title}
              </h1>
              <h3>Published on: {news.publishedAt}</h3>
              <img
                src={news.urlToImage}
                style={{ height: "100%", maxWidth: "100%", marginTop: "10px" }}
                alt={news.source.name}
              />
              <Typography
                style={{ marginTop: "20px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {news.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item md={12} lg={3}>
          {news.map((news) => (
            <Grid item lg={12} key={news._id}>
              <Card className={classes.root} mt={5}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title={news.title}
                  subheader={news.publishedAt}
                />
                <CardMedia
                  className={classes.media}
                  image={news.urlToImage}
                  title={news.source.name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {news.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    style={{ marginTop: "20px" }}
                    href={url}
                  >
                    Read More
                  </Button>
                  <Link href={news.url} target="_blank" rel="noopener">
                    <Button
                      variant="outlined"
                      style={{
                        marginTop: "20px",
                        marginLeft: "20px",
                      }}
                    >
                      Source Site
                    </Button>
                  </Link>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default LatestNews;
