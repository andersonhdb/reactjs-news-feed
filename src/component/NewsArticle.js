import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  
  card: {
    display: "flex",
    minWidth: 275,
    marginBottom: '1rem',
  },
  image:{
    maxWidth: 250,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NewsArticles(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className= {classes.image}
        component="img"
        image={props.news.urlToImage}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.news.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by: {props.news.author}
        </Typography>
        <Typography variant="body2" component="p">
          {props.news.content}
        </Typography>
      </CardContent>
    </Card>
  );
}