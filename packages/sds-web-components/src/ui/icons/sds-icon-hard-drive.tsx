import { SdsIcon, Size } from '../primitives/Icon/sds-icon';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-icon-hard-drive',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class SdsIconHardDrive {
  /**
   * The size the icon will be displayed at
   */
  @Prop() size?: Size = '16';

  render() {
    return (
      <SdsIcon size={this.size}>
        <path
          d="M14.6667 8.00002H1.33334M14.6667 8.00002V12C14.6667 12.3536 14.5262 12.6928 14.2762 12.9428C14.0261 13.1929 13.687 13.3334 13.3333 13.3334H2.66668C2.31305 13.3334 1.97392 13.1929 1.72387 12.9428C1.47382 12.6928 1.33334 12.3536 1.33334 12V8.00002M14.6667 8.00002L12.3667 3.40669C12.2563 3.18455 12.0861 2.9976 11.8753 2.86687C11.6645 2.73615 11.4214 2.66682 11.1733 2.66669H4.82668C4.57862 2.66682 4.33552 2.73615 4.12471 2.86687C3.91389 2.9976 3.74373 3.18455 3.63334 3.40669L1.33334 8.00002M4.00001 10.6667H4.00668M6.66668 10.6667H6.67334"
          stroke="var(--svg-stroke-color)"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SdsIcon>
    );
  }
}
