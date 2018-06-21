import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import * as React from "react";
import { graphql } from "react-apollo";
import { allMoviesQuery, createMovieMutation } from "../../graphql/queries/movies";
import { Form, IFormState } from "./components/form";
const { toast } = require("react-toastify");

interface IProps {
    classes: any;
    onRequestClose: any;
    createMovieMutation?: any;
}

class Modal extends React.Component<IProps, {}> {
    public render() {
        const { onRequestClose }: any = this.props;
        return (
            <Dialog open={true} onClose={onRequestClose} aria-labelledby="form-dialog-title" color="default">
                <DialogTitle id="form-dialog-title">Add Movie</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add new movie into existing collection</DialogContentText>
                    <Form onSubmit={this.onSubmitHandler} />
                </DialogContent>
            </Dialog>
        );
    }

    private onSubmitHandler = ({ year, ...rest }: IFormState) => {
        const { onRequestClose } = this.props;
        onRequestClose();
        this.props.createMovieMutation({
            variables: { year: parseInt(year, 10), ...rest },
            update: (proxy: any, { data: { createMovie: movie } }: { data: any }) => {
                if (movie) {
                    const data: any = proxy.readQuery({
                        query: allMoviesQuery,
                    });
                    data.allMovies.push(movie);
                    proxy.writeQuery({
                        query: allMoviesQuery,
                        data,
                    });
                }
            },
        });
        toast.info("Movie added successfully");
    };
}

export const ModalAddMovie = graphql(createMovieMutation, { name: "createMovieMutation" })(Modal as any);
