import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const appRoot = document.querySelector("#root");

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Oculus</li>
                </ul>
                <MyForm />
            </div>
        );
    }
}

class MyForm extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "my-form" },
            React.createElement("input", { placeholder: "Escriba su nombre" }),
            React.createElement("button", {}, "Enviar datos")
        );
    }
}

ReactDOM.render([<ShoppingList />, <MyForm />], appRoot);
