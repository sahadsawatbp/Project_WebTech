import  ListGroup  from "react-bootstrap/ListGroup"
import Badge from 'react-bootstrap/Badge'
import './ListProduct.css'
import Button from "react-bootstrap//Button"
const ListProduct = ()=>{
    return(
        <div className="listGroup">
            <ListGroup>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    
                    <div className="ms-2 me-auto">
                        <div    className="fw-bold">Pepsi</div>
                    </div>
                    <Badge bg="primary" pill>
                    <Button>2</Button>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                    >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Coke</div>
                    </div>
                    <Badge bg="primary" pill>
                    <Button>2</Button>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Another</div>
                        </div>
                    <Badge bg="primary" pill>
                    <Button>2</Button>
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
export default ListProduct