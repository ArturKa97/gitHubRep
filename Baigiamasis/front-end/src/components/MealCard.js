import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MealCard = ({title, description, productList, totalValues}) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 220,
            width: 220,
            border: 2,
            maxHeight: 320,
            height: 320,
            borderRadius: '16px',
            margin: 2 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
            />
            <CardMedia
                component="img"
                height="140"
                image="https://www.dogan.lt/image/cache/catalog/meniu/1_kebabas%20lavase_0029_IMG_0028%20-%20Copy-1600x1200.jpg"
                alt="kebabas"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Meal description: {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Total Nutrition Values:</Typography>
                    {totalValues}
                    <Typography paragraph>Product List:</Typography>
                        {productList}
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default MealCard;