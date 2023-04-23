import { Typography, Card, CardContent, CardHeader, List } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { itemsAtom, testimonialsAtom } from '../atoms';
import { useEffect } from 'react';
import NavBar from './NavBar';

export default function Testimonials() {
  const testimonials = useAtomValue(testimonialsAtom);
  const [items, setItems] = useAtom(itemsAtom);

  useEffect(() => {
    testimonials &&
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(r => r.json())
      .then(json => setItems(json));
  }, [testimonials, setItems]);

  return (
    <>
      <NavBar />
      <List sx={{overflowY: 'auto', height: 'calc(100% - 166px)'}}>
        {!items 
          ? null 
          : items.map(item => {
              return (
                <Card key={item.id} variant='outlined'>
                  {
                    item.name && (
                      <CardHeader
                        title={item.name}
                        subheader={item.email ? item.email : null}
                      />
                    )
                  }
                  {
                    item.body && (
                      <CardContent>
                        <Typography variant='h4'>{item.title}</Typography>
                        <Typography>{item.body}</Typography>
                      </CardContent>
                    )
                  }
                </Card>
              );
            })
        }
      </List>
    </>
  );
}
