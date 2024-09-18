import { Box, Typography } from "@mui/material";
import dataNotFound1 from "../../assets/Images/nodatafounddd.jpg";
interface Props {
    heading: string;
    subHeading: string;
}
const NoDatafound = ({heading, subHeading}:Props) => {

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
            <img src={dataNotFound1} alt="No Data" className="noDataImg" />
            <Typography  color="primary" mt={5} fontSize={"1rem"}>{heading}</Typography>
            <Typography variant="body1" color="textSecondary" mb={5}>{subHeading}</Typography>
        </Box>
    );
}
export default NoDatafound