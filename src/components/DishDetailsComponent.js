import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

function RenderComments({comments}) {
  const commentList = comments.map((comment) => {

    return (
        <li key={comment.id}>
          <p>{comment.comment} </p>
          <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={'/menu'}>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
          <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComments comments={props.comments}/>
          </div>
        </div>
    );
  } else {
    return (<div></div>)
  }
}

export default DishDetails;