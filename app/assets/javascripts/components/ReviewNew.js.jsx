window.ReviewNew = React.createClass({
    render: function() {
        return (
            <div>
                <h1>New Review</h1>
                <ReviewForm {...this.props} />
            </div>
        );
    }
});