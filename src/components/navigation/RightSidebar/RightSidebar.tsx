'use client';
import Link from 'next/link';
import {
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuizIcon from '@mui/icons-material/Quiz';

// Constants
import { hotQuestions, popularTags } from '../contants';
import { ROUTES } from '../contants/routes';

export const RightSidebar = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  if (!isLargeScreen) {
    return null;
  }

  return (
    <Paper component={Stack} height="100%" width="350px" overflow="auto" p={2}>
      <Typography variant="h6">Top Questions</Typography>
      <List sx={{ width: '100%' }}>
        {hotQuestions.map(({ id, title }, index) => (
          <ListItemButton
            key={id}
            dense
            LinkComponent={Link}
            href={`${ROUTES.QUESTIONS}/${id}`}
          >
            <ListItem
              secondaryAction={
                <IconButton edge="end">
                  <NavigateNextIcon />
                </IconButton>
              }
            >
              <ListItemIcon
                sx={{ color: index % 2 === 0 ? 'orange' : 'primary' }}
              >
                <QuizIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </ListItemButton>
        ))}

        <Typography variant="h6" mt={4}>
          Popular Tags
        </Typography>
        {popularTags.map(({ id, name, questions }) => (
          <Stack key={id} p={1}>
            <Stack direction="row" justifyContent="space-between">
              <Chip
                clickable
                component={Link}
                href={`${ROUTES.TAGS}/${id}`}
                label={name}
              />
              <Typography variant="caption">{questions}+</Typography>
            </Stack>
          </Stack>
        ))}
      </List>
    </Paper>
  );
};
