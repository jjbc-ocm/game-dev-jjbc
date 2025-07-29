import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress, SxProps, Theme } from '@mui/material';
import { Link } from 'react-scroll';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'navigation' | 'project';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  scrollTo?: string;
  scrollDuration?: number;
  scrollSmooth?: boolean;
  sx?: SxProps<Theme>;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  scrollTo,
  scrollDuration = 500,
  scrollSmooth = true,
  children,
  disabled,
  startIcon,
  endIcon,
  sx,
  href,
  target,
  rel,
  ...props
}) => {
  // Base styles common to all variants
  const baseStyles = {
    fontWeight: 600,
    textTransform: 'none' as const,
    transition: 'all 0.3s ease-in-out',
    borderRadius: variant === 'navigation' ? 1 : 3,
  };

  // Variant-specific styles
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      px: 4,
      py: 1.5,
      fontSize: '1.1rem',
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
      '&:hover': {
        background: 'linear-gradient(135deg, #5b5ee6 0%, #7c3aed 100%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 25px rgba(99, 102, 241, 0.4)'
      },
      '&:disabled': {
        background: '#9ca3af',
        transform: 'none',
        boxShadow: 'none'
      }
    },
    navigation: {
      color: 'white',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-1px)'
      }
    },
    project: {
      borderRadius: 2,
      textTransform: 'none',
      fontWeight: 600,
      px: 3,
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      '&:hover': {
        background: 'linear-gradient(135deg, #5b5ee6 0%, #7c3aed 100%)'
      }
    }
  };

  // Size-specific styles
  const sizeStyles = {
    small: {
      px: 2,
      py: 0.5,
      fontSize: '0.875rem'
    },
    medium: {
      px: 3,
      py: 1,
      fontSize: '1rem'
    },
    large: {
      px: 4,
      py: 1.5,
      fontSize: '1.1rem'
    }
  };

  // Combine all styles
  const combinedSx = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...sx
  } as SxProps<Theme>;

  // Handle scroll navigation
  if (scrollTo) {
    return (
      <MuiButton
        component={Link}
        to={scrollTo}
        smooth={scrollSmooth}
        duration={scrollDuration}
        variant="text"
        size={size}
        disabled={disabled || loading}
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : startIcon}
        endIcon={endIcon}
        sx={combinedSx}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }

  // Regular button
  const buttonProps: any = {
    variant: variant === 'navigation' ? 'text' : 'contained',
    size,
    disabled: disabled || loading,
    startIcon: loading ? <CircularProgress size={20} color="inherit" /> : startIcon,
    endIcon,
    sx: combinedSx,
    ...props
  };

  // Only add href-related props if href is provided
  if (href) {
    buttonProps.href = href;
    if (target) buttonProps.target = target;
    if (rel) buttonProps.rel = rel;
  }

  return (
    <MuiButton {...buttonProps}>
      {children}
    </MuiButton>
  );
}; 