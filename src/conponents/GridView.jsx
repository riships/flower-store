import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
// import '../stylesheets/common.css';
import { Link } from "react-router-dom";
import Sort from './Sort';


function GridView({ product }) {
    // console.log(product);
    return (<>
        <Sort />
        <div className="container2">

        {
            product.map((curEle) => {
                const { images, id, name, description } = curEle;
                return <div className='grid-container'>

                    <Card sx={{ maxWidth: 345 }} key={id} className='grd'>

                        <CardActionArea>
                            <Link to={`/singleproduct/${id}`}>
                                <CardMedia component="img" height="250" image={images[0].url}
                                    alt={name} className='store-image' />
                            </Link>
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
            })
        }
    </div >
    </>
    );
}

export default GridView;