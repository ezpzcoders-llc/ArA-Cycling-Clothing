import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import { StyledDetailsDisplay } from './StyledDetailsDisplay'

const DetailsDisplaySection = ({
    product_details,
    product_sizing_info
}: any) => {
    return (
        <StyledDetailsDisplay>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    Product Details
                </AccordionSummary>
                <AccordionDetails>
                    {product_details?.map(
                        (detail: { product_detail: string }, index: number) => {
                            return <li key={index}>{detail.product_detail}</li>
                        }
                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    Size Help
                </AccordionSummary>
                <AccordionDetails>
                    <img
                        className="size-image"
                        src={product_sizing_info?.size_chart_img_src}
                        alt={product_sizing_info?.size_chart_img_altText}
                    />
                </AccordionDetails>
            </Accordion>
        </StyledDetailsDisplay>
    )
}

export default DetailsDisplaySection
