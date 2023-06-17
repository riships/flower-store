import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
// import '../stylesheets/common.css';
import { Link } from "react-router-dom";


function GridView({ product }) {
    return (<div>
        <div className="container2">
            {
                product.map((curEle, index) => {
                    const { images, id, name, description } = curEle;
                    return <div className='grid-container' key={index}>
                        <Card sx={{ maxWidth: 345 }} className='grd'>
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
                                        {description.substr(0, 80)}<span>...</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                })
            }
        </div>
    </div>
    );
}

export default GridView;