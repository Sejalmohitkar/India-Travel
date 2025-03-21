import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";

const Card2 = () => {

  const cardData = [
    {
      imgScr : "https://indiatravel.com/wp-content/uploads/2021/12/Agra-imghh.jpg",
      title : "Agra",
      text: "Agra is home to the beautiful Taj Mahal. Also visit Agra Fort, Fatehpur Sikri, and Sikandra."
    },
    {
      imgscr : "https://indiatravel.com/wp-content/uploads/2021/12/Amritsar-imghh.jpg",
      title : "Amritsar",
      text: "Amritsar is known for the Golden Temple and rich Punjabi culture."
    },
    {
      imgscr : "https://indiatravel.com/wp-content/uploads/2021/12/Auli-imghh.jpg",
      title : "Auli",
      text: "Auli is a scenic hill station known for skiing and breathtaking views."
    },
    {
      imgScr : "https://indiatravel.com/wp-content/uploads/2021/12/Alleppey-Imghh.png",
      title : "Alleppey",
      text : "Alleppey is the hub for backwater tourism in Kerala. House boats locally called “kettuvallam” are available on hire on a daily basi."
    },
    {
      imgScr : "https://indiatravel.com/wp-content/uploads/2021/12/Bikaner-Imghh.jpg",
      title : "Bikaner",
      text : "Bikaner is a prominent city of Rajasthan and is in the heart of the Thar Desert. It is famed for its architectural excellence."
    },
    {
      imgScr :"https://indiatravel.com/wp-content/uploads/2021/12/chhattisgarh-imgg0.jpg",
      title : "Chhattisgarh",
      text : "Chattisgarh is the state in Central India, endowed with a rich cultural heritage and attractive natural diversit also known land of waterfalls."
    },
    {
      imgScr : "https://indiatravel.com/wp-content/uploads/2021/12/Agra-imghh.jpg",
      title : "Agra",
      text : "Agra is home to the beautiful Taj Mahal. Also visit Agra Fort, Fatehpur Sikri, and Sikandra."
    },
    {
      imgScr : "https://indiatravel.com/wp-content/uploads/2024/08/Darjeeling-train-toy.webp",
      title : "Darjeeling",
      text : "Explore the enchanting beauty of Darjeeling with its breathtaking views, iconic toy train rides, lush tea gardens, and vibrant local culture."
    },
    {
      imgSrc: "https://indiatravel.com/wp-content/uploads/2021/12/Auli-imghh.jpg",
      title: "Auli",
      text: "Auli is a scenic hill station known for skiing and breathtaking views."
    },
    {
      imgSrc: "https://indiatravel.com/wp-content/uploads/2021/12/Gulmarg-imghh.jpg",
      title: "Gulmarg",
      text: "A beautiful meadow nestled among the mountains of Kashmir is 50 km (30 miles) from Srinagar, at an altitude of 2730 meters (9000 feet)."
    },
    {
      imgSrc: "https://indiatravel.com/wp-content/uploads/2021/12/Jaisalmer-imgh.jpg",
      title: "Jaisalmer",
      text: "In Rajasthan’s Thar Desert, lies the golden city of Jaisalmer which reminds one excerpt from the Arabian Nights tales."
    },
    {
      imgSrc: "https://indiatravel.com/wp-content/uploads/2021/12/Jodhpur.jpg",
      title: "Jodhpur",
      text: "Jodhpur, in Rajasthan, is known for its rich culture, history, and heritage. This popular tourist destination is also known as the Blue City."
    }
  ];
  return (
    <div>
    <Container className="mt-5">
    <Row className="text-center">
      {cardData.map((card, index) => (
        <Col key={index} md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>

      
      {/* <Container className="mt-5">
      <Row className="text-center">
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Agra-imghh.jpg" />
            <Card.Body>
              <Card.Title>Agra</Card.Title>
              <Card.Text>Agra is home to the beautiful Taj Mahal. Also visit Agra Fort, Fatehpur Sikri, and Sikandra.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Amritsar-imghh.jpg" />
            <Card.Body>
              <Card.Title>Amritsar</Card.Title>
              <Card.Text>Amritsar is known for the Golden Temple and rich Punjabi culture.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Auli-imghh.jpg" />
            <Card.Body>
              <Card.Title>Auli</Card.Title>
              <Card.Text>Auli is a scenic hill station known for skiing and breathtaking views.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Alleppey-Imghh.png" />
            <Card.Body>
              <Card.Title>Alleppey</Card.Title>
              <Card.Text>Alleppey is the hub for backwater tourism in Kerala. House boats locally called “kettuvallam” are available on hire on a daily basi.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Bikaner-Imghh.jpg" />
            <Card.Body>
              <Card.Title>Bikaner</Card.Title>
              <Card.Text>Bikaner is a prominent city of Rajasthan and is in the heart of the Thar Desert. It is famed for its architectural excellence.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/chhattisgarh-imgg0.jpg" />
            <Card.Body>
              <Card.Title>Chattisgarh</Card.Title>
              <Card.Text>Chattisgarh is the state in Central India, endowed with a rich cultural heritage and attractive natural diversit also known land of waterfalls</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Agra-imghh.jpg" />
            <Card.Body>
              <Card.Title>Agra</Card.Title>
              <Card.Text>Agra is home to the beautiful Taj Mahal. Also visit Agra Fort, Fatehpur Sikri, and Sikandra.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2024/08/Darjeeling-train-toy.webp" />
            <Card.Body>
              <Card.Title>Darjeeling</Card.Title>
              <Card.Text>Explore the enchanting beauty of Darjeeling with its breathtaking views, iconic toy train rides, lush tea gardens, and vibrant local culture.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Auli-imghh.jpg" />
            <Card.Body>
              <Card.Title>Auli</Card.Title>
              <Card.Text>Auli is a scenic hill station known for skiing and breathtaking views.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Gulmarg-imghh.jpg" />
            <Card.Body>
              <Card.Title>Gulmarg</Card.Title>
              <Card.Text>A beautiful meadow nestled among the mountains of Kashmir is 50 km (30 miles) from Srinagar, at an altitude of 2730 meters (9000 feet).</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Jaisalmer-imgh.jpg" />
            <Card.Body>
              <Card.Title>Jaisalmer</Card.Title>
              <Card.Text>In Rajasthan’s Thar Desert, lies the golden city of Jaisalmer which reminds one excerpt from the Arabian Nights tales.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://indiatravel.com/wp-content/uploads/2021/12/Jodhpur.jpg" />
            <Card.Body>
              <Card.Title>Jodhpur</Card.Title>
              <Card.Text>Jodhpur Jodhpur, in Rajasthan, is known for its rich culture, history, and heritage. This popular tourist destination is also known as the Blue City</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
    </div>
  );
};

export default Card2
