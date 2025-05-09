import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-pen-tool',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconPenTool {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <g clip-path="url(#clip0_68_15911)">
          <path
            d="M1.33334 1.33337L11 3.66671L12 8.66671L8.66668 12L3.66668 11L1.33334 1.33337ZM1.33334 1.33337L6.39068 6.39071M8.00001 12.6667L12.6667 8.00004L14.6667 10L10 14.6667L8.00001 12.6667ZM8.66668 7.33337C8.66668 8.06975 8.06972 8.66671 7.33334 8.66671C6.59696 8.66671 6.00001 8.06975 6.00001 7.33337C6.00001 6.59699 6.59696 6.00004 7.33334 6.00004C8.06972 6.00004 8.66668 6.59699 8.66668 7.33337Z"
            stroke="var(--svg-stroke-color)"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clip-path id="clip0_68_15911">
            <rect width="16" height="16" fill="white" />
          </clip-path>
        </defs>
      </SdsIcon>
    );
  }
}
