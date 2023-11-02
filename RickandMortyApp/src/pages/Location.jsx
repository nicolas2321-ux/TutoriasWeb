import Cards from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { getAllLocations } from '../services/getallLocations';
import { useEffect } from "react";
import {useState}  from "react";
import { Navbar_dark } from "../components/Navbar";

export function Location(){
    const [post, setPost] = useState([]);
    let [pagination, setPagination] = useState(1)

    const nextPage = () => {
        setPagination((pagination+=1))
        document.documentElement.scrollTop = 0
      }
  
      
      const previusPage = () => {
        if(pagination == 1 ){
          setPagination(1)
          alert("Estas en la pagina 1")
        }else{
        setPagination((pagination-=1))
        document.documentElement.scrollTop = 0
        }
      }

    useEffect(() => {
        const onSubmitHandler = async () => {
          try {
            console.log("click");
            const data = await getAllLocations( pagination);
    
            setPost(data);
            console.log(data);
          } catch (error) {
            console.log(error);
           
          }
        };
        onSubmitHandler();
      }, [pagination]);


    return (
        <>
         <Navbar_dark></Navbar_dark>
        <div>
    <Row xs={2} md={4} className="g-4">
      {post.map((props) => (

        <Col>
          <Cards className="mt-5 " >
            
            <Cards.Body>
              <Cards.Title>{props.name}</Cards.Title>

              <Cards.Text>
                Type: {props.type}
              </Cards.Text>
              <Cards.Text>
                Dimension: {props.dimension}
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
        )
        }