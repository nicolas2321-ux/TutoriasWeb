import { Navbar_dark } from "../components/Navbar"
import { useEffect } from "react";
import { searchByName } from "../services/searchByName";
import {useState}  from "react";
import Cards from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { Card } from "react-bootstrap";





export function Search({name, veracity}){
    
    const [post, setPost] = useState([]);
    let [chara, setChara]= useState("");
    const [pagination, setPagination] = useState(1)
    let character = localStorage.getItem('search');
    console.log(character)
    let [error_com, setError] = useState(false)
    // setChara(character);
    //console.log(chara)

   
    let isAlive = (alive) => {
      if (alive == "Alive") {
        return true
      }
      else  return false
      
  }
   

    useEffect(() => {
        const onSubmitHandler = async () => {
          try {
            console.log("click");
            
            const data = await searchByName( character);
            
            console.log(data);
            if(data === undefined ){
                setError(true)
            }else{
                setPost(data);
                setError(false)
            }
          } catch (error) {
            
           
          }
        };
        onSubmitHandler();
      }, [pagination]);

      if(error_com === true){
        
        return (
            <>
            <Navbar_dark></Navbar_dark>
            
            <Card style={{ width: '18rem', marginTop: "10%", marginLeft: "auto", marginRight:"auto" } }>
            <Card.Img variant="top" src="https://previews.123rf.com/images/pavlostv/pavlostv1805/pavlostv180500401/101741080-vaya-p%C3%A1gina-de-error-404-no-encontrada-concepto-de-robot-futurista-vector.jpg" />
            <Card.Body>
              <Card.Title>:C</Card.Title>
              <Card.Text>
               Character not found
              </Card.Text>
              
            </Card.Body>
          </Card>
          </>
       
      
      )
      }

      else{
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

          </div>
          </>
    )
      }
}