import { Button, withStyles } from "@material-ui/core";
import * as React from "react";
import { ModalAddMovie } from "../../../../components/add-movie-modal";
import { ModalConsumer, ModalProvider } from "../../../../components/modal/components/modal-context";
import { ModalRoot } from "../../../../components/modal/components/modal-root";
import { styles } from "./style";

interface IProps {
    classes?: {
        btn: any;
    };
}

interface IState {
    modalIsOpen: boolean;
}

class AddMovie extends React.Component<IProps, IState> {
    public render() {
        const { classes }: any = this.props;
        return (
            <ModalProvider>
                <ModalRoot />
                <ModalConsumer>
                    {({ showModal }: any) => (
                        <Button
                            className={classes.btn}
                            variant="text"
                            // tslint:disable-next-line:jsx-no-lambda
                            onClick={() => showModal(ModalAddMovie)}
                        >
                            Add movie
                        </Button>
                    )}
                </ModalConsumer>
            </ModalProvider>
        );
    }
}

export const AddMovieButton = withStyles(styles)(AddMovie as any);
