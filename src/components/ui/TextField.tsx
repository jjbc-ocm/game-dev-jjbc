import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, SxProps, Theme } from '@mui/material';

interface TextFieldProps extends Omit<MuiTextFieldProps, 'sx'> {
  sx?: SxProps<Theme>;
}

export const TextField: React.FC<TextFieldProps> = ({
  sx,
  ...props
}) => {
  // Common styling for all text fields
  const commonStyles: SxProps<Theme> = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      '&:hover fieldset': {
        borderColor: '#6366f1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6366f1',
      },
    },
  };

  // Combine common styles with any additional sx props
  const combinedSx = {
    ...commonStyles,
    ...sx
  } as SxProps<Theme>;

  return (
    <MuiTextField
      fullWidth
      sx={combinedSx}
      {...props}
    />
  );
}; 