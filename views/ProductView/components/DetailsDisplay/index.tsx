import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import { StyledDetailsDisplay } from './StyledDetailsDisplay'

const DetailsDisplaySection = ({ data }: any) => {
    const { productDetails, sizingInfo } = data
    return (
        <StyledDetailsDisplay>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    {productDetails?.label}
                </AccordionSummary>
                <AccordionDetails>
                    {productDetails.details.map(
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
                    {sizingInfo?.label}
                </AccordionSummary>
                <AccordionDetails>
                    <img
                        className="size-image"
                        src={sizingInfo?.chartImage?.src}
                        alt={sizingInfo?.chartImage?.altText}
                    />
                </AccordionDetails>
            </Accordion>
        </StyledDetailsDisplay>
    )
}

export default DetailsDisplaySection
