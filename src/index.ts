import { LitElement,html, css, customElement, property } from 'lit-element';

@customElement('hola-mundo')
export class TestWebComponent extends LitElement {

    @property() counter: number;

    static styles = css`
        :host {
            display: block;
        }
    `;
    render() {
        return html`
            <div>hola al mundo de los web</div>
            <button @click="${this.incrementar}">+1</button>
            <div>${this.counter}</div>
        `;
    }

    incrementar(){
        this.counter++;
    }
}
