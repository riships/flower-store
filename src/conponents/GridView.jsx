import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
// import { CardActionArea } from '@mui/material';


function GridView({ product }) {
    console.log(product);
    return (<div className="container2">
        {
            product.map((curEle) => {
                const { images, id, name, description } = curEle;
                return <div className='flower-grid-conatiner col-lg-4 col-md-6'>
                    <Card sx={{ maxWidth: 345 }} key={id}>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={images[0].url}
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
                    </Card>
                </div>

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
    </div>
    );
}

export default GridView;