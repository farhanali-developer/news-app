import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Button from '@material-ui/core/Button'
import axios from 'axios'

console.log(axios.get(`/news`))

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function LatestNews() {
  const classes = useStyles()
  return (
    <div>
      <h2 style={{ marginTop: '50px', marginLeft: '35px' }}>Latest NEWS</h2>
      <Box display='flex' justifyContent='space-evenly' my={5}>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box display='flex' justifyContent='space-evenly' my={5}>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box display='flex' justifyContent='space-evenly' my={5}>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card className={classes.root} mt={5}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />
          <CardMedia
            className={classes.media}
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
            <Button variant='outlined' style={{ marginTop: '20px' }}>
              Read More
            </Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}
