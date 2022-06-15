import { BrowserRouter, Switch, Route } from "react-router-dom"
import DarkModeContext from "./store/DarkModeContext";
import Home from './views/Home'
import './styles/main.css';
import injectContext from "./store/appContext";

const Layout = () => {

    return (
        <DarkModeContext>
            <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </DarkModeContext>
    )
}

export default injectContext(Layout);