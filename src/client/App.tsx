import * as React from "react";
import { styled } from "./components/styled-components";
import { Home } from "./views/home";

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export class App extends React.Component {
    public render() {
        return (
            <AppWrapper>
                <Home />
            </AppWrapper>
        );
    }
}
