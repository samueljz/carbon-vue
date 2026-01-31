/**
 * Storybook template layer component, strictly for presentation purposes.
 * Replicates the @carbon/web-components with-layer template.
 * 
 * @element sb-template-layers
 * @slot The elements contained within the component.
 */
import { LitElement, html, css } from 'lit';
import '@carbon/web-components/es/components/layer/index.js';

// Known properties on Carbon web components that should be copied during cloning
const KNOWN_PROPERTIES = [
    'titleText', 'title', 'labelText', 'label', 'labelA', 'labelB',
    'helperText', 'invalidText', 'warnText', 'placeholder', 'value',
    'checked', 'toggled', 'disabled', 'readonly', 'invalid', 'warn',
    'open', 'expanded', 'size', 'kind', 'type', 'name'
];

/**
 * Deep clones a node and copies JavaScript properties that cloneNode misses.
 */
function deepCloneWithProperties(node: Node): Node {
    const clone = node.cloneNode(false);

    // Copy JavaScript properties for custom elements
    if (node instanceof HTMLElement && clone instanceof HTMLElement) {
        for (const prop of KNOWN_PROPERTIES) {
            const value = (node as any)[prop];
            if (value !== undefined && value !== null && value !== '') {
                try {
                    (clone as any)[prop] = value;
                } catch (e) {
                    // Ignore read-only properties
                }
            }
        }
    }

    // Recursively clone children
    node.childNodes.forEach(child => {
        clone.appendChild(deepCloneWithProperties(child));
    });

    return clone;
}

export class SbTemplateLayers extends LitElement {
    private content: Node | null = null;
    private _layer1: Node | null = null;
    private _layer2: Node | null = null;
    private _observer: MutationObserver | null = null;

    private _handleSlotChange(event: Event) {
        if (!this.content) {
            const slot = event.target as HTMLSlotElement;
            const nodes = slot.assignedNodes().filter(
                (node) => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()
            );
            this.content = nodes[0] || null;
            this.requestUpdate();
        }
    }

    updated() {
        if (this.content && !this._layer1) {
            // Clone content for layers using deep clone that preserves properties
            this._layer1 = deepCloneWithProperties(this.content);
            this._layer2 = deepCloneWithProperties(this.content);

            if (this._layer1 instanceof Element) {
                this._layer1.setAttribute('slot', 'layer-1');
            }
            if (this._layer2 instanceof Element) {
                this._layer2.setAttribute('slot', 'layer-2');
            }

            this.appendChild(this._layer1);
            this.appendChild(this._layer2);

            // Watch for attribute changes on original
            this._observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && this.content instanceof Element) {
                        const attrName = mutation.attributeName!;
                        const newValue = this.content.getAttribute(attrName);

                        if (newValue !== null) {
                            (this._layer1 as Element)?.setAttribute(attrName, newValue);
                            (this._layer2 as Element)?.setAttribute(attrName, newValue);
                        } else {
                            (this._layer1 as Element)?.removeAttribute(attrName);
                            (this._layer2 as Element)?.removeAttribute(attrName);
                        }
                    }
                });
            });

            if (this.content instanceof Element) {
                this._observer.observe(this.content, {
                    attributes: true,
                    attributeOldValue: true,
                });
            }
        }
    }

    disconnectedCallback() {
        this._observer?.disconnect();
        super.disconnectedCallback();
    }

    render() {
        return html`
      <cds-layer>
        <div class="cds--with-layer">
          <div class="cds--with-layer__background">
            <div class="cds--with-layer__label">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
              </svg>
              $background
            </div>
            <div class="cds--with-layer__content">
              <slot @slotchange="${this._handleSlotChange}"></slot>
              <cds-layer>
                <div class="cds--with-layer__layer">
                  <div class="cds--with-layer__label cds--with-layer__label--layer-1">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                    </svg>
                    $layer-01
                  </div>
                  <div class="cds--with-layer__content">
                    <slot name="layer-1"></slot>
                    <cds-layer>
                      <div class="cds--with-layer__layer">
                        <div class="cds--with-layer__label cds--with-layer__label--layer-2">
                          <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M28.5039,11.999l-12-6.99a1,1,0,0,0-1.008,0l-12,6.99a1,1,0,0,0-.496.865v8.293a1,1,0,0,0,.5.865l12,6.99a1,1,0,0,0,1.008,0l12-6.99a1,1,0,0,0,.496-.865V12.864A1,1,0,0,0,28.5039,11.999ZM16,7.031,25.7813,12.726,16,18.422,6.2188,12.726Zm11,13.541-10,5.823V19.289l10-5.823Z"/>
                          </svg>
                          $layer-02
                        </div>
                        <div class="cds--with-layer__content">
                          <slot name="layer-2"></slot>
                        </div>
                      </div>
                    </cds-layer>
                  </div>
                </div>
              </cds-layer>
            </div>
          </div>
        </div>
      </cds-layer>
    `;
    }

    static styles = css`
    :host {
      display: block;
    }

    .cds--with-layer__layer {
      position: relative;
      border: 1px dashed #8a3ffc;
      margin-block-start: 1rem;
    }

    .cds--with-layer__label {
      display: inline-flex;
      padding: 0.25rem;
      background-color: #e8daff;
      color: #6929c4;
      column-gap: 0.25rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.75rem;
      align-items: center;
    }
    
    .cds--with-layer__label svg {
      width: 16px;
      height: 16px;
    }

    .cds--with-layer__background {
      border: 1px dashed #d02670;
      margin: -42px;
      min-block-size: 100vh;
    }

    .cds--with-layer__background > .cds--with-layer__label {
      background-color: #ffe0ef;
      color: #9f1853;
    }

    .cds--with-layer__content {
      padding: 1rem;
    }
  `;
}

// Register the custom element
if (!customElements.get('sb-template-layers')) {
    customElements.define('sb-template-layers', SbTemplateLayers);
}

export default SbTemplateLayers;
