import { html, LitElement, css } from 'lit-element';

class DataOutput extends LitElement {

    static get properties() {
        return {
            data: { type: Object },
        }
    }

    static get styles() {
        return css`
        div {
            min-width: 250px;
            padding: 0 10px 10px;
        }
        p {
            text-transform: capitalize;
        }
        span {
            text-decoration: underline;
        }
        .title {
            margin-top: 0;
            font-style: italic;
        }
        strong {
            font-size: 13.5px;
        }`
    }

    render() {
        const { firstName, secondName, job } = this.data;
        return html`
        <div>
        <p class="title">Register</p>
        <p>
            <strong>First name:</strong>&nbsp;<span>${firstName}</span>
        </p>
        <p>
            <strong>Second name:</strong>&nbsp;<span>${secondName}</span>
        </p>
        <p>
            <strong>Job:</strong>&nbsp;<span>${job}</span>
        </p>
        </div>`
    }
}

customElements.define('data-output', DataOutput);