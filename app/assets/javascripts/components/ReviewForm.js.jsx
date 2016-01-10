window.ReviewForm = React.createClass({
  render: function() {
    var errors = null;
    if(this.props.errors.length > 0) {
      var errorsList = [];
      for(var i = 0; i < this.props.errors.length; ++i) {
        errorsList.push(<li key={"error-" + i}>{this.props.errors[i]}</li>)
      }

      errors = (
        <div id="error_explanation">
          <h2>Errors prohibited this review from being saved:</h2>
          <ul>
            {errorsList}
          </ul>
        </div>
      );
    }

    return (
      <form action={this.props.form_path} method="post">
        {errors}
        <input type="hidden" name="_method" defaultValue={this.props.form_method} />
        <input type="hidden" name="authenticity_token" defaultValue={this.props.csrf_token} />
        <input type="hidden" name="UTF-8" defaultValue="✓" />
        <div className="field">
          <input type="text" className="form-control" id="name" name="review[name]" placeholder="Restaurant name" defaultValue={this.props.name} />
        </div>
        <div className="field">
          <input type="text" className="form-control" id="ate" name="review[ate]" placeholder="What did you eat?" defaultValue={this.props.ate} />
        </div>
        <div className="row">
          <div className="col-xs-6">
            <input type="number" className="form-control" id="rating" name="review[rating]" placeholder="Rating" defaultValue={this.props.rating} />
          </div>
          <div className="col-xs-6">
            <input type="number" className="form-control" id="price" name="review[price]" placeholder="Price" defaultValue={this.props.price} />
          </div>
        </div>
        <div className="field">
          <textarea type="text" rows="3" className="form-control" id="notes" name="review[notes]" placeholder="Notes" defaultValue={this.props.notes} />
        </div>
        <div className="actions">
          <button className="btn btn-warning btn-block btn-lg" type="submit">Submit</button>
        </div>
        <a href={this.props.back_path} className="btn btn-default btn-block btn-lg">Back</a>
      </form>
    );
  }
});