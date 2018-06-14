import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import * as React from "react";
import { graphql } from "react-apollo";
import { createMovieMutation } from "../../graphql/queries/movies";
import { Form, IFormState } from "./components/form";

interface IProps {
    classes: any;
    onRequestClose: any;
    createMovieMutation?: any;
}

class Modal extends React.Component<IProps, {}> {
    public render() {
        // tslint:disable-next-line:no-console
        console.log("ss", this.props);
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

    private onSubmitHandler = ({ title, description, director, poster, year }: IFormState) => {
        const { onRequestClose } = this.props;
        onRequestClose();
        this.props.createMovieMutation({
            variables: { title, description, director, poster, year: parseInt(year, 10) },
        });
    };
}

export const ModalAddMovie = graphql(createMovieMutation, { name: "createMovieMutation" })(Modal as any);