import { Button} from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import  {useParams, Link} from 'react-router-dom'



export default function CompanyList({datas, walletName}) {
    const {username} = useParams()
    const {walletId} = useParams()
    
    return <>
        {datas.map((data) => (
        <TableRow key={data._id}>
            <TableCell>{data.companyName}</TableCell>
            <TableCell>{data.symbol}</TableCell>
            <TableCell>${data.stockPrice}</TableCell>
            <TableCell>${data.forecastPrice}</TableCell>
            <TableCell>{data.sharesNumber}</TableCell>
            <TableCell>{data.activityArea}</TableCell>
            <TableCell><Link to={`/about-company/${username}/${walletId}/${data.symbol}?walletName=${walletName}`} style={{ color: 'inherit', textDecoration: 'inherit'}}><Button variant="outlined">About {data.symbol}</Button></Link></TableCell>
        </TableRow>
        ))} 
    </>
}
