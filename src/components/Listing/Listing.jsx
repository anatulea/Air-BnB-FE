import React from 'react';
import {
  CardColumns,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
  CardImg,
} from 'reactstrap';
import { useHistory } from 'react-router-dom'

const Listing = ( listing) => {
  const history = useHistory()

  const routeToListing = e => {
    e.preventDefault()
    history.push(`/listing/${listing.id}`)
  }
  return <div>
    <div className="cards-wrapper">
        <CardColumns>   
            <Card >
              <CardBody>
              <div className="card-image">
                    <CardImg  src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                </div>
                <CardTitle>
                  Name: name of listing
                </CardTitle>
                <CardText>
                  Nr of guest, beds, baths
                </CardText>
                <CardText>
                 price
                </CardText>
                <Button onClick={routeToListing} >View Listing</Button>
              </CardBody>
            </Card>   
            <Card >
              <CardBody>
              <div className="card-image">
                    <CardImg  src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                </div>
                <CardTitle>
                  Name: name of listing
                </CardTitle>
                <CardText>
                  Nr of guest, beds, baths
                </CardText>
                <CardText>
                 price
                </CardText>
                <Button onClick={routeToListing} >View Listing</Button>
              </CardBody>
            </Card>   
            <Card >
              <CardBody>
              <div className="card-image">
                    <CardImg  src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                </div>
                <CardTitle>
                  Name: name of listing
                </CardTitle>
                <CardText>
                  Nr of guest, beds, baths
                </CardText>
                <CardText>
                 price
                </CardText>
                <Button onClick={routeToListing} >View Listing</Button>
              </CardBody>
            </Card>   
            
        </CardColumns>
      </div>
  </div>;
};

export default Listing;
