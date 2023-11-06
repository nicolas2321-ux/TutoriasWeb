import { useEffect } from "react";
import { getAllCharacter } from "../services/getallcharacter";
import {useState}  from "react";
import Cards from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { Navbar_dark } from "../components/Navbar";
import { search } from "../components/Navbar";



export function Card(){
  
    const [post, setPost] = useState([]);
   
    const [pagination, setPagination] = useState(1)


   
    let isAlive = (alive) => {
      if (alive == "Alive") {
        return true
      }
      else  return false
      
  }
    let nextPage = () => {
      let pagina_actual = pagination
      setPagination((pagina_actual+=1))
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

    useEffect(() => {
        const onSubmitHandler = async () => {
          try {
            const data = await getAllCharacter(pagination);
           
            setPost(data);
          
          } catch (error) {
            console.log(error);
           
          }
        };
        onSubmitHandler();
      }, [pagination]);

        /*
        peticion a la api
        100 resultados
        100 => arreglo
        arreglo.map = 5 => nuevo_arreglo
        arreglo.map (comienza desde la posicion ) 6 => 10 => nuevo_arreglo
        arreglo.map (comienza desde la posicion ) 11 => 15 => nuevo_arreglo
        */

      return (
        <>
        <Navbar_dark></Navbar_dark>
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
        )
        }