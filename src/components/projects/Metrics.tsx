import { TrendingUp } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

interface IProps {
  metrics: Array<{ type: string; value: string }>;
}

export const Metrics = (props: IProps) => {
  if (!props.metrics || props.metrics.length === 0) return null;

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TrendingUp sx={{ fontSize: 16, mr: 1, color: '#10b981' }} />
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
          Key Achievements
        </Typography>
      </Box>
      <Paper elevation={0} sx={{
        backgroundColor: 'rgba(16, 185, 129, 0.08)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        p: 2,
        borderRadius: 2
      }}>
        <List dense sx={{ py: 0 }}>
          {props.metrics.map((metric, metricIndex) => (
            <ListItem key={metricIndex} sx={{ py: 0.5, px: 0 }}>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {metric.value}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600 }}>
                    {metric.type}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};