import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
    records:T[];
    renderItem:(record:T)=> React.ReactNode;
}
const GridList = <T extends {id?:number}>({records, renderItem}: TGridListProps<T>)=>{
    const mappedList = records.length > 0 ? 
            records.map((record)=>(
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
                    {renderItem(record)}
                </Col>
            )) : "There is no list to show";
            return (<Row>{mappedList}</Row>);
}
export default GridList;