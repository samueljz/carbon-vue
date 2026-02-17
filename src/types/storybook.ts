/**
 * Storybook control types for argTypes
 */

export type ControlType =
    | 'text'
    | 'number'
    | 'boolean'
    | 'select'
    | 'radio'
    | { type: 'text' }
    | { type: 'number' }
    | { type: 'boolean' }
    | { type: 'select'; labels?: Record<string, string> }
    | { type: 'radio' };

export interface ArgTypeConfig {
    control?: ControlType;
    description?: string;
    options?: string[] | number[] | Record<string, string | number>;
    table?: {
        category?: string;
        type?: { summary?: string };
        defaultValue?: { summary?: string };
    };
}

export type ArgTypesConfig = Record<string, ArgTypeConfig>;
