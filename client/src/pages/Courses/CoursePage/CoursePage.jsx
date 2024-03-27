import React from 'react'
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

const CoursePage = () => {

    const { id } = useParams();
    console.log(id)

  return (
    <>
    <div>
        <h1>Course Title</h1>
        {id}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Some Text
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            30 lectures. 2hr 43min
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  )
}

export default CoursePage