export interface DropdownProps {
    options: Array<{ label: string; value: string }>;
    selectedValue?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  