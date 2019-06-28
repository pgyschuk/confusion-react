import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function RenderComments({comments}) {
  const commentList = comments.map((comment) => {

    return (
        <li key={comment.id}>
          <p>{comment.text} </p>
          <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          }).format(Date.parse(comment.datetime))}</p>
        </li>
    );
  });
  return (
      <div className="col m-1">
        <div className="row">
          <div className="col-12"><h3>Comments</h3></div>
        </div>
        <ul className="list-unstyled">
          {commentList}
        </ul>
      </div>
  );

}

function RenderDish({dish}) {
  console.log('DishDetails Component render is invoked');
  return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
  );
}

const DishDetails = (props) => {
  if (props.dish != null) {
    return (
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
    );
  } else {
    return (<div></div>)
  }
}

export default DishDetails;