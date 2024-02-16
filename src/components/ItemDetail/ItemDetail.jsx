/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemDetail = ( {product} ) => {
  const { nombre, imagen, precio } = product;
  const valorDolar = 1200;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image={imagen}
          alt={`${nombre}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Precio: ${precio * valorDolar}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetail;