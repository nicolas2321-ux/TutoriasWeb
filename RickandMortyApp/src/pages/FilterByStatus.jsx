import { Navbar_dark } from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { FilterbyStatus } from "../services/filterByStatus";
import { useEffect } from "react";
import Cards from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function FilterStatus() {
    const [gender, setGender] = useState("Alive")
    const [post, setPost] = useState([])
    let [pagination, setPagination] = useState(1)
    useEffect(() => {
        const onSubmitHandler = async () => {
          try {
            console.log("click");
            const data = await FilterbyStatus( gender, pagination);
    
            setPost(data);
            console.log(data);
          } catch (error) {
            console.log(error);
           
          }
        };
        onSubmitHandler();
      }, [gender, pagination]);
    
      let isAlive = (alive) => {
        if (alive == "Alive") {
          return true
        }
        else  return false
        
    }

    function changeParameter(gen){
        setGender(gen)
    }

    let nextPage = () => {
        setPagination((pagination+=1))
        document.documentElement.scrollTop = 0
      }
  
      
      let previusPage = () => {
        if(pagination == 1 ){
          setPagination(1)
          alert("Estas en la pagina 1")
        }else{
        setPagination((pagination-=1))
        document.documentElement.scrollTop = 0
        }
      }

    return (
        <>
            <Navbar_dark></Navbar_dark>
            <div className="trans">
                <Button
                    variant="danger"
                    onClick={()=>{changeParameter("Dead")}}
                    className="my-5  mx-3 px-4 text-light"
                >
                   Dead
                </Button>
                
                <Button
                    variant="success"
                    onClick={()=>{changeParameter("Alive")}}
                    className="my-5  mx-3 px-4 text-light"
                >
                    Alive
                </Button>

                <Button
                    variant="info"
                    onClick={()=>{changeParameter("Unknown")}}
                    className="my-5  mx-3 px-4 text-light"
                >
                    Unknown
                </Button>
            </div>
            <div>

    <Row xs={2} md={3} className="g-4">
      {post.map((props) => (

        <Col>
          <Cards className="mt-5 " >
            <Cards.Img variant="top" src={props.image} />
            <Cards.Body>
              <Cards.Title>{props.name}</Cards.Title>
              <Cards.Text>
                Status: {props.status} {isAlive(props.status) ? "🟢":"🔴"}
              </Cards.Text>
              <Cards.Text>
                Gender: {props.gender}
              </Cards.Text>
              <Cards.Text>
                Origen: {props.origin.name}
              </Cards.Text>
              <Cards.Text>
                Species: {props.species}
              </Cards.Text>
              
              
            </Cards.Body>
          </Cards>
        </Col>
      ))}
    </Row>
    <div className="trans">
    <Button variant="warning" onClick = {() => {previusPage()}}className="my-5  mx-3 px-4 text-light" >Atras</Button>
    <Button  onClick = {() => {nextPage()}} variant="success" className="my-5  mx-3" >Siguiente</Button>
   
    </div>
          
          </div>
        </>
    );
}
