import {
    Button,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withStyles,
} from "@material-ui/core";
import * as React from "react";
import { compose, graphql, QueryProps } from "react-apollo";
import { movieQuery } from "../../graphql/queries/movies";
import { IMovie, IMovieQuery } from "../../graphql/types/query-types";
import { styles } from "./style";

interface IProps {
    selectedMovieId: number;
    isOpen: boolean;
    onClose: any;
    movieQuery: IMovieQuery & QueryProps;
    classes: any;
}

export class MovieDialogComponent extends React.Component<IProps, {}> {
    public render() {
        const { isOpen, classes } = this.props;
        // tslint:disable-next-line:no-console
        console.log("props", this.getMovieData());
        const { description, title, poster, director, year, stars = [], genres = [] }: any = this.getMovieData();
        return (
            <div>
                <Dialog open={isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                    <CardMedia className={classes.media} image={poster} title="Contemplative Reptile" />
                    <DialogContent>
                        <DialogContentText className={classes.text}>{`Year: ${year}`}</DialogContentText>
                        <DialogContentText className={classes.text}>{`Director: ${director}`}</DialogContentText>
                        <DialogContentText className={classes.text}>{`Stars: ${stars.join(" ")}`}</DialogContentText>
                        <DialogContentText className={classes.text}>{`Genres: ${genres.join(" ")}`}</DialogContentText>
                        <DialogContentText className={classes.text}>{`Description: ${description}`}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.onCloseHandler}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    private getMovieData = (): IMovie => {
        const {
            movieQuery: { movie },
        }: any = this.props;
        return movie || {};
    };

    private onCloseHandler = () => {
        this.props.onClose();
    };
}

const movieQueryData = graphql(movieQuery, {
    name: "movieQuery",
    options: (props: IProps) => ({ variables: { id: props.selectedMovieId } }),
});

export const MovieDialog = compose(
    movieQueryData,
    withStyles(styles),
)(MovieDialogComponent as any);
