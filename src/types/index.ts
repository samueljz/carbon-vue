// Button types
export type ButtonKind =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'danger'
    | 'danger-tertiary'
    | 'danger-ghost';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ButtonType = 'button' | 'submit' | 'reset';

export type TooltipAlignment =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end';

// Button-specific tooltip alignment
export type ButtonTooltipAlignment = 'start' | 'center' | 'end';

// Button-specific tooltip position
export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

// Accordion types

export type AccordionSize = 'sm' | 'md' | 'lg';

export type AccordionAlignment = 'start' | 'end';

// Tag types
export type TagType =
    | 'red'
    | 'magenta'
    | 'purple'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'gray'
    | 'cool-gray'
    | 'warm-gray'
    | 'high-contrast'
    | 'outline';

export type TagSize = 'sm' | 'md' | 'lg';

export type PopoverAlignment =
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top';

// Notification types
export type NotificationKind =
    | 'error'
    | 'info'
    | 'info-square'
    | 'success'
    | 'warning'
    | 'warning-alt';

// Toggle types
export type ToggleSize = 'sm' | 'md';

// Text Input types
export type TextInputSize = 'sm' | 'md' | 'lg';

export type TextInputType =
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'number';

// Loading types
export type LoadingType = 'regular' | 'small';

// Common types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// DatePicker types
/**
 * Date picker input kinds.
 */
export enum DATE_PICKER_INPUT_KIND {
    /**
     * Simple variant - comes without the calendar dropdown.
     */
    SIMPLE = 'simple',

    /**
     * Single variant - single date selection with calendar.
     */
    SINGLE = 'single',

    /**
     * Start date for the range variant.
     */
    FROM = 'from',

    /**
     * End date for the range variant.
     */
    TO = 'to',
}

export type DatePickerInputKind = `${DATE_PICKER_INPUT_KIND}`;

