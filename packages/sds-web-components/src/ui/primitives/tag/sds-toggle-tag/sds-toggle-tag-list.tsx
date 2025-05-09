import { TagToggle } from './sds-toggle-tag';
import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';

export type SelectionMode = 'single' | 'multiple' | 'none';

type Selection = Record<string, boolean>;

const deselectAll = (selection: Selection) => {
  return Object.keys(selection).reduce<Selection>((map, id) => ({ ...map, [id]: false }), {});
};

/**
 * Toggle Tag List
 */
@Component({
  tag: 'sds-toggle-tag-list',
  styleUrl: 'sds-toggle-tag.scss',
  shadow: true,
})
export class SdsToggleTagList {
  @Element() el!: HTMLDivElement;

  @Prop() selectionMode: SelectionMode = 'single';

  @State() tags!: NodeListOf<HTMLSdsToggleTagElement>;
  @State() selection: Selection = {};

  @Event() togglesUpdated!: EventEmitter<Selection>;

  componentDidLoad() {
    const tags = this.el.querySelectorAll('sds-toggle-tag');
    this.tags = tags;
    tags.forEach(tag => {
      tag.allowSelfToggle = false;
      const { id, selected } = tag;
      this.selection[id] = selected;
    });
  }

  @Listen('toggle')
  handleTagToggle(e: CustomEvent<TagToggle>) {
    if (this.selectionMode === 'none') {
      return;
    }
    const { id, selected } = e.detail;
    const newSelection = this.selectionMode === 'single' ? deselectAll(this.selection) : this.selection;
    newSelection[id] = selected;
    this.togglesUpdated.emit(newSelection);
    this.updateTags(newSelection);
  }

  updateTags = (selection: Selection) => {
    this.tags.forEach(tag => {
      tag.selected = selection[tag.id] ?? false;
    });
  };

  render() {
    return (
      <div class="tag-toggle-list">
        <slot />
      </div>
    );
  }
}
