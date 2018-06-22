import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import * as React from "react";
import { compose, graphql, QueryProps } from "react-apollo";
import { movieQuery } from "../../graphql/queries/movies";
import { IMovie, IMovieQuery } from "../../graphql/types/query-types";

interface IProps {
    selectedMovieId: number;
    isOpen: boolean;
    onClose: any;
    movieQuery: IMovieQuery & QueryProps;
}

export class MovieDialogComponent extends React.Component<IProps, {}> {
    public render() {
        const { isOpen } = this.props;
        // tslint:disable-next-line:no-console
        console.log("props", this.getMovieData());
        return (
            <div>
                <Dialog open={isOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
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

        return movie;
    };

    private onCloseHandler = () => {
        this.props.onClose();
    };
}

const movieQueryData = graphql(movieQuery, {
    name: "movieQuery",
    options: (props: IProps) => ({ variables: { id: props.selectedMovieId } }),
});

export const MovieDialog = compose(movieQueryData)(MovieDialogComponent as any);
