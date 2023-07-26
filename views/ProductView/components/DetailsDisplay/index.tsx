import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import { StyledDetailsDisplay } from './StyledDetailsDisplay'

const DetailsDisplaySection = ({ data }: any) => {
    return (
        <StyledDetailsDisplay>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    {data?.productDetails?.label}
                </AccordionSummary>
                <AccordionDetails>
                    {data?.productDetails.details.map(
                        (detail: string, index: number) => {
                            return <li key={index}>{detail}</li>
                        }
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    {data?.sizingInfo?.label}
                </AccordionSummary>
                <AccordionDetails>
                    <img
                        className="size-image"
                        src={data?.sizingInfo?.chartImage?.src}
                        alt={data?.sizingInfo?.chartImage?.altText}
                    />
                </AccordionDetails>
            </Accordion>
        </StyledDetailsDisplay>
    )
}

export default DetailsDisplaySection
