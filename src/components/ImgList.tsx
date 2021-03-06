import React, { useEffect, useState } from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Config from '../config';

type Error = { message: string }
export type Item = {
  id: number,
  mediaUrl: string,
  mediaType: string,
  likeCount: number,
  commentsCount: number,
  caption: string
   }

const ImgList = (props: { storedItems: Item[] }) =>{
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>(props.storedItems);

  const fetchPhotos = (hashtagId: string) => {
    FB.api(
      `/${hashtagId}/top_media`,
      'get',
      {
        "user_id": Config.fbPageUserId,
        access_token: Config.fbAccessToken,
        "fields":"id,media_type,media_url,permalink,like_count,comments_count,caption,timestamp,children{id,media_url}"
      },
      function(response: any) {
        if (response.error) {
          setError({ message: response.error.message });
          return;
        }
        setIsLoaded(true);
        const items = response.data.map((post: any): Item => {
          return {
            id: post.id,
            mediaUrl: post.media_url,
            mediaType: post.media_type,
            likeCount: post.like_count,
            commentsCount: post.comments_count,
            caption: post.caption
          }
        });
        setItems(items);
        updateStoredItems(items);
      }
    );
  }
  const updateStoredItems = (updatedItems: Item[]) => {
    localStorage.setItem('storedItems', JSON.stringify(updatedItems));
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const hashMonsteraId = '17843684002004351'
    if (items.length === 0) {
      setTimeout(()=> fetchPhotos(hashMonsteraId), 1000);
    } else {
      setIsLoaded(true);
    }
  }, [])

  if (error) {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div>Error: {error.message}</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div>Loading...</div>
      </div>
    );
  } else {
    return (
      <Box>
        <ImageList sx={{ width:'80%' }} cols={1} >
          {items.map((item => (
            <ImageListItem key={item.id}>
              <img
                src={item.mediaUrl}
                loading="lazy"
                alt='img'/>
              <ImageListItemBar
                title={item.commentsCount}
                subtitle={<span>by: {item.likeCount}</span>}
                position="below"
              />
            </ImageListItem>
          )))
          }
        </ImageList>
    </Box>
    );
  }

}
export default ImgList;
