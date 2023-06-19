import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";


function GridView({ product }) {
    return (<div>
        <div className="container2">
            {
                product.map((curEle, index) => {
                    const { images, id, name, description } = curEle;
                    return <div className='grid-container' key={index}>
                        <Link className='link--decor' to={`/singleproduct/${id}`}>
                            <Card sx={{ maxWidth: 345 }} className='grd'>
                                <CardActionArea>
                                    <CardMedia component="img" height="250" image={images[0].url}
                                        alt={name} className='store-image' />
                                    <CardContent>
                                        <Typography style={containerStyle} gutterBottom variant="h5" component="div">
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {description.substr(0, 80)}<span>...</span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                })
            }
        </div>
    </div>
    );
}
const containerStyle = {
    height: '70px'
};

export default GridView;