import { html, LitElement, css } from 'lit-element';
import './form-app';

class MainView extends LitElement {
    
    static get styles() {
        return css`
        .div {
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            position: relative;
            background: transparent;
        }`
    }

    render() { 
           return html`
            <div>
                <form-app></form-app>
            </div>`
    }
}

customElements.define('main-view', MainView);