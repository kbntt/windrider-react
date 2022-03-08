import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Markdown = (props) => {
  const { fileUrl } = props;
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`${fileUrl}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <ReactMarkdown>{post}</ReactMarkdown>
    </>
  );
};

export default Markdown;
