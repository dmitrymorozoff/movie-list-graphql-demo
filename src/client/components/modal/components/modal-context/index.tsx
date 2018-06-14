import * as React from "react";

const ModalContext = React.createContext({
    component: null,
    props: {},
    showModal: () => ({} as any),
    hideModal: () => ({} as any),
});

export class ModalProvider extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            component: null,
            props: {},
            showModal: this.showModal,
            hideModal: this.hideModal,
        };
    }

    public showModal = (component: any, props = {}) => {
        this.setState({
            component,
            props,
        });
    };

    public hideModal = () =>
        this.setState({
            component: null,
            props: {},
        });

    public render() {
        return <ModalContext.Provider value={this.state as any}>{this.props.children}</ModalContext.Provider>;
    }
}

export const ModalConsumer = ModalContext.Consumer;
