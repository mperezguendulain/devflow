import Image from 'next/image';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';

// Icons
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Utils
import { getElapsedTime } from '@/utils/dates';

// Types
import type { Question } from '@/types/globals';
import { ROUTES } from '@/components/navigation/contants/routes';

type QuestionDataProp = {
  question: Question;
};

export const QuestionData = ({ question }: QuestionDataProp) => {
  return (
    <Stack
      justifyContent="space-between"
      mt={3}
      gap={2}
      sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
    >
      <Stack direction="row" alignItems="center">
        <Link
          href={`${ROUTES.PROFILE}/${question.author.id}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Image
            alt="Author Image"
            src={question.author.image}
            width={16}
            height={16}
            style={{
              borderRadius: '50%'
            }}
          />
          <Typography sx={{ mx: 1 }} variant="body2">
            {question.author.name}
          </Typography>
        </Link>
        <Typography
          sx={{ mx: 1, display: { xs: 'none', sm: 'block' } }}
          variant="caption"
        >
          • asked {getElapsedTime(question.createdAt)}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center">
          <ThumbUpOffAltIcon sx={{ fontSize: 16 }} />
          <Typography ml={0.5} variant="caption">
            {question.upvotes} Votes
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
          <Typography ml={0.5} variant="caption">
            {question.answers} Answers
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <VisibilityIcon sx={{ fontSize: 16 }} />
          <Typography ml={0.5} variant="caption">
            {question.views} Views
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
