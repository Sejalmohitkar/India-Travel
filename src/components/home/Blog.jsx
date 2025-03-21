import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Blog = () => {
  
  return (
    <div>
      <h1 className="text-dark fw-bold fs-1 text-center mt-5 mb-5">
        LUXURY TRAINS
      </h1>
      <Container className="d-flex justify-content-center gap-4 flex-wrap">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://indiatravel.com/wp-content/uploads/2025/03/Chardham-Yatra-from-USA-or-Canada.webp"
          />
          <Card.Body>
            <Card.Title>
              Step-by-Step Guide: How to Plan Your Chardham Yatra from the
              USA/Canada
            </Card.Title>
            <Card.Text className="text-lg-start">
              The Chardham Yatra is one of the holiest pilgrimages in India,
              covering four sacred sites—Yamunotri, Gangotri, Kedarnath, and
              Badrinath. For devotees living in the USA and Canada, planning
              this yatra requires careful preparation, from flights and visas to
              local travel arrangements. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://indiatravel.com/wp-content/uploads/2025/01/Things-to-do-in-Varanasi.webp"
          />
          <Card.Body>
            <Card.Title>
              Things to Do in Varanasi – Your Ultimate Guide to India’s
              Spiritual Capital
            </Card.Title>
            <Card.Text className="text-lg-start">
              Among the oldest cities on earth, Varanasi exists as Kashi or
              Banaras. Situated next to the sacred Ganges River, Varanasi exists
              as the religious headquarters of India because travelers value its
              combination of spiritual dimensions with historical and cultural
              elements.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://indiatravel.com/wp-content/uploads/2024/10/Andaman-Tour-places.webp"
          />
          <Card.Body>
            <Card.Title>
              Top 10 Andaman Tour Places You Must Visit in 2025
            </Card.Title>
            <Card.Text className="text-lg-start">
              The Andaman Islands, a tropical paradise nestled in the Bay of
              Bengal, are known for their breathtaking natural beauty,
              crystal-clear waters, and rich historical significance. Offering a
              diverse range of experiences, Andaman tour places include pristine
              beaches.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Blog;
