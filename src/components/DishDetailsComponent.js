import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetails extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dish != null) {
      const comments = this.props.dish.comments.map((comment) => {
        return (<div>
              <div className="row mb-3">
                <div className="col-12">{comment.text}</div>
              </div>
            <div className="row mb-3">
              <div className="col-12">-- {comment.author}, {comment.datetime}</div>
            </div>

            </div>

        );
      })
      return (
          <div className="row">
            <div className="col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col m-1">
              <div className="row">
                <div className="col-12"><h3>Comments</h3></div>
              </div>
              {comments}
            </div>
          </div>
      );
    } else {
      return (<div></div>)
    }
  }

}

export default DishDetails;