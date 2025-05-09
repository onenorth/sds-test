import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sds-menu-trigger',
  styleUrl: 'sds-menu-trigger.scss',
  shadow: true,
})
export class SdsMenuTrigger {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
