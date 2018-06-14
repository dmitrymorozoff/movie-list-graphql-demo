import { Button, DialogActions, TextField } from "@material-ui/core";
import * as React from "react";
import { isEmpty, isURL } from "validator";

interface IProps {
    onSubmit: (values: IFormState) => void;
}

export interface IFormState {
    title: string;
    description: string;
    director: string;
    year: string;
    poster: string;
}

export class Form extends React.Component<IProps, IFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Gotti",
            description: "The story of crime boss John Gotti and his son.",
            director: "Kevin Connolly",
            year: "2018",
            poster: "https://i.ytimg.com/vi/H4Mg4V1YfC8/maxresdefault.jpg",
        };
    }

    public render() {
        const { title, description, director, year, poster } = this.state;
        return (
            <form>
                <TextField
                    autoFocus={true}
                    name="title"
                    margin="dense"
                    required={true}
                    label="Title"
                    value={title}
                    type="text"
                    error={isEmpty(title) ? true : false}
                    fullWidth={true}
                    defaultValue={"Gotti"}
                    onChange={this.onChangeTextField}
                />
                <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    value={description}
                    multiline={true}
                    color="default"
                    type="text"
                    fullWidth={true}
                    onChange={this.onChangeTextField}
                />
                <TextField
                    margin="dense"
                    name="director"
                    label="Director"
                    type="text"
                    value={director}
                    fullWidth={true}
                    onChange={this.onChangeTextField}
                />
                <TextField
                    margin="dense"
                    name="year"
                    value={year}
                    label="Year"
                    type="text"
                    fullWidth={true}
                    onChange={this.onChangeTextField}
                />
                <TextField
                    margin="dense"
                    name="poster"
                    label="Poster"
                    value={poster}
                    required={true}
                    type="text"
                    fullWidth={true}
                    error={isURL(poster) || isEmpty(poster) ? true : false}
                    onChange={this.onChangeTextField}
                />
                <DialogActions>
                    <Button onClick={this.onSubmit} size="medium" color="default">
                        Add
                    </Button>
                </DialogActions>
            </form>
        );
    }

    private onChangeTextField = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        } as any);
    };

    private onSubmit = (e: any) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit(this.state);
    };
}
