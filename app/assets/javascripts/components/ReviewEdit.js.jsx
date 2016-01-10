window.ReviewEdit = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Editing Review</h1>
        <ReviewForm {...this.props} />
      </div>
    );
  }
});