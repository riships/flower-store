import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button } from '@mui/material';
// import '../stylesheets/common.css';



function GridView({ product }) {
    console.log(product);
    return (<div className="container2">
        {
            product.map((curEle) => {
                const { images, id, name, description } = curEle;
                return <div className='grid-container'>
                    <Card sx={{ maxWidth: 345 }} key={id} className='grd'>
                        <CardActionArea>
                            <CardMedia component="img" height="250" image={images[0].url}
                                alt={name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button variant="primary">Go somewhere</Button>
                    </Card >
                </div >

                //     <Card className='col-md-4' key={id}>
                //     <Card.Img variant="top" src={images[0].url} />
                //     <Card.Body>
                //         <Card.Title>{name}</Card.Title>
                //         <Card.Text>
                //             {description}
                //         </Card.Text>
                //         <Button variant="primary">Go somewhere</Button>
                //     </Card.Body>
                // </Card >
            })
        }
    </div >
    );
}

export default GridView;