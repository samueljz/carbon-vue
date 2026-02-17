<script setup lang="ts">
import '@carbon/web-components/es/components/file-uploader/index.js';

export interface CvFileUploaderItemProps {
  iconDescription?: string;
  invalid?: boolean;
  size?: string;
  state?: string;
  errorSubject?: string;
  errorBody?: string;
}

withDefaults(defineProps<CvFileUploaderItemProps>(), {
  iconDescription: 'Delete this file',
  invalid: false,
  size: 'md',
  state: 'uploading',
  errorSubject: '',
  errorBody: '',
});

const emit = defineEmits<{
  'cds-file-uploader-item-beingdeleted': [event: CustomEvent];
  'cds-file-uploader-item-deleted': [event: CustomEvent];
}>();
</script>

<template>
  <cds-file-uploader-item
    :icon-description="iconDescription"
    :invalid="invalid"
    :size="size"
    :state="state"
    :error-subject="errorSubject"
    :error-body="errorBody"
    @cds-file-uploader-item-beingdeleted="
      emit('cds-file-uploader-item-beingdeleted', $event)
    "
    @cds-file-uploader-item-deleted="
      emit('cds-file-uploader-item-deleted', $event)
    "
  >
    <slot name="validity-message" />
    <slot name="validity-message-supplement" />
    <slot />
  </cds-file-uploader-item>
</template>
