import React from 'react'
import { BiCommentDetail } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { Typography, Button, Box } from '@mui/material';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { useAtom } from 'jotai';
import { testimonialsAtom } from '../atoms';

export default function NavBar() {
  const [testimonials, setTestimonials] = useAtom(testimonialsAtom);

  const onSelectClick = (key) => {
    switch(key) {
      case 'posts':
        setTestimonials('Posts');
        break;

      case 'users':
        setTestimonials('Users');
        break;

      case 'comments':
        setTestimonials('Comments');
        break;

      default:
        return;
    }
  };

  return (
    <Box height='150px'>
     <Typography variant='h3' textAlign='center'>
        Testimonials
      </Typography>
      <Box display='flex' gap='10px' justifyContent='center'>
        <Button 
          variant='contained' 
          startIcon={<BsFillFileEarmarkPostFill />}
          onClick={() => onSelectClick('posts')}
        >
          Posts
        </Button>
        <Button 
          variant='contained' 
          startIcon={<FaUserAlt />}
          onClick={() => onSelectClick('users')}

        >
          Users
        </Button>
        <Button 
          variant='contained' 
          startIcon={<BiCommentDetail />}
          onClick={() => onSelectClick('comments')}
        >
          Comments
        </Button>
      </Box>
      <Typography
        textAlign='center' 
        color='primary'
        variant='h4'
      >
        {!testimonials ? 'Select from above!' : testimonials}
      </Typography>
    </Box>
  )
}
