import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { styles } from "./style";

interface IProps {
    id: number;
    poster: string;
    title: string;
    description: string;
    director: string;
    onClick: any;
    classes?: {
        card: any;
        title: any;
        media: any;
        desc: any;
    };
}

function MovieCardComponent(props: IProps) {
    const { classes, poster, title, description, director, onClick, id }: any = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={poster} title={title} />
                <CardContent>
                    <Typography gutterBottom={true} variant="title" component="h2" noWrap={true}>
                        {title}
                    </Typography>
                    <Typography variant="subheading" component="h3" color="textSecondary" gutterBottom={true}>
                        {`Director: ${director}`}
                    </Typography>
                    <Typography component="p" className={classes.desc}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="medium"
                        color="default"
                        variant="outlined"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() => {
                            onClick(id);
                        }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export const MovieCard = withStyles(styles)(MovieCardComponent);
