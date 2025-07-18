export type FormFieldType = 'text' | 'number' | 'currency' | 'date' | 'toggle';

export interface FormField {
  key: string;
  label: string;
  placeholder?: string;
  type: FormFieldType;
  required?: boolean;
  disabled?: boolean;
}

export interface FormConfig<T extends { id: number | null | undefined }> {
  model: T;
  title: string;
  fields: FormField[];
  saveUrl: string;
  deleteUrl?: string;
}
