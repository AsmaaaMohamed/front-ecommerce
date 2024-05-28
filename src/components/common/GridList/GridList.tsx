import { LottieHandler } from "@components/feedback";
import { Col, Row } from "react-bootstrap";

type TGridListProps<T> = {
    records:T[];
    renderItem:(record:T)=> React.ReactNode;
    emptyMessage: string;
}
const GridList = <T extends {id?:number}>({records, renderItem, emptyMessage}: TGridListProps<T>)=>{
    const mappedList = records.length > 0 ? 
            records.map((record)=>(
                <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
                    {renderItem(record)}
                </Col>
            )) : <LottieHandler type="empty" message={emptyMessage} />;
            return (<Row>{mappedList}</Row>);
}
export default GridList;