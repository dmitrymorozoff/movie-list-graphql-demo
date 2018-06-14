import * as React from "react";
import { ModalConsumer } from "../modal-context";

export class ModalRoot extends React.Component<{}, {}> {
    public render() {
        return (
            <ModalConsumer>
                {({ component: Component, props, hideModal }: any) => {
                    return Component ? <Component {...props} onRequestClose={hideModal} /> : null;
                }}
            </ModalConsumer>
        );
    }
}
