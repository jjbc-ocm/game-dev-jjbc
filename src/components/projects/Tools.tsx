import { Code } from '@mui/icons-material';
import { Box, Chip, Typography } from '@mui/material';

interface IProps {
  tools: string[];
}

export const Tools = (props: IProps) => {
  if (!props.tools || props.tools.length === 0) return null;

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Code sx={{ fontSize: 16, mr: 1, color: '#6366f1' }} />
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
          Technologies
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {props.tools.map((tool, toolIndex) => (
          <Chip
            key={toolIndex}
            label={tool}
            size="small"
            variant="outlined"
            sx={{
              borderColor: '#6366f1',
              color: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              '&:hover': {
                backgroundColor: '#6366f1',
                color: 'white'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}; 