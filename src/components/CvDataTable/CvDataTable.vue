<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
import { TABLE_SIZE } from '@carbon/web-components/es/components/data-table/defs.js';

export interface CvDataTableProps {
  /**
   * `true` if this table should support batch expansion
   */
  batchExpansion?: boolean;
  /**
   * The g11n collator to use.
   */
  collator?: Intl.Collator;
  /**
   * Specify whether the rows should be able to be expandable
   */
  expandable?: boolean;
  /**
   * The method used when filtering the table with the search bar.
   */
  filterRows?: (rowText: string, searchString: string) => boolean;
  /**
   * The total headers
   */
  headerCount?: number;
  /**
   * `true` if this table contains selectable rows
   */
  isSelectable?: boolean;
  /**
   * `true` if this table should support sorting.
   */
  isSortable?: boolean;
  /**
   * The locale for the collator.
   */
  locale?: string;
  /**
   * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
   */
  overflowMenuOnHover?: boolean;
  /**
   * Specify whether the control should be a radio button or inline checkbox
   */
  radio?: boolean;
  /**
   * The table size.
   */
  size?: TABLE_SIZE;
  /**
   *  If true, will use a width of 'auto' instead of 100%
   */
  useStaticWidth?: boolean;
  /**
   *  true to add useZebraStyles striping.
   */
  useZebraStyles?: boolean;
  /**
   * true if table has a header
   */
  withHeader?: boolean;
  /**
   *  true if AI Labels are added in the rows
   */
  withRowAILabels?: boolean;
}

withDefaults(defineProps<CvDataTableProps>(), {
  batchExpansion: false,
  expandable: false,
  headerCount: 0,
  isSelectable: false,
  isSortable: false,
  locale: 'en',
  overflowMenuOnHover: false,
  radio: false,
  size: TABLE_SIZE.LG,
  useStaticWidth: false,
  useZebraStyles: false,
  withRowAILabels: false,
});

const emit = defineEmits<{
  'header-cell-sort': [event: CustomEvent];
  'search-input': [event: CustomEvent];
  'change-selection-all': [event: CustomEvent];
  'row-change-selection': [event: CustomEvent];
  'batch-actions-cancel-clicked': [event: CustomEvent];
  'row-expando-toggled': [event: CustomEvent];
  'row-selected': [event: CustomEvent];
  'row-all-selected': [event: CustomEvent];
  'sorted': [event: CustomEvent];
  'filtered': [event: CustomEvent];
}>();

import { ref, onMounted } from 'vue';

const tableRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // Workaround for Carbon Web Components issue where \`cds-table\` uses \`querySelector\` 
  // to find \`cds-table-batch-actions\` and \`cds-table-toolbar-content\`. Because Vue 
  // uses shadow/slotted DOM for wrapper components, \`querySelector\` fails.
  // We manually find them and set them on the element.
  
  if (tableRef.value) {
      // Wait for slot to render
    setTimeout(() => {
      const table = tableRef.value as any;
      
      // Override contains to allow slotted elements to pass Carbon's event target checks
      const originalContains = table.contains.bind(table);
      table.contains = function(node: Node) {
        if (node && (node as Element).tagName && (node as Element).tagName.startsWith('CDS-')) {
          // If it's a Carbon component, see if it is a child of this table in the composed path
          // Wait, an easier way is to just walk up the parents
          let current: Node | null = node;
          while (current) {
            if (current === table) return true;
            current = current.parentNode || (current as any).host;
          }
        }
        return originalContains(node);
      };

      const batchActions = table.querySelector('cds-table-batch-actions');
      const toolbarContent = table.querySelector('cds-table-toolbar-content');
      const headerRow = table.querySelector('cds-table-header-row');
      const rows = table.querySelectorAll('cds-table-row');
      
      if (batchActions) table._tableBatchActions = batchActions;
      if (toolbarContent) table._tableToolbarContent = toolbarContent;
      if (headerRow) table._tableHeaderRow = headerRow;
      if (rows && rows.length > 0) table._tableRows = Array.from(rows);
    }, 50);
  }
});

</script>

<template>
  <cds-table
    ref="tableRef"
    :batch-expansion="batchExpansion ? 'true' : undefined"
    :collator="collator"
    :expandable="expandable ? 'true' : undefined"
    :filter-rows="filterRows"
    :header-count="headerCount"
    :is-selectable="isSelectable ? 'true' : undefined"
    :is-sortable="isSortable ? 'true' : undefined"
    :locale="locale"
    :overflow-menu-on-hover="overflowMenuOnHover ? 'true' : undefined"
    :radio="radio ? 'true' : undefined"
    :size="size"
    :use-static-width="useStaticWidth ? 'true' : undefined"
    :use-zebra-styles="useZebraStyles ? 'true' : undefined"
    :with-header="(withHeader || $slots.title || $slots.description) ? 'true' : undefined"
    :with-row-ai-labels="withRowAILabels ? 'true' : undefined"
    @cds-table-header-cell-sort="emit('header-cell-sort', $event)"
    @cds-search-input="emit('search-input', $event)"
    @cds-table-change-selection-all="emit('change-selection-all', $event)"
    @cds-table-row-change-selection="emit('row-change-selection', $event)"
    @cds-table-batch-actions-cancel-clicked="emit('batch-actions-cancel-clicked', $event)"
    @cds-table-row-expando-toggled="emit('row-expando-toggled', $event)"
    @cds-table-row-selected="emit('row-selected', $event)"
    @cds-table-row-all-selected="emit('row-all-selected', $event)"
    @cds-table-sorted="emit('sorted', $event)"
    @cds-table-filtered="emit('filtered', $event)"
  >
    <!-- cds-table discovers header title/description/toolbar by tag name, not named slots.
         All content including CvTableHeaderTitle, CvTableHeaderDescription, and CvTableToolbar
         should be passed as direct children via the default slot. -->
    <slot />
  </cds-table>
</template>
