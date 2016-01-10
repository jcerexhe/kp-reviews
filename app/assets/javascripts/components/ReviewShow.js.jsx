window.ReviewShow = React.createClass({
  render: function() {
    return (
      <div>
        <p id="notice">{this.props.notice}</p>
        <p>
          <strong>Restaurant name: </strong>
          {this.props.name}
        </p>
        <p>
          <strong>I ate: </strong>
          {this.props.ate}
        </p>
        <p>
           <strong>Rating: </strong>
           {this.props.rating}
        </p>
        <p>
           <strong>Price: </strong>
           {this.props.price}
        </p>
        <p>
           <strong>Notes: </strong>
           {this.props.notes}
        </p>

        <a href={this.props.edit_path} className="btn btn-warning btn-block btn-lg">Edit</a>
        <a href={this.props.back_path} className="btn btn-default btn-block btn-lg">Back</a>
      </div>
    );
  }
});