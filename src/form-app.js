import { html, LitElement, css } from 'lit-element';
import './data-output';

class FormApp extends LitElement {
    
    static get properties() {
        return {
            data: { type: Object },
        }
    }

    static get styles() {
        return css`
        :host {
            position: relative;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            justify-content: center;
            margin: 30px auto;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
        }
        legend {
            padding: 0;
            font-weight: 400;
            border-bottom: 2px solid #000;
            width: 100%;
            margin-bottom: 15px;
        }
        fieldset {
            border: none;
        }
        label {
            display: block;
            font-size: 14px;
            margin-bottom: 3px;
            background: #e5fafb;
        }
        input {
            margin-bottom: 15px;
            padding: 3px 6px;
            outline: none;
            height: 20px;
            font-size: 16px;
            box-shadow: none;
            border: 1px solid rgb(140 139 139);
            border-radius: 3px;
            text-transform: capitalize;
        }`
    }

    constructor() {
        super();
        this.data = {
            firstName: '',
            secondName: '',
            job: '',
        };
    }

    handleChange({target}) {
        this.data = {
            ...this.data,
            [target.name]: target.value,
        }
    }

    render() {
        return html`
        <form>
            <fieldset>
            <legend>User</legend>
            <label for="frst">First name</label>
            <input @input=${this.handleChange}
            type="text" id="frst" name="firstName" value="">
            <label for="snd">Second name</label>
            <input @input=${this.handleChange}
            type="text" id="snd" name="secondName" value="">
            <label for="job">Job</label>
            <input @input=${this.handleChange}
            type="text" id="job" name="job" value="">
            </fieldset>
        </form>
        <data-output .data=${this.data}></data-output>`
    }
}

customElements.define('form-app', FormApp);