/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserCard = ({ img, name, born }) => {
  return (
    <Card sx={{ width: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="Usuario"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {born}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UserCard;